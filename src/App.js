import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './styles/index.css';

import DogList from './components/DogList';
import getList from './api/getList';
import Header from './components/Header';
const Breed = lazy(() => import('./routes/Cards'));

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [fullData, setFullData] = useState([]);
  const navigate = useNavigate();
  const [pagina, setPagina] = useState(1);

  useEffect(() => updateData(), [pagina]);

  const updateData = (pagina) => {
    setLoading(true);
    getList(pagina).then((data) => {
      setFullData(data);
    });
    setLoading(false);
  };

  const navigateToBreed = (breedId) => {
    navigate(`/breed/${breedId}`);
  };

  if (loading) {
    return `<p>Loading.../p>`;
  }

  return (
    <div className='bg-gray-200 text-gray-700'>
      <Header />

      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-50'>
        <section className='flex-col items-center'>
          <DogList
            fullData={fullData}
            loading={loading}
            navigateToBreed={navigateToBreed}
            className=''
          />

          <div className='mt-5 flex items-center justify-center w-full'>
            <button
              className='font-bold uppercase text-white rounded-l-lg py-4 px-8 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-700 shadow-cyan-700/50 tracking-wider'
              onClick={() => setPagina(pagina - 1)}>
              Prev
            </button>
            <span className=''>{''}</span>
            <button
              className='font-bold uppercase text-white rounded-r-lg py-4 px-8 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-700 shadow-cyan-700/50 tracking-wider'
              onClick={() => setPagina(pagina + 1)}>
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/breed/:id' element={<Breed />} />
            <Route path='/breed/undefined' element={<Home />} />
            <Route path='*' element={<div>Not found</div>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
