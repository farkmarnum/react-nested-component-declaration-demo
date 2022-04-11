import { isChrome } from './helpers/browserCheck';
import Demo from './components/Demo';
import Warning from './components/Warning';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {isChrome ? <Demo /> : <Warning />}
      </header>
    </div>
  );
}

export default App;
