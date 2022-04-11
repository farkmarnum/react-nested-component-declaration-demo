import { useState } from 'react';

const NestedComponentWithStateDemo = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((current) => current + 1);

  const InnerComponent = () => {
    const [innerCounter, setInnerCounter] = useState(0);
    const incrementInnerCounter = () =>
      setInnerCounter((current) => current + 1);

    return (
      <div
        style={{
          width: '600px',
          maxWidth: 'calc(100vw - 30px)',
          margin: '0 auto',
          textAlign: 'left',
          border: '1px solid white',
          padding: '20px',
        }}
      >
        <h3 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>
          Inner Component
        </h3>
        <p>
          Clicking this button will update the inner state and cause a
          re-render.
          <br />
          <button
            type="button"
            onClick={incrementInnerCounter}
            style={{ margin: '10px 0', display: 'block' }}
          >
            Update state
          </button>
          State: {innerCounter}
        </p>
      </div>
    );
  };

  return (
    <div
      style={{
        width: '600px',
        maxWidth: 'calc(100vw - 30px)',
        margin: '0 auto',
        textAlign: 'left',
      }}
    >
      <InnerComponent />
      <p>
        Clicking this button will update some state and cause a re-render.
        <br />
        <button
          type="button"
          onClick={incrementCounter}
          style={{ margin: '10px 0', display: 'block' }}
        >
          Update state
        </button>{' '}
        State: {counter}
      </p>
      <p>
        This, in turn, will cause the nested declaration of the component that
        renders the above image to be re-created.
      </p>
    </div>
  );
};

export default NestedComponentWithStateDemo;
