import  Addform from '../../employeemanagementapp/src/components/add.js'
import React, {useState} from 'react';
import Display from "./components/display"
import IMG from './IMG.avif';
import banner from './components/index.jpg'
import "./App.css"
import showData from '../../employeemanagementapp/src/components/showEmployees.js';
import showEmployees from '../../employeemanagementapp/src/components/showEmployees.js';
import {v4 as uuidv4} from 'uuid'
import Popup from './components/popup.js';


function App() {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [employee,setEmployee]=useState([]);

 
  
  const  addItem =((name,surname,position,employeeNumber)=>{
    if(name=="" && surname=="" && position=="" ){
alert("Please enter item");
    }
    else{

   

    setEmployee((employee)=> [...employee , {name:name,surname:surname,position:position,id:uuidv4(),employeeNumber:employeeNumber}])
    


    }
  });

  const deleteProfile=((i)=>{
    let id=employee.filter(employee=> employee.id!==i);

    setEmployee(id)
        })

 const updateProfile=((i)=>{
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
  )

 })
const search =({searchItem})=>{
 
 let i=employee.filter(employee=> employee.name==searchItem)
 return(
  {i}
 )



 }

    
const goback=()=>{
  document.getElementById("show").style.display="block";
  window.location.href='box';
}
    
    const showEmployee =()=>{
      document.getElementById('box').style.display='block';
      document.getElementById('show').style.display='none'
      document.getElementById("showEmployees").style.display="none"
      
    }
   
  return (
    <div className="App">

<div className="Popup" id="popup">
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
      <div>
        <img src={banner} className="banner"></img>
      </div>
      <h1 className='heading'>EMPLOYEE MANAGEMENT APP</h1>
      <div></div>
      <div id="show">

      <Addform   add={addItem}  />
  
     
   
        
        </div>
        <Display   data={employee} delete={deleteProfile} goback={goback} showEmployee={showEmployee} google={search} update={updateProfile} />
    </div>
  );
}

export default App;
