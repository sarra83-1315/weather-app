
import './App.css';
import Header from './components/Header/Header'
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="page-content">
        <Weather/>
      </div>     
    </div>
  );
}

export default App;
