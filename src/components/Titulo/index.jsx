import styled from "styled-components"

const Titulo = styled.div`
    font-size:${(props) => props.fontSize || '32px'};
    color: ${(props) => props.color || '#fff'};
    text-align: ${(props) => props.$align ? props.$align : 'center'};
    margin-left: ${(props) => props.marginLeft || '0px'};
`

const TituloStyled = ({ children, fontSize, color, $align, bgColor, marginLeft }) => {
    return (
        <Titulo fontSize={fontSize} color={color} $align={$align} bgColor={bgColor} marginLeft={marginLeft}>
            {children}
        </Titulo>
    );
};
export default TituloStyled
