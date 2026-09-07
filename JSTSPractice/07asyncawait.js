//------------------------------------------
function add(){

} //this is norml function

async function add1(){
    return 10;
}

function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Weather Data");
            resolve(200)
        }, 2000)
    })
}

async function getWeatherData(){
    await api();
}