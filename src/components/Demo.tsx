import { useEffect, useState } from 'react';
import cat from '../assets/cat.png';

const getMemory = (): number => {
  const memory = window.performance.memory;
  if (memory === undefined) {
    console.error('Unable to fetch window.performance.memory!')
    return 0;
  }

  const { usedJSHeapSize } = memory;
  return usedJSHeapSize;
}

const Demo = (): JSX.Element => {
  const [memory, setMemory] = useState(getMemory())

  useEffect(() => {
    const interval = setInterval(() => setMemory(getMemory()), 500);
    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div>
      This image is 3.8MB.
      <img src={cat} className="cat-pic" alt="cat" />

      Clicking this button will update some state and cause a re-render.
      <br />
      This, in turn, will cause the nested declaration of the component that renders the above image to be re-created.
      <br />
      <br />
      The total memory in use by JavaScript: {memory}
    </div>
  )
}

export default Demo;
