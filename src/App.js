import './App.css';
import One from './components/One';
import Second from './components/Second';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./assets/logo.png')} className="App-logo" alt="logo" />
        <section style={{display:'flex', flexDirection:'row'}}>
        <One></One>
        <Second></Second>
        </section>
      </header>
    </div>
  );
}

export default App;
