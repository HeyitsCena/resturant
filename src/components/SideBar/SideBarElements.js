import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SideBarContainer = styled.aside `
    position: fixed; 
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen  }) => (isOpen ? '0' : '-1000px') };


    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;

`;

export const Icon = styeld.div`

    position: absolute; 
    top: 1.2rem;
    right: 1.5rem;
    background: trasnparent; 
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarMenu = 