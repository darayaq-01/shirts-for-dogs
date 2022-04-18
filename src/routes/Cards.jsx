import React, { useState, useEffect } from 'react';
import getBreed from '../api/getBreeds';
import DogBreed from '../components/DogBreed';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Cards = () => {
  const { id } = useParams();
  const [breedDog, setBreedDog] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    getBreed(id).then((data) => {
      setBreedDog(data);
    });
  }, [id]);

  if (breedDog.length === 0) {
    return <div>Loading...</div>;
  }

  return (
      <div className='bg-gradient-to-r from-green-400 to-blue-500  grid'>
        <div className='my3-3'>
          <Header />
        </div>
        <div className='w-3/4 my-auto ml-20'>
          <div className='max-w-sm p-5'>
            <DogBreed className='m-4' breedDog={breedDog} />
          </div>
        </div>
      </div>
  );
};

export default Cards;
