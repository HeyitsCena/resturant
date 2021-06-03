import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
       <FeatureContainer>
           <h1> Pizza of the day </h1>
           <p> Tuffle alferedo suace toppeled with 24 carat gold dust. </p>
        <FeatureButton>  Order now </FeatureButton>
       </FeatureContainer>   
    )
}

export default Feature
