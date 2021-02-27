import React, { useContext} from 'react';
import {Context} from '../store/appContext'

const ClearBtn = (props) => {
    const { actions } = useContext(Context);
    return (<button className='btn btn-danger btn-delete-all' onClick={()=>{actions.deleteTasks()}}>Delete all</button>)
}
export default ClearBtn;