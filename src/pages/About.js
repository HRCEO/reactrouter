import React from 'react';
import quertSring from 'query-string';

const About = ({location, match}) => {

    const query = quertSring.parse(location.search);
    console.log(query);


    const {name, age, region} = query;
    return (
        <div>
            <h2>About {match.params.name}</h2>
            <h3 style={{color:"blue"}}>name : {name}</h3>
            <h3 style={{color:"blue"}}>age : {age}</h3>
            <h3 style={{color:"blue"}}>region : {region}</h3>
        </div>
    );
};

export default About;