const DogBreed = ({ breedDog }) => {
  return (
    <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex justify-center bg-slate-50'>
        {breedDog &&
          breedDog.map((data) => (
            <div
              key={data.id}
              className='rounded-lg shadow-lg bg-white max-w-sm'>
              <img
                src={data.url}
                alt={`dog breed ${data.name}`}
                className='rounded-t-lg'
              />

              {data.breeds.map((d) => (
                <div key={d.id} className='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>
                    {' '}
                    Breed: <em>{d.name}</em>
                  </div>

                  <ul className='text-gray-700 text-base my-5'>
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
                      <b>Height</b>: {d.height.metric} cm.
                    </li>
                    <li>
                      <b>Weight</b>: {d.weight.metric} Kg.
                    </li>
                  </ul>

                  <div className='mt-3'>
                    <a href='/'>
                      <button className='font-bold uppercase text-white rounded py-4 px-8 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-700 shadow-cyan-700/50 tracking-wider'>
                        Back to homepage
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DogBreed;
