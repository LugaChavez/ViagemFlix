import React from "react"
import styled from "styled-components"

const NoEncontrado = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:5px;

    p{
        color:#fc0303;
        filter: drop-shodow (4px 10px  #333);
        font-size:200px;
        margin-bottom:0;
        margin-top:100px;
    }

    h2{
        color:#333;
        margin-top:0;
    }
`

function NotFound() {
    return <NoEncontrado>
        <p>404</p>
        <h2> Página no encontrada</h2>
    </NoEncontrado>
}

export default NotFound