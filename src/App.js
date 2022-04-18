import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import DogList from './components/DogList';
import getList from './api/getList';
const Breed = lazy(() => import("./routes/Cards"))

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [fullData, setFullData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => updateData(), []);

  const updateData = () => {
    setLoading(true)
    getList().then((data) => {
      setFullData(data);
    });
    setLoading(false)
  };

  const navigateToBreed = (breedId) => {
    navigate(`/breed/${breedId}`)
  }

    if(loading) {return `<p>Loading.../p>`}

  return (
    <div className='bg-gradient-to-r from-green-400 to-blue-500  grid'>
        <div className='w-3/4 my-auto ml-20'>
          <h1 className='text-5xl font-bold my-10 text-white'>
            Dogs also need t-shirts!
          </h1>
          <p className='text-white mb-10'>Some random nice pics!</p>
       
          <DogList fullData={fullData} loading={loading} navigateToBreed=
          {navigateToBreed}  />

          <div className='inline-flex m-3 '>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>
              Prev
            </button>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>
              Next
            </button>
          </div>
        </div>
      </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/breed/:id' element={<Breed />} />
            <Route path="/breed/undefined" element={<Home />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
