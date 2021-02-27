import Imput from './js/components/imput'
import injectContext from "./js/store/appContext"
import "./css/app.css"

function App() {
  return (
    <div className='todo container'>
    <h1 className='head-todo display-3 text-center'>To-Do List!!</h1>
    <Imput/>
  </div>
  );
}

export default injectContext(App);
