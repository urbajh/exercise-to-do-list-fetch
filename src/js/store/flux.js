const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tasks:[{label:"Sample Task", done:false}]
		},
		actions: {
            deleteTasks: async ()=>{
                let NewTasks= [{label:"Sample Task", done:false}]
                setStore({tasks: NewTasks}) 
                const additionalSetting ={
                    headers:{
                        "Content-Type":"application/json"
                    },
                    method : "PUT",
                    body: JSON.stringify(NewTasks)
                }
                fetch("https://assets.breatheco.de/apis/fake/todos/user/urbah",additionalSetting)
                    .then(response => {
                        //return response.text();
                        return response.json(); 
                    })
                    .then(newResponse => {
                        console.log(newResponse)
                    })
					.catch( (error) => console.log(error))
            },

            deleteTask: async (inputValue) =>{
                const store = getStore();
                const {tasks} = store;
                let NewTasks=tasks.filter( function( e ) { //guardando nuevas tareas en una variable
                    return  e !== inputValue;
                } )
                if(NewTasks.length===0){
                    NewTasks=[{label:"Sample Task", done:false}]
            }
                setStore({tasks:NewTasks})  // guardando la variable de tareas en el store
                const additionalSetting ={
                    headers:{
                        "Content-Type":"application/json"
                    },
                    method : "PUT",
                    body: JSON.stringify(NewTasks)
                }
                fetch("https://assets.breatheco.de/apis/fake/todos/user/urbah",additionalSetting)
                    .then(response => {
                        return response.json(); 
                    })
                    .then(newResponse => {
                        console.log(newResponse)
                    })
					.catch( (error) => console.log(error))
             },

            fechData: async () => {
                const additionalSetting ={
                    headers:{
                        "Content-Type":"application/json"
                    },
                    method : "GET"
                }
                fetch("https://assets.breatheco.de/apis/fake/todos/user/urbah",additionalSetting)
                    .then(response => response.json())
                    .then(newResponse => {
                        setStore({tasks: newResponse})
                    })
                    .catch( (error) => console.log(error))
                },
            putData: async () =>{
                const store = getStore()
                const {tasks} = store
                const additionalSetting ={
                    headers:{
                        "Content-Type":"application/json"
                    },
                    method : "PUT",
                    body: JSON.stringify(tasks)
                }
                fetch("https://assets.breatheco.de/apis/fake/todos/user/urbah",additionalSetting)
                    .then(response => {
                        //return response.text();
                        return response.json(); 
                    })
                    .then(newResponse => {
                        console.log(newResponse)
                    })
					.catch( (error) => console.log(error))
				
			},
			setTaskInput: (element) =>{
				const store = getStore();
				const {tasks} = store;
				setStore({tasks: tasks.concat(element)})
			}
		}
	};
};

export default getState;