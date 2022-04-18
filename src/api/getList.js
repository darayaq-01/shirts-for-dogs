const getList = async (pagina) => {
/* 'https://api.thedogapi.com/v1/images/search?limit=10&page=10&order=Descc'; */

  const url =
    `https://api.thedogapi.com/v1/images/search?limit=10&page=${pagina}&api_key=17460dc6-8492-40f2-abd5-62c692647c6c`
    
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