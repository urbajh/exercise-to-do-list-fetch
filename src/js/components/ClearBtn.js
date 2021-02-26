import React, { useContext} from 'react';
import {Context} from '../store/appContext'

const ClearBtn = (props) => {
    const { store, actions } = useContext(Context);
    return (<button className='btn btn-danger' onClick={()=>{actions.deleteTasks()}}>Delete all</button>)
}
export default ClearBtn;