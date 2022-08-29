 import React from 'react'
  
  function showEmployees(props) {
  
  
    {props.data.map((employee)=>(
        <div>
          <div> 
            <p>Name :</p><h1>{employee.name} {employee.surname}</h1> 
            </div>
        
          <div>
            <p>position:</p><h1>{employee.position}</h1>
            </div> 
          </div>
      ) ) } 
  }
  
  export default showEmployees
  

