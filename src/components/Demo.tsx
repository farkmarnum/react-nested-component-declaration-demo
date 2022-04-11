import { useEffect, useState } from 'react';
import cat from '../assets/cat.png';

const getMemory = (): number => {
  const { memory } = window.performance;
  if (memory === undefined) {
    console.error('Unable to fetch window.performance.memory!');
    return 0;
  }

  const { usedJSHeapSize } = memory;
  return usedJSHeapSize;
};

function Demo(): JSX.Element {
  const [memory, setMemory] = useState(getMemory());
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((current) => current + 1);

  useEffect(() => {
    const interval = setInterval(() => setMemory(getMemory()), 500);
    return () => {
      clearInterval(interval);
    };
  });

  const innerComponent = () => {
    // boop
    const a = 1;

    return (
      <div>
        {a}
        <img src={cat} className="cat-pic" alt="cat" />
      </div>
    );
  };

  return (
    <div>
      {innerComponent()}
      <p>
        Clicking this button will update some state and cause a re-render.
        <button type="button" onClick={incrementCounter}>
          Update state
        </button>
        <br />
        State: {counter}
      </p>

      <p>
        This, in turn, will cause the nested declaration of the component that
        renders the above image to be re-created.
        <br />
        The total memory in use by JavaScript: {memory}
      </p>
    </div>
  );
}

export default Demo;
