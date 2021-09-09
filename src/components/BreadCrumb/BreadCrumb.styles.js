import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    color: var(--white);
`;

export const Content = styled.div`
    background-color: gray;
    display: flex;
    width: 100%;
    padding 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px){
            font-size: var(--fontSmall)
        }
    }
`;