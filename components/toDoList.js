import React,{Component} from 'react'
import TodoItem from './toDoItem'

class TodoList extends Component{
    state={
        val: '',
        items: [],
        count: 0
    }

    onTextChange=(e)=>{
        this.setState({
            val: e.target.value
        })
       
    }
    handleKeyPress=(event)=>{
        if(event.key==='Enter'){
            this.setState({
                items: [...this.state.items, 
                    {value: this.state.val,
                    isCheckedVal: false,
                    id: this.state.count++
                    }
                ],
                val:''
            })
        }
        
       
    }
    isChecked=(itemId)=>{
        const newItems = this.state.items.map((item,i)=>{
            if(item.id === itemId){
                // if( !item.isCheckedVal)           
                //   return  {...item,isCheckedVal:true}             
                // else             
                //   return  {...item,isCheckedVal:false}
                
                return  {...item,isCheckedVal:!item.isCheckedVal}  
                
            }
               return item
        })

        this.setState({
            items: newItems
        },()=>{
            console.log('items',this.state.items)
            console.log('newitems',newItems)
        })
        
    }

    render(){
        const { val, items, checkStatus } = this.state;
        return(
            <div>
                <input type="text" name="todo" value={this.state.val} onChange={this.onTextChange}
                onKeyPress={this.handleKeyPress}/>
                <ul>
                {items.map((item,i)=>{
                     return(
                    <li> <TodoItem key={i} item={item} checked={this.isChecked} /></li>
                     )
                })}
                </ul>

               
            </div>
        )
    }
}

export default TodoList