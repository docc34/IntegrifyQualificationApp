import {  Button, InputGroup, FormControl, CardGroup } from 'react-bootstrap';
import {MakeCard} from '../utils/utils';
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () =>{
  const [companyData, setCompanyData] = useState([]);
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [type, setType] = useState("");
  const [types] = useState(["micro","nano","regional","brewpub","large","planning","bar","contract","proprieter","closed"]);

  const getCompanyData = async()=>{
    var answer = await fetch("https://api.openbrewerydb.org/breweries");
    var d = await answer?.json()
    setCompanyData(d);
  }

  useEffect(()=>{
  getCompanyData();
  },[]);

  useEffect( async()=>{
    if(latitude != "" && latitude != null&&longitude != "" && longitude != null){
      var answer = await fetch("https://api.openbrewerydb.org/breweries?by_dist="+latitude+","+longitude);
    var d = await answer?.json()
    setCompanyData(d);
    }
  },[latitude,longitude]);


  useEffect( async()=>{
    if(name != "" && name != null){
      var answer = await fetch("https://api.openbrewerydb.org/breweries?by_name="+name);
      var d = await answer?.json()
      setCompanyData(d);
    }

  },[name]);

  useEffect( async()=>{
    if(state != "" && state != null){
      var answer = await fetch("https://api.openbrewerydb.org/breweries?by_state="+state);
    var d = await answer?.json()
    setCompanyData(d);
    }
  },[state]);

  useEffect( async()=>{
    if(postal_code != "" && postal_code != null){
      var answer = await fetch("https://api.openbrewerydb.org/breweries?by_postal="+postal_code);
    var d = await answer?.json()
    setCompanyData(d);
    }
  },[postal_code]);

  useEffect( async()=>{
    if(type != "" && type != null){
      var answer = await fetch("https://api.openbrewerydb.org/breweries?by_type="+type);
    var d = await answer?.json()
    setCompanyData(d);
    }
    else{
    await getCompanyData();
    }
  },[type]);

  const renderTypes = types.map((e,i)=>{
    return(<option value={e}>{e}</option>)
  });
  return (
    <div className='HomePageContainer'>
      <div className='HomePageSearchContainer'>
        <div className='HomePageSearchParamsContainers'>
          <div className='HomePageSearchParamsInputContainers'>
            <label htmlFor='name' className='SearchParamsLabels'>Name: </label>
            <input className='SearchParamsInputs'id="name" onChange={(e)=>{ setName(e.target.value); }}/>
          </div>
          <div className='HomePageSearchParamsInputContainers'>
          <label htmlFor='state' className='SearchParamsLabels'>State: </label>
          <input className='SearchParamsInputs'id="state" onChange={(e)=>{ setState(e.target.value); }}/>
          
          </div>
          
        </div>
        <div className='HomePageSearchParamsContainers'>
          <div className='HomePageSearchParamsInputContainers'>
            <label  htmlFor='latitude' className='SearchParamsLabels'>
            Latitude: </label>
              <input className='SearchParamsInputs' id="latitude" onChange={(e)=>{ setLatitude(e.target.value); }}/>
          </div>
          <div className='HomePageSearchParamsInputContainers'>
            <label  htmlFor='longitude' className='SearchParamsLabels'>Longitude: </label>
            <input className='SearchParamsInputs'id="longitude" onChange={(e)=>{ setLongitude(e.target.value); }}/>
          </div>
        </div>
        <div className='HomePageSearchParamsContainers'>
          
          <div className='HomePageSearchParamsInputContainers'>
            <label  htmlFor='postal_code' className='SearchParamsLabels'>Postal_code: </label>
              <input className='SearchParamsInputs'id="postal_code" onChange={(e)=>{ setPostal_code(e.target.value); }}/>
            
          </div>
          <div className='HomePageSearchParamsInputContainers'>
            <label  htmlFor='type' className='SearchParamsLabels'>Type:  </label>  
            <select className='SearchParamsInputs'id="type" onChange={(e)=>{ setType(e.target.value); }}>
              <option value="">Choose an type</option>
              {renderTypes}
            </select>
           
          </div>
        </div>      

      </div>
      <div className='HomePageCardGroupContainer'>
        <CardGroup  className="Store-Card-Column">
            <MakeCard data={companyData} />
        </CardGroup>
      </div>
    </div>
  );
}

export {Home};
