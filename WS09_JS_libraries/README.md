# Web Development 1 · Workshop 9 · JavaScript libraries / JavaScript-kirjastot

[English](#english) · [Suomeksi](#suomeksi)

## English

**Turn the starter page into a five-day weather chart and add one feature of your own.** A visitor should be able to search for a city, see its forecast temperatures in °C and switch between a line chart and a bar chart. Axios retrieves the data and Chart.js draws the chart.

### 1. Open the starter

1. Open the workshop folder in VS Code and run `index_ENG.html` in your browser, for example with Live Server. Choose one language version.
2. Use the `script.js` in that folder, or create it if it is missing. The city field, search button, chart selector and canvas are already in the HTML. Keep one Chart.js import and load `script.js` after the libraries.
3. Reuse your Workshop 8 API key or get one from your [OpenWeather account](https://home.openweathermap.org/api_keys). For local testing, add `<label for="apiKey">API key</label>` and `<input type="password" id="apiKey">` above the search button. Enter the key in your browser and keep it out of the files you commit.
4. Search for **Helsinki** and switch from **Line** to **Bar**. If the chart works, locate the Axios request and `new Chart(...)` in your code. Use the next section to check your work, then choose your addition.

### 2. Connect the search and the chart

1. In `script.js`, write an `async` function named `haeSaa`. Connect the button with `document.querySelector("#haeSaaPainike").addEventListener("click", haeSaa)`. Read `city` from `#kaupunki` and `apiKey` from `#apiKey` using `.value.trim()`. If either field is empty, tell the user what to enter and stop.
2. Use the [Axios example](#axios) to look up the city’s coordinates and get its forecast. Inside `haeSaa()`, assign the result with `forecast = await getForecast(city, apiKey)`. If the array is empty, show “City not found”. Use `try/catch` to show a message if a request fails.
3. After a successful search, show the city name above the chart and call `paivitaKaavio()`. In the [Chart.js example](#chartjs), each point is one three-hour forecast. Its label is the time in UTC (`dt_txt`) and its value is the temperature in °C (`main.temp`).
4. The selector `#chartType` already calls `paivitaKaavio()` when it changes. Redraw from the saved data. Keep **Line** and **Bar** for temperature. You can remove **Pie** or use it for the weather conditions feature below.

### 3. Choose one addition for your page

| Feature | What to build |
| --- | --- |
| Temperature summary | Add `<p id="forecastSummary"></p>` above the canvas. After each search, show the lowest and highest temperatures in the forecast, for example **Helsinki · −3 to +4 °C**. Use `Math.min(...temperatures)` and `Math.max(...temperatures)`. |
| Remember the last city | Save the city name with `localStorage.setItem()` after a successful search. When the page reloads, use `localStorage.getItem()` to prefill the city field. |
| Weather conditions pie chart | Group the forecast entries by `weather[0].main`. When the user chooses **Pie**, show how many three-hour periods are rainy, cloudy or clear. |
| Weather details with SweetAlert2 | Add a **Show forecast details** button. Follow the SweetAlert2 link in the starter and add its CDN script before `script.js`. On click, show the next forecast time and temperature with `Swal.fire()`. |

**Optional jQuery bonus.** The starter has a hidden message in `#saaYllatys`. After checking the inputs, show it with `$("#saaYllatys").show()` just before the request. Use `.hide()` in a `finally` block so it disappears even if the request fails.

### 4. Test and submit

- [ ] Search for **Helsinki**, then **Tampere**. The city name and chart update after each search.
- [ ] Switch from **Line** to **Bar**. The same times and temperatures appear in both charts.
- [ ] Try an empty field and an unknown city such as **Xyzabc123**. A message explains the problem, and the next valid search works.
- [ ] Try your own feature. For example, if you saved Tampere as the last city, refresh the page and check that the field still shows Tampere.

Push your changes to your own GitHub repository. Submit the link to your Workshop 9 folder in Canvas and briefly describe what you added and how you tested it.

## Suomeksi

**Tee aloituspohjasta viiden päivän sääkaavio ja lisää sivulle yksi oma ominaisuus.** Käyttäjä voi hakea kaupungin, nähdä lämpötilaennusteen celsiusasteina ja vaihtaa viiva- ja pylväskaavion välillä. Axios hakee tiedot ja Chart.js piirtää kaavion.

### 1. Avaa aloituspohja

1. Avaa työpajan kansio VS Codessa ja käynnistä `index.html` selaimessa esimerkiksi Live Serverillä. Riittää, että teet tehtävän yhdellä kielellä.
2. Käytä samassa kansiossa olevaa `script.js`-tiedostoa tai luo se tarvittaessa. Kaupunkikenttä, kaaviovalitsin ja piirtoalue ovat valmiina. Pohjassa on kaksi **Hae sää** -painiketta. Säilytä painike, jonka tunniste on `haeSaaPainike`. Poista toinen painike, jossa on `onclick="haeSaa()"`. Jätä Chart.js:n kahdesta latausrivistä vain toinen ja lataa `script.js` kirjastojen jälkeen.
3. Käytä työpajan 8 API-avainta tai hae avain [OpenWeather-tililtäsi](https://home.openweathermap.org/api_keys). Lisää paikallista testausta varten hakupainikkeen yläpuolelle `<label for="apiKey">API-avain</label>` ja `<input type="password" id="apiKey">`. Syötä avain selaimessa ja jätä se pois GitHubiin vietävistä tiedostoista.
4. Hae **Helsinki** ja vaihda viivakaavio pylväskaavioksi. Jos kaavio toimii, etsi koodista Axios-pyyntö ja `new Chart(...)`. Tarkista toteutuksesi seuraavan kohdan avulla ja siirry sitten omaan lisäykseesi.

### 2. Yhdistä haku ja kaavio

1. Tee `script.js`-tiedostoon `async`-funktio `haeSaa`. Kytke painike siihen rivillä `document.querySelector("#haeSaaPainike").addEventListener("click", haeSaa)`. Lue `city` kentästä `#kaupunki` ja `apiKey` kentästä `#apiKey` käyttäen `.value.trim()`. Jos jompikumpi on tyhjä, kerro käyttäjälle, mitä puuttuu, ja keskeytä haku.
2. Katso [Axios-esimerkistä](#axios), miten haet ensin kaupungin koordinaatit ja sitten ennusteen. Tallenna tulos `haeSaa()`-funktiossa rivillä `forecast = await getForecast(city, apiKey)`. Jos taulukko on tyhjä, näytä ”Kaupunkia ei löytynyt”. Käytä `try/catch`-rakennetta ja näytä ilmoitus sivulla, jos pyyntö epäonnistuu.
3. Näytä onnistuneen haun jälkeen kaupungin nimi kaavion yläpuolella ja kutsu funktiota `paivitaKaavio()`. [Chart.js-esimerkissä](#chartjs) jokainen piste vastaa yhtä kolmen tunnin ennustetta. Aikamerkintä saadaan kentästä `dt_txt` (UTC) ja lämpötila celsiusasteina kentästä `main.temp`.
4. Kaaviovalitsin `#chartType` kutsuu jo funktiota `paivitaKaavio()`. Piirrä uusi kaavio muistissa olevista tiedoista. Säilytä **Viiva** ja **Pylväs** lämpötiloille. Voit poistaa **Piirakka**-vaihtoehdon tai käyttää sitä alla olevaan säätilatehtävään.

### 3. Valitse sivullesi yksi lisäys

| Ominaisuus | Mitä teet |
| --- | --- |
| Lämpötilayhteenveto | Lisää kaavion yläpuolelle `<p id="forecastSummary"></p>`. Näytä jokaisen haun jälkeen ennusteen alin ja ylin lämpötila, esimerkiksi **Helsinki · −3…+4 °C**. Käytä funktioita `Math.min(...temperatures)` ja `Math.max(...temperatures)`. |
| Viimeksi haettu kaupunki | Tallenna kaupungin nimi onnistuneen haun jälkeen metodilla `localStorage.setItem()`. Kun sivu ladataan uudelleen, lue nimi metodilla `localStorage.getItem()` ja tuo se valmiiksi kaupunkikenttään. |
| Säätilat piirakkakaaviona | Ryhmittele ennusteen tiedot kentän `weather[0].main` mukaan. Kun käyttäjä valitsee **Piirakka**, näytä, kuinka monelle kolmen tunnin jaksolle on luvassa esimerkiksi sadetta, pilviä tai selkeää säätä. |
| Ennusteen tiedot SweetAlert2:lla | Lisää **Näytä ennusteen tiedot** -painike. Avaa pohjan SweetAlert2-linkki ja lisää sivulle kirjaston CDN-latausrivi ennen `script.js`-tiedostoa. Näytä painikkeesta seuraava ennusteaika ja lämpötila kutsulla `Swal.fire()`. |

**Vapaaehtoinen jQuery-bonus.** Pohjassa on piilotettu viesti `#saaYllatys`. Kun olet tarkistanut syötteet, näytä viesti juuri ennen hakua kutsulla `$("#saaYllatys").show()`. Piilota se `.hide()`-metodilla `finally`-lohkossa, jolloin viesti poistuu myös epäonnistuneen haun jälkeen.

### 4. Testaa ja palauta

- [ ] Hae ensin **Helsinki**, sitten **Tampere**. Kaupungin nimi ja kaavio päivittyvät kummallakin haulla.
- [ ] Vaihda viivakaavio pylväskaavioksi. Kummassakin näkyvät samat ajankohdat ja lämpötilat.
- [ ] Kokeile tyhjää kenttää ja keksittyä kaupunkia, esimerkiksi **Xyzabc123**. Näet virheestä kertovan viestin, ja seuraava kelvollinen haku toimii.
- [ ] Kokeile omaa lisäystäsi. Jos valitsit viimeksi haetun kaupungin muistamisen, hae Tampere, päivitä sivu ja tarkista, että kentässä lukee edelleen Tampere.

Vie muutokset omaan GitHub-repositorioosi. Palauta Canvasiin linkki Workshop 9 -kansioosi ja kerro lyhyesti, mitä lisäsit ja miten testasit sen.

## JavaScript

### Axios

```js
async function getForecast(city, apiKey) {
  const locations = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
    params: { q: city, limit: 1, appid: apiKey }
  });

  const place = locations.data[0];
  if (!place) return [];

  const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: { lat: place.lat, lon: place.lon, units: "metric", appid: apiKey }
  });
  return response.data.list;
}
```

### Chart.js

```js
let forecast = [];
let chart;

function paivitaKaavio() {
  if (forecast.length === 0) return;
  if (chart) chart.destroy();

  const labels = forecast.map(entry => entry.dt_txt.slice(0, 16));
  const temperatures = forecast.map(entry => entry.main.temp);
  chart = new Chart(document.getElementById("tempChart"), {
    type: document.getElementById("chartType").value,
    data: {
      labels,
      datasets: [{ label: "°C", data: temperatures }]
    }
  });
}
```

[OpenWeather Geocoding API](https://openweathermap.org/api/geocoding-api) · [OpenWeather 5-day forecast](https://openweathermap.org/api/forecast5) · [Axios](https://axios-http.com/docs/req_config) · [Chart.js example](https://www.chartjs.org/docs/latest/getting-started/)
