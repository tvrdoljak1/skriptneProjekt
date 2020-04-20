import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "11eccb7b8c45fd5a66fe79eee070f8db";

class App extends Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // current weather data for one location
    // const response = await fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    // );

    // 16 day / daily forecast data is not available under Free pricing model (https://openweathermap.org/price)
    // instead, you can use API call for 5 day / 3 hour forecast data
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
