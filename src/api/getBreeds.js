const getBreed = async (id) => {

  const url =
    `https://api.TheDogAPI.com/v1/images/search?breed_ids=${id}&api_key=17460dc6-8492-40f2-abd5-62c692647c6c`;
    
    const response = await fetch(url)
    const data = await response.json()
    return data


}

export default getBreed;
