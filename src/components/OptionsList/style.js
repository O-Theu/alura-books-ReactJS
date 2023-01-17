import styled from "styled-components";

export const Container = styled.ul`
    display: flex;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding:  0 5px;
        min-width: 120px;
        font-size: 16px;
        cursor: pointer;
    }

    li p {
        text-transform: uppercase;
        font-weight: 500;
    }
`;