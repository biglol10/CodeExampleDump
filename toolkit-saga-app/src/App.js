import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './catState';
import './App.css';

function App() {
  // this will grab our cats array from state
  const cats = useSelector((state) => state.cats.cats); // calling cats reducer in index.js and calling cats property in catState
  const dispatch = useDispatch(); // allow to call our actions

  useEffect(() => {
    dispatch(getCatsFetch()); // call our api
  }, [dispatch]);
  console.log(cats);

  return (
    <div className='App'>
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure
      </p>
      <hr />
      <div className='Gallery'>
        {cats.map((cat) => (
          <div key={cat.id} className='row'>
            <div className='column column-left'>
              <img
                alt={cat.name}
                src={cat.image.url}
                width='200'
                height='200'
              />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
