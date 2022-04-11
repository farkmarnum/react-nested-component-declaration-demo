import cat from './cat.png';

const Demo = (): JSX.Element => {

  return (
    <div>
      <img src={cat} className="cat-pic" alt="cat" />
    </div>
  )
}

export default Demo;
