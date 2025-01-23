import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const ContainerPage = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`
const WrapperPage = styled.div`
flex: 1;
`

const PageBase = () => {
    return (
        <ContainerPage>
            <Header />
            <WrapperPage>
            <Outlet />
            </WrapperPage>
            <Footer />
        </ContainerPage>
    )
}

export default PageBase