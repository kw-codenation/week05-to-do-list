import {useState} from 'react'
import ToDoListItem from './ToDoListItem'
import './App.css';

function App() 
{
    /*
        Display a To Do list. This page will also allow to add an
        item and delete one as well. This list also has a button 
        thatwill display the status 'active' or 'done'. clicking
        the button will change the status

    */
    const [list, setList] = useState([])

    const message = 'There are no items in your list you lazy so and so'

    function addItem(desc)
    {
        /*
            Add and item to the to do list
        */

        setList(state => [...state, {desc:desc, status:'active'}])
    }

    function deleteItem(i)
    {
        /*
            Delete an item from the to do list
        */

        setList((item) => item.filter((_, index) => index !== i))
    }

    function updateStatus(i)
    {
        /*
            update the status on a particular item
        */

        /*let arr = [...list]*/
        
        (list[i].status === 'done') ? list[i].status = 'status' : list[i].status = 'done'

        setList(list)
        
    }

    return (
        <div className="to-do-list">
            <div className="to-do-list-title">To Do List</div>
            {
                (list.length === 0) ? message : list.map((item, index) => <ToDoListItem key={index} desc={item.desc} status={item.status} updateStatus={updateStatus} deleteItem={deleteItem} index={index} />)
            }
            <p>To add an item to the list, enter a description and click 'add'</p>
            <input type="text" className="to-do-list-input" id="desc"></input>
            <input type="button" className="to-do-list-add" value="add" onClick={() => addItem(document.getElementById('desc').value)} ></input>
        </div>
    );
}

export default App;
