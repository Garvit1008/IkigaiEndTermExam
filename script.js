// let weather_data = {};
const api = (location) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=60f9467dfcb1f42f4227c0f94c8775b6`
  )
    .then((response) => response.json())
    .then((data) => {
      show(data);
    })

    .catch((error) => {
      console.log("Error: ", error);
    });
};
api("agra");
  
document.getElementById("search").addEventListener("click", 
    () => {
        api(document.getElementById("locationn").value)
});

const show = (data) => {
    console.log(data)
  let tempe = data.main.temp;
  tempe = (tempe - 32) * (5 / 9);
  tempe = tempe.toFixed(2);

  let weat =  data.weather[0].main;
  let img = document.getElementById("image");
  document.getElementById("temperature").innerText = tempe;
  document.getElementById("loca").innerText = data.name;
  document.getElementById("humidi").innerText = data.main.humidity;
  document.getElementById("wind").innerText = data.wind.speed;
};
