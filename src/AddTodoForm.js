import React from 'react';

function AddTodoForm () {
  return (
      <div style={{alignItems:'center'}}>
           <h1 style={{ color: 'blue', fontFamily: 'Sans-Serif'}}> Form</h1>
            <form>
                <label htmlFor='todoTitle' style ={{fontSize:30, color:'blue' }} >                 
                  Title
                  </label>
                <input type = "text" id="todoTitle"  style = {{backgroundColor:'papayawhip', color: 'blue',}}/>
                   
              <button type="submit" style={{ color: 'blue',  borderRadius: 20, paddingVertical: 30,
     width: 120, maxHeight: 90,  backgroundColor: 'pink'}}>Add</button>
            </form>
            </div>
          );


}




export default AddTodoForm;