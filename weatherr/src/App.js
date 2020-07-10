import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Title from './component/Title';
import Form from './component/Form';
import Weather from './component/Weather';
import favorites from './favorites.json';

const API_KEY = "8ec763983e29e3269440a118e910c713";

class App extends React.Component{
  state = {
    cityInput: undefined,
    favorites: [],
    countryInput: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    hour1: undefined,
    hour2: undefined,
    hour3: undefined,
    hour4: undefined,

    temperatureDay1: undefined,
    humidityDay1: undefined,
    descriptionDay1: undefined,
    hour5: undefined,
    hour6: undefined,
    hour7: undefined,
    hour8: undefined,
    hour9: undefined,
    hour10: undefined,
    hour11: undefined,
    hour12: undefined,

    temperatureDay2: undefined,
    humidityDay2: undefined,
    descriptionDay2: undefined,
    hour13: undefined,
    hour14: undefined,
    hour15: undefined,
    hour16: undefined,
    hour17: undefined,
    hour18: undefined,
    hour19: undefined,
    hour20: undefined,
   
    temperatureDay3: undefined,
    humidityDay3: undefined,
    descriptionDay3: undefined,
    hour21: undefined,
    hour22: undefined,
    hour23: undefined,
    hour24: undefined,
    hour25: undefined,
    hour26: undefined,
    hour27: undefined,
    hour28: undefined,

    temperatureDay4: undefined,
    humidityDay4: undefined,
    descriptionDay4: undefined,
    hour29: undefined,
    hour30: undefined,
    hour31: undefined,
    hour32: undefined,
    hour33: undefined,
    hour34: undefined,
    hour35: undefined,
    hour36: undefined,

    temperatureDay5: undefined,
    humidityDay5: undefined,
    descriptionDay5: undefined,
    hour37: undefined,
    hour38: undefined,
    hour39: undefined,
    hour40: undefined,

    error: "",
  }

onChangeCity = (e) => {
  this.setState({
    ...this.state,
    cityInput: e.target.value
  });
}

onChangeCountry = (e) => {
  this.setState({
    ...this.state,
    countryInput: e.target.value
  });
}

setFavorite = () => {
  this.setState({
    ...this.state,
    favorites: [...this.state.favorites, {city: this.state.cityInput, country: this.state.countryInput}]
  })
}

removeFavorite = (city) => {
  const newFavorites = this.state.favorites.filter(favorite => favorite.city !== city);

  this.setState({...this.state, favorites: newFavorites});
}

componentDidMount() {
  this.setState({
    ...this.state,
    favorites: favorites,
  })
}

getFavoriteWeather = async (cityInput, countryInput) => {
  const city = cityInput
  const country = countryInput
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
  const data = await api_call.json();

  if(city && country){
    console.log(data);
    this.setState({
      response: data,
      temperature: data.list[0].main.temp,
      city: data.city.name,
      country: data.city.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description, 
      hour1: [data.list[0].dt_txt,data.list[0].main.temp,data.list[0].weather[0].description,data.list[0].main.humidity],
      hour2: [data.list[1].dt_txt,data.list[1].main.temp,data.list[1].weather[0].description,data.list[1].main.humidity],
      hour3: [data.list[2].dt_txt,data.list[2].main.temp,data.list[2].weather[0].description,data.list[2].main.humidity],
      hour4: [data.list[3].dt_txt,data.list[3].main.temp,data.list[3].weather[0].description,data.list[3].main.humidity],
      
      temperatureDay1: data.list[4].main.temp,
      humidityDay1: data.list[4].main.humidity,
      descriptionDay1: data.list[4].weather[0].description,
      hour5: [data.list[4].dt_txt,data.list[4].main.temp,data.list[4].weather[0].description,data.list[4].main.humidity],
      hour6: [data.list[5].dt_txt,data.list[5].main.temp,data.list[5].weather[0].description,data.list[5].main.humidity],
      hour7: [data.list[6].dt_txt,data.list[6].main.temp,data.list[6].weather[0].description,data.list[6].main.humidity],
      hour8: [data.list[7].dt_txt,data.list[7].main.temp,data.list[7].weather[0].description,data.list[7].main.humidity],
      hour9: [data.list[8].dt_txt,data.list[8].main.temp,data.list[8].weather[0].description,data.list[8].main.humidity],
      hour10: [data.list[9].dt_txt,data.list[9].main.temp,data.list[9].weather[0].description,data.list[9].main.humidity],
      hour11: [data.list[10].dt_txt,data.list[10].main.temp,data.list[10].weather[0].description,data.list[10].main.humidity],
      hour12: [data.list[11].dt_txt,data.list[11].main.temp,data.list[11].weather[0].description,data.list[11].main.humidity],
      
      temperatureDay2: data.list[12].main.temp,
      humidityDay2: data.list[12].main.humidity,
      descriptionDay2: data.list[12].weather[0].description,
      hour13: [data.list[12].dt_txt,data.list[12].main.temp,data.list[12].weather[0].description,data.list[12].main.humidity],
      hour14: [data.list[13].dt_txt,data.list[13].main.temp,data.list[13].weather[0].description,data.list[13].main.humidity],
      hour15: [data.list[14].dt_txt,data.list[14].main.temp,data.list[14].weather[0].description,data.list[14].main.humidity],
      hour16: [data.list[15].dt_txt,data.list[15].main.temp,data.list[15].weather[0].description,data.list[15].main.humidity],
      hour17: [data.list[16].dt_txt,data.list[16].main.temp,data.list[16].weather[0].description,data.list[16].main.humidity],
      hour18: [data.list[17].dt_txt,data.list[17].main.temp,data.list[17].weather[0].description,data.list[17].main.humidity],
      hour19: [data.list[18].dt_txt,data.list[18].main.temp,data.list[18].weather[0].description,data.list[18].main.humidity],
      hour20: [data.list[19].dt_txt,data.list[19].main.temp,data.list[19].weather[0].description,data.list[19].main.humidity],
      
      temperatureDay3: data.list[20].main.temp,
      humidityDay3: data.list[20].main.humidity,
      descriptionDay3: data.list[20].weather[0].description,
      hour21: [data.list[20].dt_txt,data.list[20].main.temp,data.list[20].weather[0].description,data.list[20].main.humidity],
      hour22: [data.list[21].dt_txt,data.list[21].main.temp,data.list[21].weather[0].description,data.list[21].main.humidity],
      hour23: [data.list[22].dt_txt,data.list[22].main.temp,data.list[22].weather[0].description,data.list[22].main.humidity],
      hour24: [data.list[23].dt_txt,data.list[23].main.temp,data.list[23].weather[0].description,data.list[23].main.humidity],
      hour25: [data.list[24].dt_txt,data.list[24].main.temp,data.list[24].weather[0].description,data.list[24].main.humidity],
      hour26: [data.list[25].dt_txt,data.list[25].main.temp,data.list[25].weather[0].description,data.list[25].main.humidity],
      hour27: [data.list[26].dt_txt,data.list[26].main.temp,data.list[26].weather[0].description,data.list[26].main.humidity],
      hour28: [data.list[27].dt_txt,data.list[27].main.temp,data.list[27].weather[0].description,data.list[27].main.humidity],
      
      temperatureDay4: data.list[28].main.temp,
      humidityDay4: data.list[28].main.humidity,
      descriptionDay4: data.list[28].weather[0].description,
      hour29: [data.list[28].dt_txt,data.list[28].main.temp,data.list[28].weather[0].description,data.list[28].main.humidity],
      hour30: [data.list[29].dt_txt,data.list[29].main.temp,data.list[29].weather[0].description,data.list[29].main.humidity],
      hour31: [data.list[30].dt_txt,data.list[30].main.temp,data.list[30].weather[0].description,data.list[30].main.humidity],
      hour32: [data.list[31].dt_txt,data.list[31].main.temp,data.list[31].weather[0].description,data.list[31].main.humidity],
      hour33: [data.list[32].dt_txt,data.list[32].main.temp,data.list[32].weather[0].description,data.list[32].main.humidity],
      hour34: [data.list[33].dt_txt,data.list[33].main.temp,data.list[33].weather[0].description,data.list[33].main.humidity],
      hour35: [data.list[34].dt_txt,data.list[34].main.temp,data.list[34].weather[0].description,data.list[34].main.humidity],
      hour36: [data.list[35].dt_txt,data.list[35].main.temp,data.list[35].weather[0].description,data.list[35].main.humidity],
      
      temperatureDay5: data.list[36].main.temp,
      humidityDay5: data.list[36].main.humidity,
      descriptionDay5: data.list[36].weather[0].description,
      hour37: [data.list[36].dt_txt,data.list[36].main.temp,data.list[36].weather[0].description,data.list[36].main.humidity],
      hour38: [data.list[37].dt_txt,data.list[37].main.temp,data.list[37].weather[0].description,data.list[37].main.humidity],
      hour39: [data.list[38].dt_txt,data.list[38].main.temp,data.list[38].weather[0].description,data.list[38].main.humidity],
      hour40: [data.list[39].dt_txt,data.list[39].main.temp,data.list[39].weather[0].description,data.list[39].main.humidity],
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      hour1: undefined,
      hour2: undefined,
      hour3: undefined,
      hour4: undefined,
      
      temperatureDay1: undefined,
      humidityDay1: undefined,
      descriptionDay1: undefined,
      hoursDay1: undefined,
      hour5: undefined,
      hour6: undefined,
      hour7: undefined,
      hour8: undefined,
      hour9: undefined,
      hour10: undefined,
      hour11: undefined,
      hour12: undefined,

      temperatureDay2: undefined,
      humidityDay2: undefined,
      descriptionDay2: undefined,
      hoursDay2: undefined,
      hour13: undefined,
      hour14: undefined,
      hour15: undefined,
      hour16: undefined,
      hour17: undefined,
      hour18: undefined,
      hour19: undefined,
      hour20: undefined,

      temperatureDay3: undefined,
      humidityDay3: undefined,
      descriptionDay3: undefined,
      hoursDay3: undefined,
      hour21: undefined,
      hour22: undefined,
      hour23: undefined,
      hour24: undefined,
      hour25: undefined,
      hour26: undefined,
      hour27: undefined,
      hour28: undefined,

      temperatureDay4: undefined,
      humidityDay4: undefined,
      descriptionDay4: undefined,
      hoursDay4: undefined,
      hour29: undefined,
      hour30: undefined,
      hour31: undefined,
      hour32: undefined,
      hour33: undefined,
      hour34: undefined,
      hour35: undefined,
      hour36: undefined,

      temperatureDay5: undefined,
      humidityDay5: undefined,
      descriptionDay5: undefined,
      hoursDay5: undefined,
      hour37: undefined,
      hour38: undefined,
      hour39: undefined,
      hour40: undefined,
      
      error: "Please enter valuess"
    });


 }

}

getWeather = async (event) => {
  event.preventDefault();

  const city = event.target.elements.city.value;
  const country = event.target.elements.country.value;
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
  const data = await api_call.json();

  if(city && country){
    console.log(data);
    this.setState({
      response: data,
      temperature: data.list[0].main.temp,
      city: data.city.name,
      country: data.city.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description, 
      hour1: [data.list[0].dt_txt,data.list[0].main.temp,data.list[0].weather[0].description,data.list[0].main.humidity],
      hour2: [data.list[1].dt_txt,data.list[1].main.temp,data.list[1].weather[0].description,data.list[1].main.humidity],
      hour3: [data.list[2].dt_txt,data.list[2].main.temp,data.list[2].weather[0].description,data.list[2].main.humidity],
      hour4: [data.list[3].dt_txt,data.list[3].main.temp,data.list[3].weather[0].description,data.list[3].main.humidity],
      
      temperatureDay1: data.list[4].main.temp,
      humidityDay1: data.list[4].main.humidity,
      descriptionDay1: data.list[4].weather[0].description,
      hour5: [data.list[4].dt_txt,data.list[4].main.temp,data.list[4].weather[0].description,data.list[4].main.humidity],
      hour6: [data.list[5].dt_txt,data.list[5].main.temp,data.list[5].weather[0].description,data.list[5].main.humidity],
      hour7: [data.list[6].dt_txt,data.list[6].main.temp,data.list[6].weather[0].description,data.list[6].main.humidity],
      hour8: [data.list[7].dt_txt,data.list[7].main.temp,data.list[7].weather[0].description,data.list[7].main.humidity],
      hour9: [data.list[8].dt_txt,data.list[8].main.temp,data.list[8].weather[0].description,data.list[8].main.humidity],
      hour10: [data.list[9].dt_txt,data.list[9].main.temp,data.list[9].weather[0].description,data.list[9].main.humidity],
      hour11: [data.list[10].dt_txt,data.list[10].main.temp,data.list[10].weather[0].description,data.list[10].main.humidity],
      hour12: [data.list[11].dt_txt,data.list[11].main.temp,data.list[11].weather[0].description,data.list[11].main.humidity],
      
      temperatureDay2: data.list[12].main.temp,
      humidityDay2: data.list[12].main.humidity,
      descriptionDay2: data.list[12].weather[0].description,
      hour13: [data.list[12].dt_txt,data.list[12].main.temp,data.list[12].weather[0].description,data.list[12].main.humidity],
      hour14: [data.list[13].dt_txt,data.list[13].main.temp,data.list[13].weather[0].description,data.list[13].main.humidity],
      hour15: [data.list[14].dt_txt,data.list[14].main.temp,data.list[14].weather[0].description,data.list[14].main.humidity],
      hour16: [data.list[15].dt_txt,data.list[15].main.temp,data.list[15].weather[0].description,data.list[15].main.humidity],
      hour17: [data.list[16].dt_txt,data.list[16].main.temp,data.list[16].weather[0].description,data.list[16].main.humidity],
      hour18: [data.list[17].dt_txt,data.list[17].main.temp,data.list[17].weather[0].description,data.list[17].main.humidity],
      hour19: [data.list[18].dt_txt,data.list[18].main.temp,data.list[18].weather[0].description,data.list[18].main.humidity],
      hour20: [data.list[19].dt_txt,data.list[19].main.temp,data.list[19].weather[0].description,data.list[19].main.humidity],
      
      temperatureDay3: data.list[20].main.temp,
      humidityDay3: data.list[20].main.humidity,
      descriptionDay3: data.list[20].weather[0].description,
      hour21: [data.list[20].dt_txt,data.list[20].main.temp,data.list[20].weather[0].description,data.list[20].main.humidity],
      hour22: [data.list[21].dt_txt,data.list[21].main.temp,data.list[21].weather[0].description,data.list[21].main.humidity],
      hour23: [data.list[22].dt_txt,data.list[22].main.temp,data.list[22].weather[0].description,data.list[22].main.humidity],
      hour24: [data.list[23].dt_txt,data.list[23].main.temp,data.list[23].weather[0].description,data.list[23].main.humidity],
      hour25: [data.list[24].dt_txt,data.list[24].main.temp,data.list[24].weather[0].description,data.list[24].main.humidity],
      hour26: [data.list[25].dt_txt,data.list[25].main.temp,data.list[25].weather[0].description,data.list[25].main.humidity],
      hour27: [data.list[26].dt_txt,data.list[26].main.temp,data.list[26].weather[0].description,data.list[26].main.humidity],
      hour28: [data.list[27].dt_txt,data.list[27].main.temp,data.list[27].weather[0].description,data.list[27].main.humidity],
      
      temperatureDay4: data.list[28].main.temp,
      humidityDay4: data.list[28].main.humidity,
      descriptionDay4: data.list[28].weather[0].description,
      hour29: [data.list[28].dt_txt,data.list[28].main.temp,data.list[28].weather[0].description,data.list[28].main.humidity],
      hour30: [data.list[29].dt_txt,data.list[29].main.temp,data.list[29].weather[0].description,data.list[29].main.humidity],
      hour31: [data.list[30].dt_txt,data.list[30].main.temp,data.list[30].weather[0].description,data.list[30].main.humidity],
      hour32: [data.list[31].dt_txt,data.list[31].main.temp,data.list[31].weather[0].description,data.list[31].main.humidity],
      hour33: [data.list[32].dt_txt,data.list[32].main.temp,data.list[32].weather[0].description,data.list[32].main.humidity],
      hour34: [data.list[33].dt_txt,data.list[33].main.temp,data.list[33].weather[0].description,data.list[33].main.humidity],
      hour35: [data.list[34].dt_txt,data.list[34].main.temp,data.list[34].weather[0].description,data.list[34].main.humidity],
      hour36: [data.list[35].dt_txt,data.list[35].main.temp,data.list[35].weather[0].description,data.list[35].main.humidity],
      
      temperatureDay5: data.list[36].main.temp,
      humidityDay5: data.list[36].main.humidity,
      descriptionDay5: data.list[36].weather[0].description,
      hour37: [data.list[36].dt_txt,data.list[36].main.temp,data.list[36].weather[0].description,data.list[36].main.humidity],
      hour38: [data.list[37].dt_txt,data.list[37].main.temp,data.list[37].weather[0].description,data.list[37].main.humidity],
      hour39: [data.list[38].dt_txt,data.list[38].main.temp,data.list[38].weather[0].description,data.list[38].main.humidity],
      hour40: [data.list[39].dt_txt,data.list[39].main.temp,data.list[39].weather[0].description,data.list[39].main.humidity],
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      hour1: undefined,
      hour2: undefined,
      hour3: undefined,
      hour4: undefined,
      
      temperatureDay1: undefined,
      humidityDay1: undefined,
      descriptionDay1: undefined,
      hoursDay1: undefined,
      hour5: undefined,
      hour6: undefined,
      hour7: undefined,
      hour8: undefined,
      hour9: undefined,
      hour10: undefined,
      hour11: undefined,
      hour12: undefined,

      temperatureDay2: undefined,
      humidityDay2: undefined,
      descriptionDay2: undefined,
      hoursDay2: undefined,
      hour13: undefined,
      hour14: undefined,
      hour15: undefined,
      hour16: undefined,
      hour17: undefined,
      hour18: undefined,
      hour19: undefined,
      hour20: undefined,

      temperatureDay3: undefined,
      humidityDay3: undefined,
      descriptionDay3: undefined,
      hoursDay3: undefined,
      hour21: undefined,
      hour22: undefined,
      hour23: undefined,
      hour24: undefined,
      hour25: undefined,
      hour26: undefined,
      hour27: undefined,
      hour28: undefined,

      temperatureDay4: undefined,
      humidityDay4: undefined,
      descriptionDay4: undefined,
      hoursDay4: undefined,
      hour29: undefined,
      hour30: undefined,
      hour31: undefined,
      hour32: undefined,
      hour33: undefined,
      hour34: undefined,
      hour35: undefined,
      hour36: undefined,

      temperatureDay5: undefined,
      humidityDay5: undefined,
      descriptionDay5: undefined,
      hoursDay5: undefined,
      hour37: undefined,
      hour38: undefined,
      hour39: undefined,
      hour40: undefined,
      
      error: "Please enter values"
    });


 }

}

handleDownload = (e) => {
  e.preventDefault();
  const originalContent = this.state.response;
  if (originalContent) {
    let current_datetime = new Date()
    let formatted_date = originalContent.city.name + '_' + current_datetime.getDate() + "_" + (current_datetime.getMonth() + 1) + "_" + current_datetime.getFullYear() + "_" + current_datetime.getHours() + "_" + current_datetime.getMinutes();
    const content = JSON.stringify(originalContent);
    this.download(content, `${formatted_date}.json`, 'application/json');
  }
  else { this.setState({ error: 'No data to download'}); }
}

download = (content, fileName, contentType) => {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href)
}

