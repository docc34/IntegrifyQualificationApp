import {  Button, InputGroup, FormControl, CardGroup } from 'react-bootstrap';
import { useLocation,useNavigate } from "react-router-dom";
import './CompanyDetails.css';
import React, { useEffect, useState } from 'react';
import {NullToText} from '../utils/utils';

const CompanyDetail = () =>{
    //Is used in place of useParams
    const search = useLocation().search;
    const companyName = new URLSearchParams(search).get('companyName');
    const companyLongitude = new URLSearchParams(search).get('longitude');
    const companyLatitude = new URLSearchParams(search).get('latitude');
    const history = useNavigate();

    const [companyData, setCompanyData] = useState([]);
    const getCompanyData = async()=>{
        var answer = await fetch("https://api.openbrewerydb.org/breweries?by_name="+companyName+"&by_dist="+companyLatitude+","+companyLongitude);
        var d = await answer?.json()
        if(d!=null){
            setCompanyData(d[0]);
            console.log(d[0]);
        }
    }

    useEffect(()=>{
    getCompanyData();
    },[]);
    return (
        <div className='BreweryDetailsMainContainer'>
            <div className='BreweryDetailsDataMainContainer'>
                <h1>Brewerydetails</h1>
                <div className="BreweryDetailsContainer">
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>Name:</p> <p> <NullToText data={companyData?.name}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>Brewery type:</p><p> <NullToText data={companyData?.brewery_type}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>Street:</p><p> <NullToText data={companyData?.street}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>Address 2:</p><p><NullToText data={companyData?.address_2}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>Address 3:</p><p> <NullToText data={companyData?.address_3}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>City:</p><p> <NullToText data={companyData?.city}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>State:</p><p> <NullToText data={companyData?.state}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>County_province:</p><p> <NullToText data={companyData?.county_province}/></p></div>
                    <div className='BreweryDetailsTextContainer'><p className='BreweryDetailsTitles'>Postal_code:</p><p> <NullToText data={companyData?.postal_code}/></p></div>
                </div>
                <Button onClick={()=>{ history("/");}}>Go Back</Button>
            </div>
        </div>
    );
}

export {CompanyDetail};
