import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PersistentDrawerLeft from './components/Molecules/ResLayout';
import BasicTabs from './components/Molecules/Tabs';

function App() {
  return (
    <div className="App">
       <PersistentDrawerLeft>
      <BasicTabs/>
    </PersistentDrawerLeft>
    </div>
  );
}

export default App;
