import styled from 'styled-components';


export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 1000vh;
    padding: 5rem calc((100vw - 1300px) /2 );
    background: #150f0f;
    color: #fff;

`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:  0 auto;
`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 1;
    width: 200px;
`;

export const ProductImg = styled.img`
    height: 200px;
    min-width: 100px;
    max-width: 100%;
    box-shadow: 4px 1px #71F18E;

`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 3vm, 3rem);
    text-align: center;
    margin-bottom: 3rem;

`;

export const  ProductTitle = styled.h2`
    font-weight: 100;
    font-size: 1.5rem;
    color: HSL(240,50%,80%,1) ;
`;

export const ProductInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    text-align: center;
    margin-top: 1rem;
`;

export const ProductDesc = styled.p`
    margin-top: 1rem;
    margin-bottom: 2rem;

`;


export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #ff99ff;
    transition: 0.2 ease-out;


    &:hover{
        background: ;#ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }

`;