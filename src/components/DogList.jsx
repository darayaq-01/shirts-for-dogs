const DogList = ({ fullData, loading, navigateToBreed }) => {

  if(loading) return <div>Loading... </div>
  
  return (
    <div className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center py-5">
        {fullData && fullData.map((data) => (         
          <div key={data.id} onClick={() => navigateToBreed(data.breedId)} className="grid justify-items-center m-2">
          
            <div className="p-1 m-2 transition duration-300 transform bg-gray-800 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl flex flex-col items-center">
              <img
                src={data.url}
                alt="dog"
                className="rounded-tl-lg rounded-tr-lg h-52"
              />
             <div className="max-auto my-3 text-white">
              <h2 className="text-lg">Breed: <span className="text-teal-800 font-mono bg-teal-100 p-1 m-2 inline rounded animate-pulse bg-gray-800">{data.name}</span></h2>
             </div>
            </div>

          </div>
        ))}
    </div>
  );
};

export default DogList;
