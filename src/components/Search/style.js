import styled from "styled-components";

export const Container = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 35px 0;
    height: 50vh;
    width: 100%;
`;

export const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const SubTitulo = styled.h3`
    color: #999;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

export const BookContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

export const Book = styled.div`
    cursor: pointer;
    text-align: center;
    z-index: 10;

    img {
        width: 200px;
    }

    p {
        font-size: 18px;
        margin-bottom: 8px;
    }
`;