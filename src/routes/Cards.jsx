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
      <div className=''>
        <div className=''>
          <Header />
        </div>
        <div className=''>
          <div className="">
            <div className="">
            <DogBreed className='' breedDog={breedDog} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cards;
