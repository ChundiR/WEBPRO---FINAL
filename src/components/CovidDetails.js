import React from 'react';
import { Link } from 'react-router-dom';

const CovidDetails = (props) => {
  let flag = {}
  flag = ( props?.covid?.countryInfo?.flag);

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src={flag} alt={props.covid.country} />
                </div>
                <div className="col-md-6">
                <h1 className="display-5 fw-bolder">{props.covid.country}</h1>
                    <div className="small mb-1">Continent: {props.covid.continent}</div>   
                    <div className="small mb-1">Cases: {props.covid.cases}</div>                
                    <div className="small mb-1">Today Cases: {props.covid.todayCases}</div>                                                        
                    <div className="small mb-1">Deaths: {props.covid.deaths}</div>                
                    <div className="small mb-1">Today Deaths: {props.covid.todayDeaths}</div> 
                    <div className="small mb-1">Recovered: {props.covid.recoverd}</div>                                                                       
                    <div className="small mb-1">Today Recovered: {props.covid.todayRecovered}</div>
                    <div className="small mb-1">total populations: {props.covid.population}</div>                                                                        
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default CovidDetails;
