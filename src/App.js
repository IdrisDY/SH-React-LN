import Counter from './components/Counter'
import logo from './logo.svg';
import './App.css';
import Statehook from './components/Statehooks';
import Timer from './components/TimerUE';
import Fetch from './components/Fetching';
import Reducer from './components/useReducer';
import Users from './components/users';
import GitP from './components/GithubUsers';
import Width from './components/Width';
import Noob from './components/noob';
import Props from './components/Props';

function App() {
 
  return (
    //<div className="App">
     //<Counter/>
     // <Statehook/>
     // <Timer/>
      //<Fetch/>
    //  <Reducer/>
      <div>
      <Users/>
 <Width/>
 <Noob/>
 <Props name = "Adekunle" no = "07045122417"> 
 <p> rendering with the children </p> 
 </Props> 
 <Props name = "Adewale" no = "0803214567"/>
 <Props name = "Adekunle" no = "0903689002">
 <p>swimming in the balcony4107</p></Props>
    </div>
  );
}

export default App;
