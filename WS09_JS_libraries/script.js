// const apiKey = "ff64c247a136f706923d1ee0d55d71e2"; // <-- Add your API key here
let tempChart = null; // Global chart reference
let chartData = {}; // Store data and labels for reuse
let City = "Helsinki";
const language = document.documentElement.lang === "en" ? "en" : "fi";

async function getForecast(city, apiKey) {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  const geoResponse = await axios.get(geoUrl);

  return geoResponse.data;
}

async function haeSaa() {
  const city = document.querySelector("#kaupunki").value.trim();

  const apiKey = document.querySelector("#apiKey").value.trim();

  if (!city) {
    alert("Please enter a city.");
    return;
  }

  if (!apiKey) {
    alert("Please enter your API key.");
    return;
  }

  $("#saaYllatys").show();

  try {
    const forecast = await getForecast(city, apiKey);

    if (forecast.length === 0) {
      alert("City not found");
      return;
    }

    document.getElementById("cityName").textContent = city;

    paivitaKaavio();
  } catch (error) {
    alert("Failed to fetch weather data.");
    console.error(error);
  } finally {
    $("#saaYllatys").hide();
  }

  let url = ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=${language}&appid=${apiKey}`;
  try {
    // Axios request is here!
    const response = await axios.get(url);

    const data = response.data.list;
    console.log(data);
    // Get the temperature and time recorded every three hours.
    const labels = data.slice(0, 12).map((item) => {
      const aika = new Date(item.dt_txt);
      return `${aika.getDate()}.${aika.getHours()}:00`;
    });

    const temperatures = data.slice(0, 12).map((item) => item.main.temp);

    const minTemp = Math.min(...temperatures);
    const maxTemp = Math.max(...temperatures);

    document.getElementById("forecastSummary").textContent =
      `${city} · ${minTemp} to ${maxTemp} °C`;

    chartData = { labels, temperatures }; // Store the values for reuse.
    console.log(temperatures);
    piirraKaavio(labels, temperatures, city, "line");
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(
      language === "en"
        ? "Could not fetch weather data. Check the city name or API key."
        : "Säädatan hakeminen epäonnistui. Tarkista kaupungin nimi tai API-avain.",
    );
  }
}

// Load the weather for Helsinki when the page opens.
// haeSaa();
function piirraKaavio(labels, data, city, type) {
  const ctx = document.getElementById("tempChart").getContext("2d");

  // Destroy the previous chart before creating a new one.
  if (window.tempChart && typeof window.tempChart.destroy === "function") {
    window.tempChart.destroy();
  }

  // New chart is here!

  // Create a new chart.
  window.tempChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: `${language === "en" ? "Temperature" : "Lämpötila"} (${city}) °C`,
          data: data,
          borderWidth: 2,
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

function paivitaKaavio() {
  // Get the selected chart type.
  let type = document.getElementById("chartType").value;
  console.log(type);
  // Redraw the chart with the selected type and previously fetched data.

  const city = document.querySelector("#kaupunki").value.trim();

  piirraKaavio(chartData.labels, chartData.temperatures, city, type);
}

document.querySelector("#haeSaaPainike").addEventListener("click", haeSaa);
