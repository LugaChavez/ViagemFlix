import styled from 'styled-components'
import Github from "./Github.png"
import Linkedin from "./Linkedin.png"

const FooterEstilizado = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 1.1em 10em;
background-color: #333333;
gap: 30px;

h2{
    font-size: 18px;
    font-weight: 400;
    color:#ffffff;
}

img {
    width:40px;
    border-radius:50%;
    object-fit: cover;
}

button{
    width:50px;
    height:50px;
    border-radius:50%;
    padding: 0;   
    background-color: #333333;
    justify-content: center;
}
`

function Footer() {

    return <FooterEstilizado>
        <h2> Desarrollado por LugaChavez</h2>
        <a href=" https://github.com/LugaChavez">
            <button>
                <img src={Github} alt="Github" />
            </button>
        </a>
        <a href=" https://www.linkedin.com/in/chavez-dl-carolina">
            <button >
                <img src={Linkedin} alt="Linkedin" />
            </button>
        </a>

    </FooterEstilizado>
}

export default Footer