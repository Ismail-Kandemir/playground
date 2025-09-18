const url='https://api.openweathermap.org/data/2.5/'
const key='4eaef920768bbb0cf2e3ecd9fcc7b7b9'

const setQuery= (evt) => {
    if(evt.keyCode == 13)
        getResult(searchBar.value)
    }
    const getResult = (cityName) => {
         if(cityName==='canserin götü'){
            alert(`${cityName} 500°C YANIYOR AWKK`);
            return;
         }
        let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
        
        fetch(query)
        .then(weather => {
            return weather.json();
            
            
        })
        .then(displayResult);
       
            
            
           
    
   

        
    }

    const displayResult = (result) => {
        let city=document.querySelector('.city')
        city.innerText=`${result.name}, ${result.sys.country}`

        let temp=document.querySelector('.temp')
        temp.innerText=`${Math.round(result.main.temp)}°C`

        let desc=document.querySelector('.desc')
        desc.innerText=result.weather[0].description

        let minmax=document.querySelector('.minmax')
        minmax.innerText=`Min: ${Math.round(result.main.temp_min)}°C  
        Max: ${Math.round(result.main.temp_max)}°C`
        
        return;
    }

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);