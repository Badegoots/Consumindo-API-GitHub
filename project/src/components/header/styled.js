import styled from "styled-components";

export const Image = styled.div`
    width: auto;
    height: 200px;   
    display: flex;
    justify-content: space-around;
    padding: 7px;
    background-color: #5E6472;
`


export const Wrapper = styled.div`
    display: flex;
    width: auto;
    justify-content: space-between;

    input {
        border: 1px solid black;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
        background-color: #AED9E0;
        margin: 15px;
    }

    button {
        border: 1px solid black;
        border-radius: 8px;
        background-color: #AED9E0;
        padding: 8px 16px;
        margin: 0 15px;
        height: 50%;
        align-self: center;

        &:hover {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
        font-weight: bold;
        color: #455054;
        }
    }

    
`;