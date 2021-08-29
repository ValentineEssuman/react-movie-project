import styled from "styled-components"; 

export const Spinner = styled.div`
    border: 10px solid lightblue ;
    border-top: 10px solid var(--medGrey);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.8s linear infinite;

    margin: 2px auto;

    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;