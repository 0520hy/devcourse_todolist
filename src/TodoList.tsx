import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TodoModal from './TodoModal';

type Todo = { // 타입을 새로 지정
  id : number;
  text : string;
  isChecked : boolean;
}

const TodoList : React.FC = () => {

  const title : string = "오늘 할 일";

  const [todos, setTodos] = useState <Todo[]> ([
    {id : 1, text : '공부하기', isChecked : false},
    {id : 2, text : '과제하기', isChecked : false},
    {id : 3, text : '책 읽기', isChecked : false},
  ]);
 
  const [newTodo, setNewTodo] = useState <string>('');

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId : number) => {
    setTodos((prevItems)=>
      prevItems.map((item)=>
      item.id === itemId ? {...item, isChecked : !item.isChecked} : item
      )
    )
  }

  const addTodo = () => {
    if(newTodo.trim() !== ''){
      setTodos([...todos,  { id : Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo('');
    }
  }

const removeTodo = (id : number) =>{
  setTodos(todos.filter((todo) => todo.id !== id))
}

const handleTodoCLick = (todo : Todo) => {
  setShowDetail(true);
  setSelectedTodo(todo);
}

const handleCloseDetail = () => {
  setShowDetail(false);
}

  return(
    <div>
      <h1>{title}</h1>
    <div className='container'>
        <div>
          <input type="text"
          placeholder='할 일 입력'
          style={{marginRight: '10px', writingMode: 'horizontal-tb'}} 
          onChange={(e)=> setNewTodo(e.target.value)}
          />

          <Button onClick={addTodo}>추가</Button>

        </div>
        <p></p>
      <div className='board'>
      <ul> 
        {
          todos.map((todo,index)=>(
            <li key={todo.id}>
              <input type="checkbox"
              onChange={()=>{
                handleCheckedChange(todo.id)
              }}></input>
              <span onClick={()=>handleTodoCLick(todo)}>
                {
                  todo.isChecked ?  
                  <del>{todo.text}</del>
                  : <span> {todo.text} </span>
                }
               
              </span>
              <button className='delbutton'
              onClick={ () => removeTodo(todo.id) }>
                삭제
                </button>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
    <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
    </div>
  )
}

export default TodoList;