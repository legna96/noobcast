import Head from "next/head";
import styled from '@emotion/styled';
import Navegacion from './menu/navegacion'
import Menu from './menu/menu'
import Reproductor from './reproductor/reproductor'

const Container = styled.div`
    color: var(--color-principal);
    height: calc(100vh - 70px);
    font-family: var(--font-roboto), var(--font-roboto-alt);
`

const Main = styled.main`
    position: fixed;
    z-index: var(--z-fixed);
    top: 0px;
    left: 55px;
    width: calc(100vw - 55px);
    height: calc(100vh - 70px);
    overflow: hidden;
    overflow-y: auto;
    background: var(--bg-principal-claro);

    &::-webkit-scrollbar {
        -webkit-appearance: none;
        background-color: var(--bg-principal-medio);
    }
    
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--color-primario);
    }
`

const PodcastTemplate = (props) => {

    const toogleMenu= () => {
        let navegacion = document.querySelector("#navegacion")
        let menu = document.querySelector("#menu");
        navegacion.classList.toggle("is-active")
        menu.classList.toggle("is-active")
    }

    return (
        <Container>
            <Head>
                <title>Noobcast</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
            </Head>
            <Navegacion toogleMenu={toogleMenu} />
            <Menu toogleMenu={toogleMenu} />
            <Main>
                {props.children}
            </Main>
            <Reproductor />
        </Container>
    )
}

export default PodcastTemplate;