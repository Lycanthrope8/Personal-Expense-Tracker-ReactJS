import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter= (props)=>{
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value)
    }
    return(
        <div className="">
            <div className="">
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;