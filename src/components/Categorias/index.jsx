import styled from 'styled-components'
import videosData from "../data/videos.json"
import { useState, useEffect } from 'react'

const LabelStyled = styled.label`
    font-family: 'Roboto', sans-serif;
    display:block;
    color:#fff;
    font-size:18px;
`
const SelectStyled = styled.select`
    width:100%;
    border:none;
    font-size:16px;
    padding:0.5rem 0;
    box-sizing: border-box;
    border-radius:4px;
`
const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Usamos videosData para acceder a la propiedad 'categorias'
        const categoriasUnicas = [...new Set(videosData.categorias.map(item => item.categoria))];
        setCategorias(categoriasUnicas);
    }, []);

    return (
        <div className="Categorias">
            <LabelStyled>Categoria</LabelStyled>
            <SelectStyled>
                <option value="">Seleccione una categoria</option>
                {categorias.map(categoria => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </SelectStyled>
        </div>
    );
}

export default Categorias;
