const DogBreed = ({ breedDog }) => {
  return (
    <div className="mx-auto px-4 py-8 max-w-xl my-20">
    {breedDog &&
      breedDog.map((data) => (
    <div key={data.id} className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
        <div className="md:flex-shrink-0">
          <img src={data.url} alt={`dog breed ${data.name}`} className="w-full h-64 rounded-lg rounded-b-none" />
        </div>
        {data.breeds.map((d) => (
        <div key={d.id} className="px-4 py-2 mt-2">
            <h2 className="font-bold text-2xl text-gray-800 tracking-normal"> Breed: <em>{d.name}</em></h2>
            <ul className='list-none text-gray-700 text-base mt-3'>
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
                <div className="flex items-center justify-between mt-3 mx-6">
                    <a href="/" className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 max-w-sm overflow-hidden shadow-lg'>Back to homepage</a>
                </div>
        </div>
        ))}
    </div>
    ))}
  </div>
  );
};

export default DogBreed;
