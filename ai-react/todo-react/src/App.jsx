import {useEffect, useState} from 'react';

function App(){
  const [tasks, setTasks] = useState(()=>{
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState('');
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));}, [tasks]
  );

  const addTask = () =>{
    if(inputValue.trim() !== ''){
      setTasks([...tasks, {text:inputValue, done:false}]);
      setInputValue('');
    }
  }

  const toggleDone = (index) =>{
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) =>{
    const newTasks = tasks.filter((_,i)=> i !== index);
    setTasks(newTasks);
  }
  const clearCompleted = () =>{
    const newTasks = tasks.filter(task => !task.done);
    setTasks(newTasks);
  }
  return(
    <div style={{
      maxWidth:'500px',
      margin:'50px auto',
      padding:'40px',
      background:'#161b22',
      borderRadius:'12px',
      boxShadow:'0 8px 20px rgba(0,0,0,0.6)'
      }}>

      <h1 style={{textAlign:'center', marginBottom:'30px'}}>My Todo List</h1>

      <div style={{display:'flex', marginBottom:'30px'}}>

        <input 
        type="text"
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder='Add a new task...'
        style={{
          flex:1,
          padding:'12px',
          fontSize:'16px',
          border:'none',
          borderRadius:'6px 0 0 6px',
          outline:'none',
          background:'#0d1117',
          color:'#c9d1d9'
        }}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />

        <button
          onClick={addTask}

          style={{
            padding:'12px 24px', background:'#238636',
            color:'white',
            border:'none',
            borderRadius:'0 6px 6px 0',
            cursor:'pointer',
            fontSize:'16px'
          }}
        >
          Add
        </button>
      </div>

      <div style={{marginTop:'20px'}}>
        {tasks.length === 0 ? (
          <p style={{textAlign:'center', opacity:0.7}}>No tasks yet. Add one!</p>
          ) : (
          <>
            <ul style={{listStyle:'none', padding:0}}>
              {tasks.map((task,index)=>(
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding:'15px',
                    marginBottom:'10px',
                    background:'#0d1117',
                    borderRadius:'8px',
                    textDecoration: task.done ? 'line-through' : 'none',
                    opacity: task.done ? 0.6 : 1,
                  }}
                  >
                    <input 
                      type="checkbox"
                      checked={task.done}
                      onChange={()=>toggleDone(index)}
                      style={{marginRight:'15px'}}
                    />
                    <span style={{flex:1}}>{task.text}</span>
                    <button
                      onClick={()=>{
                        deleteTask(index)
                      }}
                      style = {{
                        background:'#e53e3e',
                        color:'white',
                        border:'none',
                        padding:'6px 12px',
                        borderRadius:'6px',
                        cursor:'pointer'
                      }}
                    >
                      Delete
                    </button>
                </li>
              ))}
            </ul>
            {tasks.some(task => task.done) && (
              <button
                onClick={clearCompleted}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  background: '#e53e3e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Clear Completed
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App;

          