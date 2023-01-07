import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {
    const [title, setTitel] = useState(props.title)

    // const clickHandle = () => {
    //     setTitel("Updated!")
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rp. {props.amount}</div>
                {/* <button onClick={clickHandle}>Change!!</button> */}
            </div>
        </Card>
    )
}

export default ExpenseItem;