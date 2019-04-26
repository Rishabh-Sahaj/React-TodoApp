import React from 'react';


//Functional Component
const Todos = (props) => {
   

  //destructuring from props
  const {todos,deleteTodo} = props; 

  //storing jsx for todos in an array (todos_list) without editing the array (todos) used. 
  const todos_list = todos.map( (todo) => {
      return (
          <div className="item px-5" key={todo.id}>
              <h5 className="px-5 py-3 mb-0 font-weight-normal border" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</h5> 
          </div>
      );
  });

  //rendering the jsx array
  if (todos_list.length > 0) { 
    return (
        <div>
            {todos_list}  
        </div>
    ); 
  } 
  else {
      
     return (
       <div className="item px-5">
         <h5 className="px-5 py-3 mb-0 font-weight-normal border">Yay! I Have nothing to do.</h5>
       </div>
     );
  }

}

export default Todos;