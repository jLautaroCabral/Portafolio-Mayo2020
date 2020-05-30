
fetch('https://randomuser.me/api/dsfdsfsd')
.then(function (response) {
  // console.log(response)
  return response.json()
})
.then(function (user) {
  console.log('user', user.results[0].name.first)
})
.catch(function() {
  console.log('algo falló')
});

async function load() {

    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        if (data.data.movie_count > 0) {
          // aquí se acaba
          return data;
        }
        // si no hay pelis aquí continua
        throw new Error('No se encontró ningun resultado');
    }

}