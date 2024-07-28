import React , {useEffect,useState} from 'react'
import axios from 'axios'


const GetOrder = () => {

    const[order, setOrder] = useState([]);

    useEffect(()=>{
   axios.get("http://localhost:8013/get")
   .then((response)=>{
    setOrder(response.data);
    }).catch((err)=>{
    console.log(err)
   })
    },[order])

  return (
    <div>
       <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Item</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {order.map((ord) => (
                <tr>
                    <td>{ord.name}</td>
                    <td>{ord.email}</td>
                    <td>{ord.contact}</td>
                    <td>{ord.item}</td>
                    <td>{ord.status}</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>

                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetOrder
