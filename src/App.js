import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const api_key = "11eccb7b8c45fd5a66fe79eee070f8db";
const howManyDays = 5;


class App extends React.Component{



  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //   OVA LINIJA KODA RADI ALI ONA MI SAMO PRIKAZIVA TRENUTNU TEMPERATURU GRADA.

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);


    // MENI TRIBA OVA LINIJA KODA ZA PRIKAZ TEMPERATURE NAREDNIH 5 DANA ALI NE RADI. PISE DA MI KEY NIJE UREDU

  //const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt=${howManyDays}&appid=${api_key}`);

 
    const data = await api_call.json();
    console.log(data);

  }
  render(){
    return(

      <div>

        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />

      </div>

    );
  }

};

export default App;

