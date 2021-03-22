import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'
import Counter from './components/Counter'
import CarOne from './components/CarOne'
import CarTwo from './components/CarTwo';
import ClickOne from './components/ClickOne'
import ClickTwo from './components/ClickTwo'
import BindEvent from './components/BindEvent'

function App() {
  return (
    <div className="App">
      {/* <Hello name ="John" age ="20"> This is Childeren props</Hello>
      <Hello name ="Rone" age ="30" />
      <Hello name ="Roky" age="40" /> */}
      {/* <Welcome />
      <Navbar /> */}
      {/* <Welcome name="Towhed"  age= "45" /> */}
      {/* <Subscribe /> */}

      {/* <Counter /> */}
      {/* <CarOne brand ="Ford"  color="black"/> */}
      {/* <CarTwo  brand ="Ford"  color="black" /> */}
      {/* <ClickOne />
      <ClickTwo /> */}
      <BindEvent />

    </div>
  );
}

export default App;
