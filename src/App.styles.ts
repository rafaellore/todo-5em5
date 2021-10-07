// aqui criamos componentes com estilos que serão importados em app
// primeiro importamos a dependencia
import styled from 'styled-components';

// aqui criamos e exportamos os componentes
// falamos o que queremos, que no caso é uma div, e passamos suas estilizações

export const Container = styled.div`
    background-color: #17181f;
    color: #797A81;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;