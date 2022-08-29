import React from 'react'
import '../App.css'
import profpic from "./profpic.webp"
import {useState} from 'react'


function Display(props) {

  const [searchItem,setSearchItem]=useState([]);
  const[ filtered,setFiltered]=useState();

  const deleteProfile=((id)=>{
    props.delete(id)
  })
 const updateProfile=(id)=>{
  props.update(id)
 }
  const back =()=>{
    props.goback();
  }

  const showEmployees=()=>{
    props.showEmployee();
  }

  const search =()=>{

    props.google(searchItem)
  }



  return (
<div>

<div>
    <button onClick={showEmployees} id="showEmployees">Show Employees</button>
    </div>
    <div>
    <input type="text" onChange={(event)=>setSearchItem(event.target.value)} placeholder="search"></input>
    <button onClick={search}>Search</button>
    </div>


    <div className='row'>
  {props.data.map((employee)=>(
  
  
  <div className='box col-lg-1' id="box" >
  
<img src={profpic} className="propic"></img>
       <div > 
       <p className='paragraph'>Name :</p><h1>{employee.name} {employee.surname}</h1> 
       </div>
   
     <div>
       <p>position:</p><h1>{employee.position}</h1>
       </div>


        <div>
  <button className="deletebtn"onClick={()=>deleteProfile(employee.id)}>Delete</button>
</div>
<div>
  <button className="deletebtn"onClick={()=>updateProfile(employee.id)}>Update</button>
</div>
</div>
 )
 )
 }
 </div>
 <div>
 <div>
    <button onClick={back}>Back</button>
    </div>
   
  </div>
 </div>
 
      
  )
 }   
        
         

 

  


  
   

  
      
      
      
    
    

    

   
    
            
  



export default Display
