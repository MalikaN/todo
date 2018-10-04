import React,{Component} from 'react'
import TodoList from '../components/toDoList'


class Todo extends Component{
    render(){
        return(
            <div>
                <h2>TODO</h2>
                <TodoList/>
            </div>
        )
    }
}
export default Todo