import React from 'react'
import ExpenseForm from './components/EntryForm'
// import NewEntry from './components/NewEntry'

function App() {
  

  // const addEntryHandler = expense => {
  //   console.log('In App.js');
  //   console.log(expense);
  // };

  
  
  return (
    
    <div>
      <ExpenseForm />
      {/* <NewEntry onAddExpense={addEntryHandler} /> */}
    </div>
  )
}

export default App
