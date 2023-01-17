import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.Color || '#FFF'};
    font-size: ${props => props.FontSize || ''};
    text-align: center;
    margin: 0;
`;