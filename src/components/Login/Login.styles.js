import styled from "styled-components";

export const  Wrapper = styled.div`
    background-color: brown;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-wdith: 320px;
    padding: 20px;
    color: var(--darkGrey);
  
    input {
        width: 50%;
        height: 30px;
        border-radius: 20px;
        border: 1px solid var(--darkGrey);
        margin: 10px 0;
        padding: 10px;
    }

    .error {
        color: red;
    }
`;