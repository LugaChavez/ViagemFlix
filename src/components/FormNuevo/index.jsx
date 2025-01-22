import CampoTexto from "../CampoTexto/CampoTexto"
import Categorias from "../Categorias"
import styled from "styled-components"
import Button from "@mui/material/Button"

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-family: 'Roboto', sans-serif;
    
    form {
        max-width: 100%;
        width: 40%;
        background-color: #333;
        padding: 30px 70px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 8px;
        box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
        position: relative;
    }

    Button {
        margin: 8px;
        color: #2271D1;
        text-align: center;
    }
    
    Button:hover {
        border-color: #fff;
        color: #fff;
    }

    .button-container {
        display: flex;
        justify-content: space-between; 
        width: 100%;
        margin-top: 20px;
    }

    .button-container Button {
        margin: 0 10px; 
    }
`

const FormNV = () => {
    const manejarBotones = (e)=>{
        console.log("manejar Botones", e)
    }
    return (
        <FormStyle onSubmit={manejarBotones}>
            <form method="dialog">

                <CampoTexto
                    label="Titulo"
                    placeholder="ingrese el titulo"
                />
                <Categorias />
                <CampoTexto
                    label="Imagen"
                    placeholder="ingrese la url de la imagen"
                />
                <CampoTexto
                    label="Vídeo"
                    placeholder="ingrese la url del vídeo"
                />
                <CampoTexto
                    label="Descripción"
                    placeholder="¿de qué trata este vídeo?"
                />
                {/* Contenedor de los botones */}
                
                <div className="button-container">
                    <Button variant="outlined" sx={{ mt: 2 }}>
                        Guardar
                    </Button>
                    <Button variant="outlined" sx={{ mt: 2 }}>
                        Limpiar
                    </Button>
                </div>

            </form>
        </FormStyle>
    );
}

export default FormNV
