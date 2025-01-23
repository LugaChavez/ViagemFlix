import React from "react"
import styled from "styled-components"

const NoEncontrado = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:5px;

    h2{
        color:#fc0303;
        filter: drop-shodow (4px 10px  #333);
        font-size:12em;
        margin: 0 auto;
    }

    p{
        color:#333;
        margin:0 auto;
        font-size:2em;
        width:100%;
        height:2em;
    }
`

function NotFound() {
    return <NoEncontrado>
        <h2>404</h2>
        <p> Página no encontrada</p>
    </NoEncontrado>
}

export default NotFound