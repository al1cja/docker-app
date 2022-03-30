import styled from 'styled-components';

export const ItemDetails = styled.div`
    display: grid;
    grid-template-columns: 100px calc(100% - 200px) 100px;
    padding: 5px;
    justify-items: center;
    align-items: center;

    svg {
        font-size: 40px;
    }

    .price {
        color: #ed4e5c;
    }
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

export const ItemElement = styled.div`
    border: 1px solid #415a8b;
    border-radius: 5px;
    width: 80%;
    margin: 5px 0;
    background-color: #fff;
`;

export const ItemSection = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: rgba(39, 53, 82, 0.05);
    background-color: #eef5ed;
    padding-top: 30px;

    h2 {
        font-size: 40px;
        margin-bottom: 50px;
        color: #273552;
    }
`
