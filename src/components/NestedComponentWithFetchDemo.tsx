import { useEffect, useState } from 'react';

const NestedComponentWithFetchDemo = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((current) => current + 1);

  const InnerComponent = () => {
    const loadUrl = async (): Promise<string> => {
      const resp = await fetch('https://api.thecatapi.com/v1/images/search');
      const body: { url: string }[] = await resp.json();
      const { url } = body[0];
      return url;
    };

    const [imageSrc, setImageSrc] = useState<string | undefined>();
    useEffect(() => {
      (async () => {
        const url = await loadUrl();
        setImageSrc(url);
      })();
    }, []);

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
        {imageSrc ? (
          <img
            style={{ margin: '0 auto', display: 'block' }}
            height={300}
            width={300}
            src={imageSrc}
            className="cat-pic"
            alt="cat"
          />
        ) : (
          <div
            style={{
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Loading...
          </div>
        )}
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

export default NestedComponentWithFetchDemo;
