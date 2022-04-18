const DogList = ({ fullData, loading, navigateToBreed }) => {

  if(loading) return <div>Loading... </div>
  
  return (
    <>
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

        {fullData && fullData.map((data) => (         
          <div key={data.id} onClick={() => navigateToBreed(data.breedId)} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={data.url}
                alt="dog"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
           <p className="mt-1 text-lg font-medium text-gray-900">Breed: {data.name}
           </p>
          </div>
        ))}  

        </div>
      </div>
    </div>
    </>
  );
};

export default DogList;
