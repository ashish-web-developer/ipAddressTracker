const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ipElement = document.getElementById("ip");
const locationElement = document.getElementById("location");
const timezoneElement = document.getElementById("timezone");
const ispElement = document.getElementById("isp");
// button click event handler
buttonElement.onclick = function (){
    const address = `https://geo.ipify.org/api/v1?apiKey=at_eBOsYBOw9mOUM01NGZgPzEVCMSjOf&ipAddress=${inputElement.value}`;
    fetch(address)
    .then(response=>{
        return response.json();
    })
    .then(data =>{
        ipElement.innerHTML = data.ip;
        locationElement.innerHTML = `${data.location.country}, ${data.location.region}`;
        timezoneElement.innerHTML = data.location.timezone;
        ispElement.innerHTML = data.isp;
    })
};
