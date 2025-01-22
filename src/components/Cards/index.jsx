import styled from "styled-components"
import Button from '@mui/material/Button'
import BorderColorIcon from "@mui/icons-material/BorderColor"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
//import { useVideosContext } from "../Context/ContextVideos"

const ContainerCard = styled.div`
    width:370px;
    margin-top:2rem;
    margin-bottom:3rem;
    display:flex;
    flex-direction: column;
    border-radius:20px;
    border: 4px solid ${(props) => props.colorBorde }; 
    padding:0 0 1em 0;
    height: 300px;
    overflow:hidden;
    background-color:#333;
`

const StylesVid = styled.iframe`
    border: 15px 15px 0 0;
    overflow:hidden;
    width: 100%;
    height: 100%;
`

const Pie = styled.footer`
    display:flex;
    gap:10%;
    justify-content:center;

    Button {
        color:#fff;
        gap:10px;
    }
`

function Cards({ id, titulo, imagen, video, categoria, descripcion, colorBorde }) {
    return (
        <ContainerCard colorBorde={colorBorde}>
            <StylesVid
                width="370"
                height="315"
                src={video}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            >
            </StylesVid>

            <Pie>
                <Button variant="text"
                    startIcon={<DeleteForeverIcon />} sx={{ alt: "Boton Borrar" }}>
                    Borrar
                </Button>
                <Button variant="text"
                    startIcon={<BorderColorIcon />} sx={{ alt: "Boton Editar" }}>
                    Editar
                </Button>
            </Pie>
        </ContainerCard>
    )
}

export default Cards;
