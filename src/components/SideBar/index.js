import React from 'react';

import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink , SideBtnWrap, SideBarRoute } from 
'./SideBarElements';


const index = () => {
    return (
        <SideBarContainer>
            <Icon> 
                <CloseIcon/> 
            </Icon>
        <SideBarMenu>
            <SideBarLink to="/"> pizaas  </SideBarLink>
            <SideBarLink to="/"> Deserts  </SideBarLink>
            <SideBarLink to="/"> Full Menu  </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>   
            <SideBarRoute to="/"> Order Now </SideBarRoute>
        </SideBtnWrap>
        </SideBarContainer>
    )
}

export default index
