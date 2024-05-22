import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { GlobalStyles } from "../Constants/Style";
import { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseForm from "../Components/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";
import LoadingOverlay from "../Components/LoadingOverlay";
import ErrorOverlay from "../Components/ErrorOverlay";

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpenseContext);
  const [error, setError] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  async function deleteHandeler() {
    setIsUpdating(true);
    try {
      await deleteExpense(expenseId);
      expenseCtx.deleteExpense(expenseId);
      navigation.goBack();
    } catch (error) {
        setError("Unable to delete Expense");
        setIsUpdating(false);
    }
  }

  function cancelHandeler() {
    navigation.goBack();
  }

  async function confirmHandeler(expenseData) {
    setIsUpdating(true);
    try{
    if (isEditing) {
      
      
        await updateExpense(expenseId, expenseData);
    
        expenseCtx.updateExpense({ expenseId, expenseData });
        //   setIsUpdating(false);
    } else {
      
      
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      
    //   setIsUpdating(false);
    }
    navigation.goBack();
  }catch(error){
    setError('Unable to Make changes to expense')
    setIsUpdating(false);
  }

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  if (isUpdating) {
    return <LoadingOverlay />;
  }
  if (error) {
    return <ErrorOverlay message={error} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        expenseId={expenseId}
        onCancel={cancelHandeler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandeler}
      />

      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconButton
            name="delete"
            size={24}
            color="red"
            onPress={deleteHandeler}
          />
        )}
      </View>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary200,
    flex: 1,
  },
  deleteContainer: {
    alignItems: "center",
    padding: 10,
    borderTopWidth: 2,
    margin: 30,
    marginTop: 10,
  },
});
