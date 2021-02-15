import React,{useState} from 'react'

const Shortcircuit = () => {

    let[name,setName]=useState("")
    return (
        <div>
        {/* <h1>My Name is { "moiz" ||name }</h1> */}
        <h1>my name is {name || <div>
            <h3>We are doing short circuit</h3>
        </div> 
        }
        </h1>
        <h1>My Name is {name && "rafay"}</h1>
        </div>
    )
}

export default Shortcircuit
