import React, { useState, useEffect } from 'react';
import getBreed from '../api/getBreeds'
import DogBreed from '../components/DogBreed'
import { useParams } from 'react-router-dom';

const Cards = () => {
  const {id} = useParams();
  const [ breedDog, setBreedDog ] = useState([])  

  useEffect(() => {

    if (!id) {
      return
    }

    getBreed(id).then((data) => {
      setBreedDog(data);
    });
  }, [id])

  if (breedDog.length === 0) {
    return <div>Loading...</div>
  }

  return (
   <DogBreed breedDog={breedDog}/>
  );
};

export default Cards;
