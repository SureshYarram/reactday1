import axios from "axios";
import { useState } from "react"


export const AddRestaurant = ()=>{

  const [formData,setFormData] = useState({
   
    imgurl:"",
    name:"",
    deserts:"",
    cost_for_two:"",
    min:"",
    accepts:"",
    ratings:"",
    votes:"",
    reveiew:"",

  });

  const HandleCange = (e)=>{
      const {id,value} = e.target;
      setFormData({...formData,[id]:value})
  }
  const HandleSubmit = (e)=>{
       e.preventDefault();
    axios.post("http://localhost:8080/get-restaurants",formData)

  }
   console.log(formData)
    return(

        <div className="inputform">
           <form onSubmit={HandleSubmit}>
           <input type="text" id="imgurl"  placeholder="enter image url" onChange={HandleCange} /><br />
            <input type="text" id="name" placeholder="enter restaurant name" onChange={HandleCange}/><br />
            <input type="text" id="deserts" placeholder="enter specials" onChange={HandleCange}/><br />
            <input type="text" id="cost_for_two" placeholder="enter cost for two" onChange={HandleCange} /><br />
            <input type="text" id="min" placeholder="enter min price" onChange={HandleCange}/><br />
           <select  id="accepts" onChange={HandleCange}>
           <option value="">------</option>
               <option value="cash">cash</option>
               <option value="card">card</option>
               <option value="all">all</option>
           </select><br />
            <input type="text"  id="ratings" placeholder="ratings" onChange={HandleCange}/><br />
            <input type="text" id="votes"  placeholder="votes" onChange={HandleCange}/><br />
            <input type="text" id="reveiew" placeholder="review" onChange={HandleCange}/><br />
            <input type="submit" />
            
           </form>
        </div>
    )
}