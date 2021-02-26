import React, {useState, useEffect, useContext} from 'react';
import ItemLeft from '../components/itemLeft';
import DisplayTasks from '../components/displayTasks'
import ClearBtn from './ClearBtn'
import {Context} from '../store/appContext'

const ImputTask = (props) =>{
    const { store, actions } = useContext(Context);
    const [valueInput, setValueInput] = useState({});
    const [tasks, setTasks ] = useState([]);

    useEffect( ()=>{
        actions.fechData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const validator = async (e) =>{
       if(e.keyCode === 13){
            let newElement =  {label:e.target.value, done:false};
            actions.setTaskInput(newElement);
            e.target.value = '';
        } 
    }
     
    const deleteTasks = () => {
        setTasks([{label:"Sample Task", done:false}])
    }

    return (
        <>
            <ClearBtn fnDeleteTasks={deleteTasks}/>
            <form className='form-todo' onSubmit={ async (e) => {
                console.log(tasks)
                e.preventDefault();
                actions.putData()
            }}>
                <input type='text' className='input-form-todo' placeholder='Give me a task' onKeyDown={(e)=>{validator(e)}}></input>
            </form>
            <DisplayTasks />      
            <ItemLeft tasks={store.tasks}/>
        </>
    )
}
export default ImputTask;
