import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-content: space-between;
    background-color: #AED9E0;
    border: 1px solid ;
    border-radius: 20px;
    margin: 15px;
    `;

    export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin: 8px;
    height: auto;
    

    h1 {
        font-size: 28px;
        font-weight: bold;
        color: #AED9E0;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        
        color: #455054;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
        
        color: #455054;
    }
    `;

    export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }

    span {
        font-size: 18px;
        color: #308695;
        font-weight: bold;
    }
    `;

    export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3 {
        margin-right: 8px;
    }

    a {
        font-size: 18px;
        color: #308695;
        font-weight: bold;
    }

    span {
        font-size: 18px;
        color: #308695;
        font-weight: bold;
    }
    `;

    export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 10px;
`;