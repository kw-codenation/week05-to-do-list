function ToDoListItem(props)
{
    return (
        <div>
            <input type="button" className="to-do-list-delete" value="delete" key={props.key} onClick={() => props.deleteItem(props.index)} ></input>
            <span  className="to-do-list-item">{props.desc}</span>
            <input type="button" className="to-do-list-status" value={props.status} onClick={() => props.updateStatus(props.index)} ></input>
        </div>
    );
}

export default ToDoListItem