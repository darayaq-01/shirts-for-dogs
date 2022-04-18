const getBreed = async (id) => {

  const url =
    `https://api.TheDogAPI.com/v1/images/search?breed_ids=${id}`;
    
    const response = await fetch(url)
    const data = await response.json()
    return data


}

export default getBreed;
