import { useState } from 'react';
import { isChrome } from './helpers/browserCheck';
import NestedComponentWithFetchDemo from './components/NestedComponentWithFetchDemo';
import NestedComponentWithStateDemo from './components/NestedComponentWithStateDemo';
import Warning from './components/Warning';
import './App.css';

const demos = {
  fetch: NestedComponentWithFetchDemo,
  state: NestedComponentWithStateDemo,
};

type Demo = keyof typeof demos;

const demoTypes = Object.keys(demos) as Demo[];

function App() {
  const [demoType, setDemoType] = useState<Demo>('fetch');

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            margin: '20px auto',
            width: '400px',
            maxWidth: 'calc(100vw - 30px)',
            display: 'flex',
          }}
        >
          {demoTypes.map((demoTypeInner) => (
            <button
              key={demoTypeInner}
              type="button"
              onClick={() => setDemoType(demoTypeInner as Demo)}
              className={demoTypeInner === demoType ? 'current' : ''}
              disabled={demoTypeInner === demoType}
              style={{ margin: '8px' }}
            >
              {demos[demoTypeInner].name
                .replace(/([A-Z])/g, ' $1')
                .trim()
                .replace(' Demo', '')}
            </button>
          ))}
        </div>
        {isChrome ? demos[demoType]() : <Warning />}
      </header>
    </div>
  );
}

export default App;
