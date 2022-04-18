const getList = async () => {
  const url =
    'https://api.thedogapi.com/v1/images/search?limit=10&page=10&order=Descc';
    
    return await fetch(url)
    .then((resp) => resp.json())
    .then((data) => {

      return data.map(({ id, url, width, height, breeds }) => {
        const { name = "not available", id: breedId } = breeds[0] || {};
        return {
          id,
          name,
          url,
          width,
          height,
          breedId,
        };
      });
    })
    .catch((error) => console.error(error));
}

export default getList;
