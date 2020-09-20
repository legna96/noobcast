import styled from '@emotion/styled';
import NavTemporada from "./nav-temporada";
import { UrlHome, UrlPodcast } from '../../../config/magicstrings';

const Nav = styled.nav`
    position: fixed;
    z-index: calc(1 + var(--z-fixed));
    top: 0;
    left: 0;
    height: calc(100vh - 70px);
    overflow-y: auto;
    padding: 10px 5px;
    background-color: var(--bg-principal);
    width: 55px;
    transition: left .5s ease-in-out;
    text-align: center;

    &.is-active {
        left: -55px;
    }

    .open-menu {
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


const Navegacion = ({toogleMenu}) => {
    return (
        <Nav id="navegacion">
                    <div className="open-menu">
                        <span onClick={toogleMenu} >
                            <i className="fas fa-bars"></i>
                        </span>
                    </div>
                    <ul>
                        <NavTemporada src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} url={UrlHome}/>
                        <NavTemporada src={"https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"} url={UrlPodcast}/>
                        <NavTemporada src={"https://pbs.twimg.com/profile_images/1303067008297295874/9rf-DcBB_400x400.png"} url={`${UrlPodcast}/series/temporada-1`}/>
                        <NavTemporada src={"https://pbs.twimg.com/profile_images/1303067008297295874/9rf-DcBB_400x400.png"} url={`${UrlPodcast}/series/temporada-2`}/>
                    </ul>
        </Nav>
    )
}

export default Navegacion;