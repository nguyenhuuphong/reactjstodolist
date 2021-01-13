import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];
    const list = todos.map( todo => {
      return <li > {todo} </li>
        }) ;  

  return (
    <div className="App">
      <header className="App-header">
     
      <ul className='todo'> {list} </ul>
         
          
          
      </header>
    </div>
  );
}

export default App;
