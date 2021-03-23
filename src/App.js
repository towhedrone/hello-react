
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
import Parent from './components/Parent'
import Condition from './components/Condition'
import List from './components/List'
import './components/myStyle.css'
import style from './components/style.module.css'
import MyStyle from './components/MyStyle'
import Form from './components/Form'

function App() {
  // let success = true

  let success = {
    color:'green',
    fontSize:'40px'
  }

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
      {/* <BindEvent /> */}
      {/* <Parent /> */}
      {/* <Condition /> */}

      {/* <List /> */}
      {/* <h2 className={success ? 'success': ''} >Hello User</h2> */}
      {/* <h2 style ={success} >Hello User</h2> */}
      {/* <h2 className={style.primary} >Hello User</h2>
      <MyStyle /> */}
      <Form />

    </div>
  );
}

export default App;
