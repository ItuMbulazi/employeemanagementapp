import { render } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import propic from "./profpic.jpg"

function Addform(props){


    const [name, setName]  = useState('')

    const [surname, setSurname]  = useState('')

    const [position, setPosition]  = useState('')

    
    const [employeeNumber, setEmployeeNumber]  = useState('')

    const [id,setId]=useState('')


    const addItems =((employee)=>{

        props.add(name, surname, position,id);
    })

 
  
     
    
   

 
return(

        <div className='addcontent'>
            <div>
          <img src={propic}></img>
            </div>

            <div>
                <input type="text" placeholder="enter name" className='m-1' onChange={(event)=>setName(event.target.value)}></input>
            </div>

            <div>
                <input type ="text" placeholder="enter surname" className='m-1'  onChange={(event)=>setSurname(event.target.value)}></input>
            </div>

            <div>  
                <input type ="text" placeholder="enter position" className='m-1'  onChange={(event)=>setPosition(event.target.value)}></input>
            </div>

            <div>  
                <input type ="text" placeholder="enter employee number" className='m-1'  onChange={(event)=>setEmployeeNumber(event.target.value)}></input>
            </div>
          
            <button onClick={addItems}>Add Employee</button>
          
            
            <div>
   
            </div>
         

            
            </div>

       
  
);
}

export default Addform;