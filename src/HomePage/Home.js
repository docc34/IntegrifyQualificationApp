import {  Button, InputGroup, FormControl, CardGroup } from 'react-bootstrap';
import {MakeCard} from '../utils/utils';
import React, { useEffect, useState } from 'react';

const Home = () =>{
  const [companyData, setCompanyData] = useState([]);
  const getCompanyData = async()=>{
    var answer = await fetch("https://api.openbrewerydb.org/breweries");
    var d = await answer?.json()
    setCompanyData(d);
    console.log(d);
  }

  useEffect(()=>{
  getCompanyData();
  },[]);
  return (
    <div>
        <CardGroup  className="Store-Card-Column">
            <MakeCard data={companyData} />
        </CardGroup>
    </div>
  );
}

export {Home};
