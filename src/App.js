import './App.css';
import Navbar from './Component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Cards from './Component/Cards';
import AddCard from './Component/AddCard';

function App() {
  return (
    <div className="App">
      <div id='alert' className='bg-secondary'></div>
      <Navbar/>
      <div className='creditCards container p-5'>
        <AddCard/>
        <h2>My Card's</h2>
        <hr/>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
