import React from 'react';

const Header = () => {
  const styleHeader = {
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  };

  return (
    <section className='py-20' style={styleHeader}>
      <div className='container mx-auto px-6'>
        <h2 className='text-6xl font-bold mb-2 text-white'>
          Dogs also need t-shirts!
        </h2>
        <h3 className='text-2xl mb-8 text-gray-200'>Some random nice pics!</h3>

        <button className='bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider'>
          Pre Order
        </button>
      </div>
    </section>
  );
};

export default Header;
