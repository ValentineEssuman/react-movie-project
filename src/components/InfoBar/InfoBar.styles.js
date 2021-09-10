import styled from "styled-components";

export const Wrapper  = styled.div`
    background-color: var(--darkGrey);
    display: flex;
    min-height: 100px;
    align-items: center;
    padding: 0 20px;

`;

export const Content  = styled.div`

    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    

    .column {
        display: flex; 
        align-tems: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 20px;
        flex: 1;
        margin: 0 20px;
    }

    :first-child {
        margin-left: 0;
    }

    : last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 768px){
        display: block;

        .column {
            margin: 20px 0;
        }
    }

  
`;


