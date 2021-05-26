import React from 'react';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
    return (
      <HeroContainer>
          <Navbar />
          <SideBar />
          <HeroContent>
            <HeroItems> 
              <HeroH1>  Greatest pizza ever  ??? </HeroH1>
              <HeroP>   Ready in 60 Seconds  </HeroP>
              <HeroBtn> Place Order          </HeroBtn> 
            </HeroItems>
          </HeroContent>
      </HeroContainer>
    )
}

export default Hero
