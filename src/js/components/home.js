import React, {useContext} from 'react';
import { Context } from "../store/appContext";

function Home() {
    const { store, actions } = useContext(Context);
  return (
    <div className='todo container'>
      <h1 className='head-todo display-3 text-center'>To-Do List!!</h1>
    </div>
  );
}

export default Home;