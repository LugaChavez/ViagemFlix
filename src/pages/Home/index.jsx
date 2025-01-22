import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import styled from "styled-components";
import Cards from "../../components/Cards";
import data from "../../components/data/videos.json";

const Contenedor = styled.div`
  background-color: #666;
`;

const SeccionCategoria = styled.section`
  padding: 20px;
  border-radius: 8px;
  
  h2 {
    color: #111;
    margin: 0 50px 0 50px;
    font-size: 36px;  
    font-weight: 600;
    position: relative;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h2::before, h2::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ colorBorde }) => colorBorde};
    left: 0;
  }

  h2::before {
    top: 0;
  }

  h2::after {
    bottom: 0;
  }
`;

const ColoresCategoria = {
  CARIBE: "#68D1FF",
  PATAGONIA: "#068346",
  EUROPA: "#FFBA05",
};

const MensajeCargando = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
`;

function Home() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos
    setTimeout(() => {
      const groupedCategories = data.categorias.reduce((acc, video) => {
        if (!acc[video.categoria]) {
          acc[video.categoria] = [];
        }
        acc[video.categoria].push(video);
        return acc;
      }, {});
      setCategories(groupedCategories);
      setLoading(false); // Terminó la carga
    }, 2000); // Simula un delay de 2 segundos
  }, []);

  if (loading) {
    return (
      <MensajeCargando>
        Cargando...
      </MensajeCargando>
    );
  }

  return (
    <Contenedor>
      <Banner />
      {Object.keys(categories).map((categoria) => {
        const videos = categories[categoria];
        const colorCategoria = ColoresCategoria[categoria]; // Obtener el color de la categoría

        return (
          <SeccionCategoria key={categoria} colorBorde={colorCategoria}>
            <h2 colorBorde={colorCategoria}>
              {categoria}
            </h2>
            <CardsWrapper>
              {videos.map((video) => (
                <Cards
                  key={video.id}
                  video={video.video}
                  titulo={video.titulo}
                  imagen={video.imagen}
                  descripcion={video.descripcion}
                  categoria={categoria}
                  colorBorde={colorCategoria} 
                />
              ))}
            </CardsWrapper>
          </SeccionCategoria>
        );
      })}
    </Contenedor>
  );
}

export default Home;
