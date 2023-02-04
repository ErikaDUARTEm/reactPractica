import logo from './logo.svg';
import './App.css';
// import Greeting from './componentes/pure/greeting';
// import GreetingF from './componentes/greetingF';
// import TaksListComponent from './components/container/taks_list';
import ContactoListComponent from './components/container/contactos_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name='Erika'></Greeting> */}
        {/* <GreetingF name='Martin'></GreetingF> */}
        {/* <TaksListComponent></TaksListComponent> */}
        <ContactoListComponent></ContactoListComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
