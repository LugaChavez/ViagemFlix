import styled from "styled-components"

const CampoTextoEstilizado = styled.div`
    margin: 8px 0;
    font-family: 'Roboto', sans-serif;

    label{
        font-family: 'Roboto', sans-serif;
        display:block;
        font-size:18px;
        color:#fff;
        margin-bottom:8px;
    }

    input{
        width:100%;
        border:none;
        font-size:16px;
        padding:0.5rem 1rem;
        box-sizing: border-box;
        border-radius:4px;
    }

`

const CampoTexto = (props) => {
    console.log("Datos:, props")
    return <CampoTextoEstilizado>
        <label>{props.label}</label>
        <input
            placeholder={props.placeholder}
        />
    </CampoTextoEstilizado>
}

export default CampoTexto