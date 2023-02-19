import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import { IUser } from './components/User.type';
import { usersList } from './components/User.type';

function App() {
  const [users,setUsers] = useState( usersList as IUser[])
  return (
    <div className="App">
      <header className="App-header">
        <Home />
     
      </header>
    </div>
  );
}

export default App;
