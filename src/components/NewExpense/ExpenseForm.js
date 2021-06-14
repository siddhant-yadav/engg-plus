/*

import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
*/



import React, { useState } from 'react';


import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredMake, setEnteredMake] = useState('');
  const [enteredQty, setEnteredQty] = useState('');
  const [enteredUnit, setEnteredUnit] = useState('');
  const [enteredVendorName, setEnteredVendorName] = useState('');
  const [enteredType, setEnteredType] = useState('');
  const [enteredBO, setEnteredBO] = useState('');
  const [enteredPO, setEnteredPO] = useState('');
  // const [enteredNetAmt, setEnteredNetAmt] = useState('');
    




//   Title	Date	Category	Item#	Description	Make 	Qty	Unit	Bill No	PO No	Vendor Name	Price /Item	Taxes	Total Price	Asset	Image

  const titleChangeHandler = (event) => {setEnteredTitle(event.target.value);};
  const amountChangeHandler = (event) => {setEnteredAmount(event.target.value);};
  const dateChangeHandler = (event) => {setEnteredDate(event.target.value);};
  const categoryChangeHandler = (event) => {setEnteredCategory(event.target.value);};
  const makeChangeHandler = (event) => {setEnteredMake(event.target.value);};
  // const netAmtChangeHandler = (event) => {setEnteredNetAmt(event.target.value);};
  const qtyChangeHandler = (event) => {setEnteredQty(event.target.value);};
  const unitChangeHandler = (event) => {setEnteredUnit(event.target.value);};
  const vendorNameChangeHandler = (event) => {setEnteredVendorName(event.target.value);};
  const typeChangeHandler = (event) => {setEnteredType(event.target.value);};
  const boChangeHandler = (event) => {setEnteredBO(event.target.value);};
  const poChangeHandler = (event) => {setEnteredPO(event.target.value);};

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = 
    {
        title: enteredTitle,
        date: new Date(enteredDate),
        amount: enteredAmount,
        category : enteredCategory,
        make : enteredMake,
        qty : enteredQty,
        unit : enteredUnit,
        vendor : enteredVendorName,
        type : enteredType,
        bo : enteredBO,
        po : enteredPO,
    };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
    
    // var jsonContent = JSON.stringify(expenseData);
    // console.log(jsonContent);


    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredCategory('');
    setEnteredMake('');
    setEnteredQty('');
    setEnteredUnit('');
    setEnteredVendorName('');
    setEnteredType('');

  };

  return (

    <div>
    <h1 className = "head">Engineering Plus</h1>

    <form className = "form" onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        
        <div className='new-expense__control'>
          <label>Project Name</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      


        <div className='new-expense__control'>
          <label>Category</label>
          <select value = {enteredCategory} onChange={categoryChangeHandler}>            
            <option value="" onClick = {() => {setEnteredMake('')}} >---Please Enter---</option>
            <option value="Tools" onClick = {() => {setEnteredCategory('Tools')}}>Tools</option>
            <option value="Fuel" onClick = {() => {setEnteredCategory('Fuel')}}>Fuel</option>
            <option value="NEW" className = "invent" > + Add New Category</option>

          </select>
        </div>  

        <div className='new-expense__control'>
          <label>Type</label>
          <select value = {enteredType} onChange={typeChangeHandler}>            
            {/* <option value="" onClick = {() => {setEnteredType('')}} >---Please Enter---</option> */}
            <option value="Fuel" onClick = {() => {setEnteredType('Fuel')}}>Non-Consumable</option>
            <option value="Tools" onClick = {() => {setEnteredType('Tools')}}>Consumable</option>
            {/* <option value="NEW" className = "invent" onClick = {() => {setEnteredType('Volvo')}}> + Add New Category</option> */}

          </select>
        </div>  

        
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Quantity   </label>
          <input
            placeholder = '0'
            type='number'
            min='1'
            step='1'
            value={enteredQty}
            onChange={qtyChangeHandler}
            style = {{width : "60px"}}
          />
        </div>

        <div className='new-expense__control'>
          <label>Unit</label>
          <select value = {enteredUnit} onChange={unitChangeHandler} style = {{width : "80px"}} >            
            {/* <option value="" onClick = {() => {setEnteredType('')}} >---Please Enter---</option> */}
            <option value="Pcs" onClick = {() => {setEnteredUnit('Pcs')}}>Pcs</option>
            <option value="m" onClick = {() => {setEnteredUnit('m')}}>m</option>
            <option value="l" onClick = {() => {setEnteredUnit('l')}}>l</option>
            <option value="Kg" onClick = {() => {setEnteredUnit('Kg')}}>Kg</option>
            {/* <option value="NEW" className = "invent" onClick = {() => {setEnteredType('Volvo')}}> + Add New Category</option> */}

          </select>
        </div>  





        {/* <div className='new-expense__control'>
          <label>Make</label>
          <select value = {enteredMake} onChange={makeChangeHandler}>            
            <option value="" onClick = {() => {setEnteredMake('')}} >---Please Enter---</option>
            <option value="Ford" onClick = {() => {setEnteredMake('Ford')}}  >Ford</option>
            <option value="Volvo" onClick = {() => {setEnteredMake('Volvo')}}>Volvo</option>
            <option value="NEW" className = "invent" > + Add New make</option>

          </select>
        </div>   */}

        <div className='new-expense__control'>
          <label>Make</label>
          <input
            type='text'
            value={enteredMake}
            onChange={makeChangeHandler}
          />
        </div>

        



        <div className='new-expense__control'>
          <label>Vendor Name</label>
          <input
            type='text'
            value={enteredVendorName}
            onChange={vendorNameChangeHandler}
          />
        </div> 

        <div className='new-expense__control'>
          <label>Bill Order No.</label>
          <input
            placeholder = 'xxxxxxxxxx'
            type='number'
            min='1'
            // step='1'
            value={enteredBO}
            onChange={boChangeHandler}
            // style = {{width : "60px"}}
          />
        </div>

        <div className='new-expense__control'>
          <label>Payment Order No.</label>
          <input
            placeholder = 'xxxxxxxxxx'
            type='number'
            min='1'
            // step='1'
            value={enteredPO}
            onChange={poChangeHandler}
            // style = {{width : "60px"}}
          />
        </div>





        {/* <div className='new-expense__control'>
          <label>Bill No</label>
          <input
            type='number'
            value={enteredVendorName}
            onChange={vendorNameChangeHandler}
          />
        </div>        

        <div className='new-expense__control'>
          <label>PO No</label>
          <input
            type='number'
            value={enteredVendorName}
            onChange={vendorNameChangeHandler}
          />
        </div>         */}




      </div>
      <div className='new-expense__actions' >
        <button className='new-expense__action' type='submit'>Enter</button>
      </div>
    </form>

    </div>
  );
};

export default ExpenseForm;
