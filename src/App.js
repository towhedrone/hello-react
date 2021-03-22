import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Hello name ="John" age ="20"/>
      <Hello name ="Rone" age ="30" />
      <Hello name ="Roky" age="40" />
      {/* <Welcome />
      <Navbar /> */}
    </div>
  );
}

export default App;
