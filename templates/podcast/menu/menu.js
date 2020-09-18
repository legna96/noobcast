import styled from '@emotion/styled';
import MenuTemporada from "./menu-temporada";
import { UrlPodcast, UrlSeries, UrlHome } from "../../../config/magicstrings"

const Container = styled.nav`
    position: fixed;
    z-index: calc(1 + var(--z-fixed));
    top: 0;
    left: -200px;
    height: calc(100vh - 70px);
    overflow-y: auto;
    padding: 10px 5px;
    background-color: var(--bg-principal);
    width: 200px;
    transition: left .5s ease-in-out;
    
    &.is-active {
        left: 0;
    }

    .close-menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        font-weight: 900;
        font-size: calc(1em + 1vh);

        span {cursor: pointer;}
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background-color: var(--color-primario);
        }
        
    }
    
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        background-color: var(--bg-principal-claro);
    }
   
    &::-webkit-scrollbar {
        width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--bg-principal-claro);
    }
`

const Titulo = styled.p`
    font-weight: 700;
    font-size: calc(1em + 2vw);
    color: var(--color-terciario);
    margin: 10px auto;
`

const Menu = ({toogleMenu}) => {

    return (
        <Container id="menu">
            <div className="close-menu">
                        <span onClick={toogleMenu}>
                            X
                        </span>
                    </div>
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Localhost"}
                        url={UrlHome}
                        toogleMenu={toogleMenu}
                    />
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Noobcast"}    
                        url={UrlPodcast}
                        toogleMenu={toogleMenu}
                        />
                    <Titulo># Series</Titulo>
                    <ul>
                        <MenuTemporada 
                            src={"https://pbs.twimg.com/profile_images/1303067008297295874/9rf-DcBB_400x400.png"}
                            label={"Temporada 1"}
                            url={UrlSeries+'/temporada-1'}
                            toogleMenu={toogleMenu}
                            />
                        <MenuTemporada 
                            src={"https://pbs.twimg.com/profile_images/1303067008297295874/9rf-DcBB_400x400.png"}
                            label={"Temporada 2"}
                            url={`${UrlSeries}/temporada-2`}
                            toogleMenu={toogleMenu}
                        />
                    </ul>
                    <Titulo># Categorias</Titulo>
                    <ul>
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Videojuegos"}
                        url={UrlPodcast} 
                    />
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Anime"}    
                        url={UrlPodcast}
                    />
                    </ul>
                    <Titulo># Capitulos</Titulo>
                    <ul>
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Todos"}    
                        url={UrlPodcast}
                    />
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Especiales"}
                        url={UrlPodcast}
                    />
                    <MenuTemporada 
                        src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} 
                        label={"Live"}
                        url={UrlPodcast}
                    />
                    </ul>
        </Container>
    )

}

export default Menu;