render() {
  console.log(this.state.favorites);
    return(
    <Col className="wrapper">
      <Card>
        <CardBody className="wrapper">
          <Title />
          <div className="form-container">
            <Form handleChangeCity={this.onChangeCity} handleChangeCountry={this.onChangeCountry} cityValue={this.state.cityInput} countryValue={this.state.countryInput} getWeather={this.getWeather} handleDownload={this.handleDownload} error={this.state.error}/>
            <button onClick={this.setFavorite}>Add to favorite</button>
            <div className="favorites">
              {this.state.favorites.map(favorite => {
                return (
                <div className="singleFavorite">y
                  <div onClick={() => this.getFavoriteWeather(favorite.city, favorite.country)}>
                    <p>{favorite.city}</p>
                  <p>{favorite.country}</p>
                  </div>
                <button onClick={() => this.removeFavorite(favorite.city)}>remove favorite</button>
                </div>
        )})}
            </div>
          </div>
          <Weather 
            handleClick = {this.handleClick}
            temperature = {this.state.temperature} 
            city = {this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            hour1 = {this.state.hour1}
            hour2 = {this.state.hour2}
            hour3 = {this.state.hour3}
            hour4 = {this.state.hour4}

            temperatureDay1= {this.state.temperatureDay1}
            humidityDay1= {this.state.humidityDay1}
            descriptionDay1={this.state.descriptionDay1}
            hour5 = {this.state.hour5}
            hour6 = {this.state.hour6}
            hour7 = {this.state.hour7}
            hour8 = {this.state.hour8}
            hour9 = {this.state.hour9}
            hour10 = {this.state.hour10}
            hour11 = {this.state.hour11}
            hour12 = {this.state.hour12}

            temperatureDay2= {this.state.temperatureDay2}
            humidityDay2= {this.state.humidityDay2}
            descriptionDay2={this.state.descriptionDay2}
            hour13 = {this.state.hour13}
            hour14 = {this.state.hour14}
            hour15 = {this.state.hour15}
            hour16 = {this.state.hour16}
            hour17 = {this.state.hour17}
            hour18 = {this.state.hour18}
            hour19 = {this.state.hour19}
            hour20 = {this.state.hour20}
        

            temperatureDay3= {this.state.temperatureDay3}
            humidityDay3= {this.state.humidityDay3}
            descriptionDay3={this.state.descriptionDay3}
            hour21 = {this.state.hour21}
            hour22 = {this.state.hour22}
            hour23 = {this.state.hour23}
            hour24 = {this.state.hour24}
            hour25 = {this.state.hour25}
            hour26 = {this.state.hour26}
            hour27 = {this.state.hour27}
            hour28 = {this.state.hour28}
          

            temperatureDay4= {this.state.temperatureDay4}
            humidityDay4= {this.state.humidityDay4}
            descriptionDay4={this.state.descriptionDay4}
            hour29 = {this.state.hour29}
            hour30 = {this.state.hour30}
            hour31 = {this.state.hour31}
            hour32 = {this.state.hour32}
            hour33 = {this.state.hour33}
            hour34 = {this.state.hour34}
            hour35 = {this.state.hour35}
            hour36 = {this.state.hour36}
        

            temperatureDay5= {this.state.temperatureDay5}
            humidityDay5= {this.state.humidityDay5}
            descriptionDay5={this.state.descriptionDay5}
            hour37 = {this.state.hour37}
            hour38 = {this.state.hour38}
            hour39 = {this.state.hour39}
            hour40 = {this.state.hour40}
          />
        </CardBody>
      </Card>
    </Col>
    );
  }

}

export default App;