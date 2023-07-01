
var container= document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.className="row";
container.append(row);




var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
console.log(data1)

    for(let i=0; i<data1.length; i++){

        
      
     row.innerHTML+=`<div class="col-md-4">
    <div class="card" style="width: 18rem;">
    <h4 class="card-header">${data1[i].name}</h4>
  <img src="${data1[i].flag}" class="card-img-top" alt="flag">
  <div class="card-body"> 
  <h5 class="card-text">Capital : ${data1[i].capital}</h5>
  <h5 class="card-text">Region : ${data1[i].region}</h5>
  <h5 class="card-text">Country code : ${data1[i].alpha3Code}</h5>
  <h5 class="card-text">Population : ${data1[i].population}</h5>
  <button type="button" class="btn btn-primary" id="weather-data" onclick="weatherData(${data1[i].latlng[0]},${data1[i].latlng[1]},${i})">weather</button>
  <p id="p-tag${i}"></p>
  </div>
</div>
    
     </div>`

     document.body.append(container)
}
    }


async function weatherData(lat,lon,i){
try {
    if(lon===undefined) throw new Error("Invalid Coordinates");
    
    let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cb15e3acfbd3bdaeed36c7885f781200`);
    let res3=await res2.json();

    let p=document.getElementById("p-tag"+i)
    p.innerHTML=`${res3.main.temp}`
    console.log(`${res3.main.temp}`);
    
} catch (error) {
   console.log(error) 
}

}


