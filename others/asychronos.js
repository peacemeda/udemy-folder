// console.log('HI');

// setTimeout(()=>{
//   console.log("Asynchronous result")
// },5000);

// console.log('Snychronous result');

let httpRequest = new XMLHttpRequest();

function get(url, success){
  httpRequest.open('GET', url);
  httpRequest.onload = function(){
    success(httpRequest.responseText);
  };
  httpRequest.send();

}

function tempToF(kelvin){
  return ((kelvin - 217.15) * 1.8 + 32).toFixed(0);
}

function succesHundler(data){
  const dataobj = JSON.parse(data);
  const weatherDiv = document.querySelector('#weather');
  const weatherFragment = `
  <h1>Weather</h1>
  <h2> class= "Top">
  img=src"http://openweathermap.org/img/w/${dataobj.weather[0].icon}.png 
  alt="${dataobj.weather[0].description}
  width="50"
  height="50"/> ${datobj.name} </h2>
  <p>
  <span class="tempF">${tempToF(dataobj.main.temp)}&deg;</span> | ${dataobj.weather[0]}
  </p>`
  weatherDiv.innerHTML = weatherFragment;
  weatherDiv.className.remove = 'hidden'
}

document.addEventListener('DOMContentLoaded', ()=>{
  const apikey = 'eca948dd807b879d4ee9971ede8574be';
  const url = 'http://api.openweathermap.orhttps://openweathermap.org/g/data/2.5/weather?q=long+Beach&APPID';
  get(url, succesHundler);
  //succesHundler(httpRequest.responseText);
});