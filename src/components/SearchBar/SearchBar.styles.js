import styled from "styled-components";

export const Wrapper  = styled.div`
    background: lightblue;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 40px;
    width: 100%;

`;

export const Content  = styled.div`
    background: var(--medGrey);
    display: flex;
    position: relative;
    max-width: var(--maxWidth);
    width: 90%;
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: relative;
        left: 10px;
        top: 5px;
        width: 30px;
        height: 40px;

    }

    input {
        font-size: var(--fontBig);
        position: relative;
        left: 25px;
        margin: 8px 0;
        border: 0;
        width:  80%;
        height: 30px;
        border: 0;
        color: var(--white);
        background: transparent;
    
        :focus {
            outline: none;
        }
    }

`;

export const Text  = styled.div`
   
`;

