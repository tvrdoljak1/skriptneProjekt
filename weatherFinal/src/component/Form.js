import React from 'react';

const Form = props =>{
        return(
            <form onSubmit={props.getWeather}>
                <input value={props.cityValue} onChange={props.handleChangeCity} type = "text" name="city" placeholder="city" />
                <input value={props.countryValue} onChange={props.handleChangeCountry} type = "text" name="country" placeholder="country"/>
                <button>Get Weather</button>
                <button onClick={props.handleDownload} color="primary">Download report to JSON</button>
                {props.error && <div className="weather__error">Error: {props.error}</div>}
            </form>
        );
}

export default Form;