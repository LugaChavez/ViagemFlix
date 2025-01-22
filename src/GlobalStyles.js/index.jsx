import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    :root{
        --CARIBE: #68D1FF;
        --PATAGONIA: #068346;
        --EUROPA:#FFBA05;
    }
    
    *, *::before, *::after { 
        box-sizing: border-box;
    }

    body,html{
        height: 100%;
        margin:0;
        padding:0;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
        
    }

    #root{
        display:flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main{
        flex:1;
    }
`

export default GlobalStyles