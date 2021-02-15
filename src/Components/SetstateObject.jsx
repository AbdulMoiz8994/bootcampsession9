import React,{useState} from 'react'

export const SetstateObject = () => {
let[name,setname]=useState({
    myName: "Abdul moiz",
    myAge: 20,
    currentStatus: "student"
})
function  updates() {
     setname({...name,myName:"abdul moiz attari",myAge:30})    
}
//...spread operator of obects we got all objects's property, ...name and only we want to update myName 

    return (
        <div>
            <h1>Name: {name.myName} & age:{name.myAge} Degree: {name.currentStatus}</h1>
            <button onClick={updates}>Update</button>
        </div>
    )
}
