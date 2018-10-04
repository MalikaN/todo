const TodoItem = (props)=>{
    return(
        <div>
                <div>
                    <input type="checkbox" name="checktem" onClick={()=>props.checked(props.item.id)} />
                    <label className={props.item.isCheckedVal ? 'checked' : 'default'}>{props.item.value}</label>
                </div>
            <style jsx>{`
                .default{
                    text-decoration: none;
                }
                .checked{
                    text-decoration: line-through;
                }
            `}</style>
        </div>
    )
    
}

export default TodoItem