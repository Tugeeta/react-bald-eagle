import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'


function App () {
         return (
  <div className="App" 
  style={{ backgroundColor: "yellow",
   width: "1300px",
    minHeight: "300px"}}>

      <h1 
      style={{ color: 'blue',
       textAlign: 'center', 
       fontFamily: 'Sans-Serif'}}> 
       Todo List
       </h1>
      <hr/>   

<TodoList/>
<AddTodoForm/>
  </div>
  
         );
  }


  export default App;

