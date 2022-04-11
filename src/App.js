import cat from './cat.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="cat-pic" alt="cat" />
      </header>
    </div>
  );
}

export default App;
