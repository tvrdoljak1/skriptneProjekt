import React from 'react';
import moment from 'moment';

class Weather extends React.Component{

 state = {term: undefined}
    constructor(props) {
        super(props);
        this.showMore = false;
    }

    toggleClick = () => {
       this.showMore = !this.showMore;
       this.setState({term: 2})
    }
    
    render() {

        return (
            <div className="align-items-start main">

                {this.props.city && this.props.country && <div className="weather__info">Location: {this.props.city}, {this.props.country}</div> }
                {this.props.temperature && this.props.description && this.props.humidity && <div className="weather__info">Temperature: {this.props.temperature}, Conditions: {this.props.description}, Humidity: {this.props.humidity}</div>}
                {this.props.hour1 && (
                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour1[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour1[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour1[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour1[3]}</span>
                    </div>
                )}
                {this.props.hour2 && (
                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour2[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour2[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour2[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour2[3]}</span>
                    </div>
                )}
                {this.props.hour3 && (
                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour3[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour3[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour3[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour3[3]}</span>
                    </div>
                )}
                {this.props.hour4 && (
                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour4[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour4[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour4[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour4[3]}</span>
                    </div>
                )}
                
                {this.props.hour1 && <div className="showMore" onClick={this.toggleClick}>{this.showMore ? "Show less days" : "Show more days"}</div>}

                {/* 
                            SUTRA
                */}

            {this.showMore && <div className="weather__info">{moment(this.props.hour5[0]).format('LL')}</div> }
                {this.showMore && this.props.hour5[0] && <div className="weather__info">Temperature: {this.props.hour5[1]}, Conditions: {this.props.hour5[2]}, Humidity: {this.props.hour5[3]}</div>}

                {this.showMore && (  

                    

                    <div>
                        <div className="col-sm weather__key">
                            Hour: <span className="col-sm weather__value">{moment(this.props.hour5[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour5[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour5[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour5[3]}</span>
                        </div>
                        <div className="col-sm weather__key">
                            Hour: <span className="col-sm weather__value">{moment(this.props.hour6[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour6[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour6[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour6[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour7[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour7[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour7[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour7[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour8[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour8[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour8[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour8[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour9[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour9[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour9[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour9[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour10[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour10[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour10[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour10[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour11[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour11[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour11[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour11[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour12[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour12[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour12[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour12[3]}</span>
                        </div>




                        {

                            /*
                                PREKOSUTRA
                            */

                        }
{this.showMore && <div className="weather__info">{moment(this.props.hour13[0]).format('LL')}</div> }
{this.showMore && this.props.hour13[0] && <div className="weather__info">Temperature: {this.props.hour13[1]}, Conditions: {this.props.hour13[2]}, Humidity: {this.props.hour13[3]}</div>}

                        <div className="col-sm weather__key">
                            Hour: <span className="col-sm weather__value">{moment(this.props.hour13[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour13[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour13[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour13[3]}</span>
                        </div>
                        <div className="col-sm weather__key">
                            Hour: <span className="col-sm weather__value">{moment(this.props.hour14[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour14[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour14[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour14[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour15[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour15[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour15[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour15[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour16[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour16[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour16[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour16[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour17[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour17[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour17[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour17[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour18[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour18[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour18[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour18[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour19[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour19[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour19[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour19[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour20[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour20[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour20[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour20[3]}</span>
                        </div>


                        {
                            /*
                                3 dan
                            */
                        }

{this.showMore && <div className="weather__info">{moment(this.props.hour21[0]).format('LL')}</div> }
{this.showMore && this.props.hour21[0] && <div className="weather__info">Temperature: {this.props.hour21[1]}, Conditions: {this.props.hour21[2]}, Humidity: {this.props.hour21[3]}</div>}

                        <div className="col-sm weather__key">
                            Hour: <span className="col-sm weather__value">{moment(this.props.hour21[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour21[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour21[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour21[3]}</span>
                        </div>
                        <div className="col-sm weather__key">
                            Hour: <span className="col-sm weather__value">{moment(this.props.hour22[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour22[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour22[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour22[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour23[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour23[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour23[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour23[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour24[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour24[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour24[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour24[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour25[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour25[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour25[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour25[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour26[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour26[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour26[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour26[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour27[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour27[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour27[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour27[3]}</span>
                        </div>

                        <div className="col-sm weather__key">
                             Hour: <span className="col-sm weather__value">{moment(this.props.hour28[0]).format('LT')}</span>
                            Temperature: <span className="col-sm weather__value">{this.props.hour28[1]}</span>
                            Description: <span className="col-sm weather__value">{this.props.hour28[2]}</span>
                            Humidity: <span className="col-sm weather__value">{this.props.hour28[3]}</span>
                        </div>



                        {
                            /*
                                4 dan
                            */
                        }
{this.showMore && <div className="weather__info">{moment(this.props.hour29[0]).format('LL')}</div> }
{this.showMore && this.props.hour29[0] && <div className="weather__info">Temperature: {this.props.hour29[1]}, Conditions: {this.props.hour29[2]}, Humidity: {this.props.hour29[3]}</div>}

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour29[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour29[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour29[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour29[3]}</span>
                    </div>
                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour30[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour30[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour30[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour30[3]}</span>
                    </div>

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour31[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour31[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour31[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour31[3]}</span>
                    </div>

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour32[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour32[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour32[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour32[3]}</span>
                    </div>

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour33[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour33[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour33[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour33[3]}</span>
                    </div>

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour34[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour34[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour34[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour34[3]}</span>
                    </div>

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour35[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour35[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour35[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour35[3]}</span>
                    </div>

                    <div className="col-sm weather__key">
                        Hour: <span className="col-sm weather__value">{moment(this.props.hour36[0]).format('LT')}</span>
                        Temperature: <span className="col-sm weather__value">{this.props.hour36[1]}</span>
                        Description: <span className="col-sm weather__value">{this.props.hour36[2]}</span>
                        Humidity: <span className="col-sm weather__value">{this.props.hour36[3]}</span>
                    </div>


                            {
                                /*
                                5 dan
                            */
                            }

{this.showMore && <div className="weather__info">{moment(this.props.hour37[0]).format('LL')}</div> }
{this.showMore && this.props.hour37[0] && <div className="weather__info">Temperature: {this.props.hour37[1]}, Conditions: {this.props.hour37[2]}, Humidity: {this.props.hour37[3]}</div>}

                                <div className="col-sm weather__key">
                                    Hour: <span className="col-sm weather__value">{moment(this.props.hour37[0]).format('LT')}</span>
                                    Temperature: <span className="col-sm weather__value">{this.props.hour37[1]}</span>
                                    Description: <span className="col-sm weather__value">{this.props.hour37[2]}</span>
                                    Humidity: <span className="col-sm weather__value">{this.props.hour37[3]}</span>
                                </div>
                                <div className="col-sm weather__key">
                                    Hour: <span className="col-sm weather__value">{moment(this.props.hour38[0]).format('LT')}</span>
                                    Temperature: <span className="col-sm weather__value">{this.props.hour38[1]}</span>
                                    Description: <span className="col-sm weather__value">{this.props.hour38[2]}</span>
                                    Humidity: <span className="col-sm weather__value">{this.props.hour38[3]}</span>
                                </div>

                                <div className="col-sm weather__key">
                                    Hour: <span className="col-sm weather__value">{moment(this.props.hour39[0]).format('LT')}</span>
                                    Temperature: <span className="col-sm weather__value">{this.props.hour39[1]}</span>
                                    Description: <span className="col-sm weather__value">{this.props.hour39[2]}</span>
                                    Humidity: <span className="col-sm weather__value">{this.props.hour39[3]}</span>
                                </div>

                                <div className="col-sm weather__key">
                                    Hour: <span className="col-sm weather__value">{moment(this.props.hour40[0]).format('LT')}</span>
                                    Temperature: <span className="col-sm weather__value">{this.props.hour40[1]}</span>
                                    Description: <span className="col-sm weather__value">{this.props.hour40[2]}</span>
                                    Humidity: <span className="col-sm weather__value">{this.props.hour40[3]}</span>
                                </div>








                    </div>


                    



                    
                )}

            </div>
        );
        }

}

export default Weather;

//url("img/bg.jpg")