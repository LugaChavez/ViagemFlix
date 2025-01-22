import styled from 'styled-components';
import data from "../data/videos.json"
import { useEffect, useState } from "react"
import TituloStyled from '../Titulo';

const BannerContenedor = styled.div`
    height:267px;
    width:100%;
    background-color: #154580;
    background-position:center;
    background-size:cover;
    background-image:url(${(props) => props.bgImage});
    transition: background-image 1s ease-in-out;
    filter: brightness(0.5);
`

function Banner() {
    const [currentImage, setCurrentImage] = useState("");

    useEffect(() => {
        if(data && data.categorias && data.categorias.length > 0) {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = data.categorias.findIndex((categoria) => categoria.imagen === prevImage);
                const nextIndex = (currentIndex + 1) % data.categorias.length;
                return data.categorias[nextIndex].imagen;
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }
    },[]);

    if(!currentImage){
     return <TituloStyled as="h1"> Cargando...</TituloStyled>;
    }

    return <BannerContenedor bgImage={currentImage}>
    </BannerContenedor>;
}

export default Banner
