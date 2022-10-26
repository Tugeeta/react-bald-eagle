import React from 'react';

const todoList = [
  {
  Id:1,
  Title:"Web Developers:\n",
  Name:"\nPoppy, Logan, Ryan\n",
  Salary: 80000,
  Skills:"\nHTML, CSS, JavaScript\n",
  },
  {
   Id:2,
  Title:"Java Developers:\n",
  Name:"\nBranch, Rebacca, Luis\n",
  Salary: 100000,
  Skills: "\nJava, SqL, C++\n",
  },
  {
  Id:3,
  Title:"Junior Software Engineer:\n",
  Name:"\nEstalla, Megan, Kelly\n",
  Salary: 80000,
  Skills: "\nOracle, Python, React JS\n",
  },
  ]
  function App() {
  return (         
  <div className="App" style={{ backgroundColor: "yellow", width: "1300px", minHeight: "300px"}}>
      <h1 style={{ color: 'blue', textAlign: 'center', fontFamily: 'Sans-Serif'}}> Todo List</h1>
      <hr/>   
    <ul style={{ padding: "10px 20px", textAlign: "center", color: "blue"}}>
      {todoList.map(function(item){
        return ( <li key = {item.Id}>
          <span style={{color : 'blue', fontSize:'23px'}}>{item.Title}</span>
          <span style={{color : 'red', fontSize:'23px'}}> {item.Name}</span>
           <span style={{color : 'green', fontSize:'23px'}}>{item.Salary}</span>
           <span style={{color : 'purple', fontSize:'23px'}}>{item.Skills}</span>        
          </li>
        );
      }
      )
      }
    </ul>
    
  </div>
  );
    }  

export default App;
