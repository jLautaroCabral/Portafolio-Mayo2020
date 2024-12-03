const api_Url = 'https://covid19-api.com/';
const api_options_allCountries = 'country/all?format=json';
const api_options_help = 'help/countries?format=json';

(async function load (){

    async function getData(url) {
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "6477c9d247msh0275e246aaea792p10c0bbjsn2363b6794ed2"
            }
        });
        const data = await response.json();
        /* if (data.data.movie_count > 0) {
          return data;
        }
        throw new Error('No se encontró ningun resultado'); */
        return data;
    }

    function api_options_countryByCode(code) {
        return `country/code?code=${code}&format=json`;
    }

    async function countryByAlphaCode(alphacode) {
        let [infoPais = 0] = await getData(`${api_Url}${api_options_countryByCode(alphacode)}`);
        return infoPais;
    }


    function countryTableTemplate(country, lastInfo) {
        let lastChange = lastInfo.lastChange ? lastInfo.lastChange.substr(0, 10) : 'No hay';
        let lastUpdate = lastInfo.lastChange ? lastInfo.lastUpdate.substr(0, 10) : 'No hay';
        return (
          `
          <table>
            <tr data-alphaCode="${country.alpha3code}">
                <td>${country.name}</td>
                <td>${lastChange}</td>
                <td>${lastUpdate}</td>
            </tr>
          <table>
          `
        )
    }

    function countrySelectedTemplate(country) {
        return (
          `
            <div class="panelApi__tableInfo" id="tableInfo-countrySelected">
                <div class="tableInfo__container">
                <p>${country.country}</p>
                </div>
                <div class="tableInfo__container">
                    <div class="ico-api ico-api-yellow"></div><p>Confirmados: ${country.confirmed}</p>
                </div>
                <div class="tableInfo__container">
                    <div class="ico-api ico-api-green"></div><p>Recuperados: ${country.recovered}</p>
                </div>
                <div class="tableInfo__container">
                    <div class="ico-api ico-api-red"></div><p>Críticos: ${country.critical}</p>
                </div>
                <div class="tableInfo__container">
                    <div class="ico-api ico-api-grey"></div><p>Muertos: ${country.deaths}</p>
                </div>
            </div>
          `
        )
    }
    
    function createCountryTableTemplate(HTMLString) {
        let html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        let finalString = html.body.children[0].children[0].children[0];
        return finalString;
    }

    function createTemplate(HTMLString) {
        let html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        let finalString = html.body.children[0];
        return finalString;
    }

    function renderCountryList() {
        for (let i = 0; i < paises.length; i++) {
            let HTMLstring = countryTableTemplate(paises[i], paisesLastInfo[i])
            let countryListItemElement = createCountryTableTemplate(HTMLstring);
            $tbody_contryTable.append(countryListItemElement);
            countryListItemElement.addEventListener('click', () => showCountryInfo(countryListItemElement));
        }
    }

    function renderCountrySelected(country) {
        let HTMLString = countrySelectedTemplate(country)
        let infoCountrySelectedElement = createTemplate(HTMLString);
        console.log($item__panel__api.children[1]);
        $item__panel__api.children[1].remove();
        console.log(infoCountrySelectedElement);
        $item__panel__api.append(infoCountrySelectedElement);       
    }

    const $item__panel__api = document.getElementById('item__panel-api');
    const $tbody_contryTable = document.getElementById('tbody-countriesTable');
    let paisesLastInfo = await getData(`${api_Url}${api_options_allCountries}`)
    let paises = await getData(`${api_Url}${api_options_help}`);
    let [infoPais = 0] = await getData(`${api_Url}${api_options_countryByCode('WLF')}`);
    
    console.log(paises);
    console.log(infoPais);

    console.log(paises.length);
    console.log(paisesLastInfo[0]);
    console.log(paisesLastInfo.length);

    renderCountryList();

    async function showCountryInfo(element) {
        let countryInfo = await countryByAlphaCode(element.dataset.alphacode);
        console.log(countryInfo);
        renderCountrySelected(countryInfo)
    }

    /* function renderMovieList(list, $container, category) {
        // actionList.data.movies
        $container.children[0].remove();
        list.forEach((movie) => {
          const HTMLString = videoItemTemplate(movie, category);
          const movieElement = createTemplate(HTMLString);
          $container.append(movieElement);
          const image = movieElement.querySelector('img');
          image.addEventListener('load', (event) => {
            event.srcElement.classList.add('fadeIn');
          })
          addEventClick(movieElement);
        })
    } */


})();

