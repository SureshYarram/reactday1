
import axios from "axios"
import { useEffect, useState } from "react"
import {P} from "./ptag"


export const RestaurantDetails = ()=>{

    const [page,setPage]= useState(1)
    const [limit,setLimit] = useState(3)
    const [star,setStar] = useState(1);
    const [order,setOrder] = useState("");
    const [pay,setPay] = useState("card")
      const [data,setData] = useState([]);
  
    
       useEffect(()=>{
           GetData();
       },[page,star,order,pay])
     const GetData = ()=>{
   
    axios.get(`http://localhost:8080/get-restaurants?accepts=${pay}&_limit=${limit}&_page=${page}&ratings_gte=${star}&_sort=cost_for_two&_order=${order}`).then((res)=>{
           setData(res.data);
        })
     }
  const changepage = (value)=>{
      setPage(value)
  }
   const changeStar = (value)=>{
       setStar(value)
   }
   const Sorting = (value)=>{
       setOrder(value)
   }
   
  const  payemntMethod = (value)=>{
      setPay(value)
  }
  console.log(data)
   
    return(
<div>
  <h3>welcome</h3>
  <div>
  <button onClick={()=>changepage(1)}>1</button>
  <button onClick={()=>changepage(2)}>2</button>
  <button onClick={()=>changepage(3)}>3</button>
  <button onClick={()=>changepage(4)}>4</button>

  </div>
  <div>
  <button onClick={()=>changeStar(4)}>4 star and above</button>
  <button onClick={()=>changeStar(3)} >3 star and above</button>
  <button onClick={()=>changeStar(2)}>2 star and above</button>
  <button onClick={()=>changeStar(1)}>1 star and above</button>
</div>

<div>
<button onClick={()=>payemntMethod("cash")}>cash</button>
  <button onClick={()=>payemntMethod("card")}>card</button>
  <button onClick={()=>payemntMethod("all")}>all</button>
</div>
<div>
<button onClick={()=>Sorting("asc")}>asc</button>
<button  onClick={()=>Sorting("desc")} >desc</button>
</div>

{data.map((el)=>(
  
  <div key={el.id} style={{display:"flex" ,border:"1px solid black", justifyContent:"space-around" ,marginBottom:"30px",height:"200px"}}>
     <div>
     <img style={{width:"200px" ,height:"200px", marginLeft:"100px"}} src={el.imgurl} alt="" />
     </div>
      <div>
         <h3>{el.name}</h3>
         {/* <P>{el.deserts}</P> */}
         <P>{"cost_for_two"+el.cost_for_two}</P>
         <P>{"Min: R"+el.min}</P>
         <P>{"Accepts: "+el.accepts}</P>
      </div>
      <div style={{marginLeft:"500px",marginTop:"40px"}}>
          <P>{"Rating: "+el.ratings}</P>
          <P>{"votes: "+el.votes}</P>
          <P>{"Reviews: "+el.reveiew}</P>
      </div>
  </div>

))}
  </div>
    )


}