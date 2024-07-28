import React,{useState} from 'react'
import axios from  "axios"

const AddOrder = () => {

const [name,setname] = useState("");
const [email,setemail] = useState("");
const [contact,setcontact] = useState("");
const [item,setitem] = useState("");
const [status,setstatus]  = useState("");

function handlesubmit(event){
    event.preventDefault();
    console.log('Form values:',{name,email,contact,item,status});

axios.post("http://localhost:8013/orders/add",{
    name,
    email,
    contact,
    item,
    status
}).then(()=>{
   alert("order add suceesfully")
}).catch((error)=>{
   alert(error)
})

}
  return (
    <div>
      <h1>this is add order page</h1>
      <form onSubmit={handlesubmit}>
        <label>
            Name:
            <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
                setname(e.target.value)
                console.log(name);
            }}
            />
        </label><br/><br/>

        <label>
            Email:
            <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            />
        </label><br/><br/>

        <label>
            Contact:
            <input
            type="text"
            name="contact"
            value={contact}
            onChange={(e)=>{
                setcontact(e.target.value)
            }}
            />
        </label><br/><br/>

        <label>
            Item:
            <input
            type="text"
            name="item"
            value={item}
            onChange={(e)=>{
                setitem(e.target.value)
            }}
            />
        </label><br/><br/>
        <label>
            Status:
            <input
            type="text"
            name="status"
            value={status}
            onChange={(e)=>{
                setstatus(e.target.value)
            }}
            />
        </label><br/><br/>
        
        <button type="submit">Submit</button>
    </form>

    </div>
  )
}

export default AddOrder
