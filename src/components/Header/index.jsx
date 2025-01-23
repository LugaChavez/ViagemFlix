import styled from "styled-components"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding:1.1em ;

    nav{
        display:flex;
        flex-direction:row;
    }
    
    h1{
        margin-left:8px;
        font-size:36px;
    }
`

function Header() {
    return <HeaderEstilizado>
        <h1>ViagemFlix</h1>
        <nav>
            <Link to="/">
                <Button variant="outlined" 
                    sx={{ margin: '8px', color:
                    '#2277D1', '&:hover': 
                    { borderColor: '#fff',
                    color: '#fff' } }}
                >
                    Home
                </Button>
            </Link>
            <Link to="/NuevoVideo">
                <Button variant="outlined"
                    sx={{ margin: '8px', color:
                    '#2277D1', '&:hover': 
                    { borderColor: '#fff',
                    color: '#fff' } }}
                
                >
                    Nuevo Vídeo
                </Button>
            </Link>
        </nav>
    </HeaderEstilizado>
}

export default Header