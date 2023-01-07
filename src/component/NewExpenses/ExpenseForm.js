import React, { useState } from "react";
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [title, setTitle] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    const titleChangeHandler = event => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = event => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = event => {
        setDate(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.onSaveExpenseData(expenseData)
        setTitle("")
        setAmount("")
        setDate("")
        // console.log(expenses)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                        min="1000"
                        step="500"
                        name="amount"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        name="date"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm;