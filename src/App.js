import './App.css';
import ContainerMain  from './component/container-main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator</h1><img src='icon-app.svg' alt='icon' width={64} height={64}/>
      </header>
      <ContainerMain/>
    </div>
  );
}

export default App;
