import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
//import styled from "styled-components"

// const PageContainer = styled.div`
// display: flex;
// flex-direction:column;
// min-height:100vh;
// `
// const ContainerWraper = styled.div`
// flex:1;
// `

const PageBase = () => {
    return (
        <main>
            <Header />
                <Outlet/>
            <Footer />
        </main>
    )
}

export default PageBase