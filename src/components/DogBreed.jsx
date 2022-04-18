const DogBreed = ({ breedDog }) => {
  return (
    <div className='bg-blue-400 grid'>
      <div className='w-3/4 my-auto ml-20'>
        {breedDog &&
          breedDog.map((data) => (
            <div
            key={data.id}
            className='m-3 max-w-sm rounded overflow-hidden shadow-lg'>
              <img className='w-full' src={data.url} alt={`dog breed ${data.name}`} />
            {data.breeds.map((d) => (
              <div className='group'>
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>
                    Breed: <em>{d.name}</em>
                  </div>
                  <ul className='list-none text-gray-700 text-base'>
                    <li>
                      <b>Temperament</b>: {d.temperament}
                    </li>
                    <li>
                      <b>Bred for</b>: {d.bred_for}
                    </li>
                    <li>
                      <b>Life span</b>: {d.life_span}{' '}
                    </li>
                    <li>
                      <b>Height</b>: {d.height.metric}{' '}cm.
                    </li>
                    <li>
                      <b>Weight</b>: {d.weight.metric}{' '}Kg. 
                    </li>
                  </ul>
                </div>
              </div>
            ))}
              <div className='px-6 pt-4 pb-2'>
                <a href='/'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 max-w-sm overflow-hidden shadow-lg'>
                    Back to home
                  </span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DogBreed;
