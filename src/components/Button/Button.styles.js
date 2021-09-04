import styled from "styled-components";

export const Wrapper  = styled.div`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    border: 0px;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    color: var(--white);
    
    :hover {
        opacity: 0.8; 
    }
`;

export const Text  = styled.div`
    background: transparent;
    display: block;
    min-width: 100px;
    text-align: center;
    margin: auto;
    padding: 15px;
    


`;
