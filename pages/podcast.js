import Head from "next/head";
import styled from '@emotion/styled';
import Navegacion from '../components/podcast/menu/navegacion'
import Menu from '../components/podcast/menu/menu'
import Reproductor from '../components/podcast/reproductor/reproductor'

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

    .temporada {
        width: 100%;
        padding: 20px 10px;
        h3 {
            font-weight: 900;
            text-align: center;
            font-size: calc(1em + 3vw);
        }
        
        img {
            width: 80%;
            margin: 20px auto;
        }
        
        .num-capitulos {
            font-size: calc(1em + 1vw);
            text-align: center;
            span {
                font-weight: 900;
            }
        }
        
        .descripcion {
            font-size: calc(1em + .5vw);
            text-align: center;
            line-height: 1;
            word-break: keep-all;
            word-wrap: wrap;
        }
    }
    
    .capitulos {
        width: 100%;
        background: var(--bg-principal);
    }
`

const Podcast = () => {

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
                <div className="temporada">
                    <h3>Temporada 1</h3>
                    <p className="num-capitulos">Capitulos: <span>12</span></p>
                    <img src="https://pbs.twimg.com/profile_images/1303067008297295874/9rf-DcBB_400x400.png" />
                    <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="capitulos">
                    <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </Main>
            <Reproductor />
        </Container>
    )
}

export default Podcast;