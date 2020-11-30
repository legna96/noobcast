import Head from 'next/head'
import styled from'@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
    *, *:after, *:before {
      margin: 0;
      padding: 0;
    }
    font-size: 18px;
    min-height: 100vh;
    color: var(--color-principal);
    font-family: var(--font-logo), var(--font-logo-alt);
`

const Menu = styled.nav`
  width: 100%;
  height: 100vh;
`

const MenuVideo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -10;

  video {
    min-height: 100%;
    min-width: 100%;
    margin-left: 50vw;
    transform: translate(-50%, -30%);
  }
`

const MenuOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 1;
  opacity: .85;
  `

const MenuContenido = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;
  height: 100vh;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--color-terciario);
    text-align: center;
    margin: 10px;
  }
`

const LogoContainer = styled.div`
  width: 250px;
  height: 250px;
`

const ListaMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex; flex-direction: column;
  
  li {
    margin-top: 10px;
    text-align: center;
    
    a {
      text-decoration: none;
      i {
        font-size: 24px;
        margin-right: 5px;
        &:hover {
          color: yellow;
        }
      }
      &:hover{
        color: var(--color-primario);
      }
    }
  }
`

const Eventos = styled.div`
  padding: 10px 15px;
`

const TituloSeccion = styled.h3`
    text-align: center;
    margin: 10px;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Sunny GameCenter</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      </Head>

      <Menu>
        <MenuVideo>
          <video src="/intro.mp4" autoPlay loop></video>
        </MenuVideo>
        <MenuOverlay></MenuOverlay>
        <MenuContenido>
          <LogoContainer>
            <img src="https://e7.pngegg.com/pngimages/96/432/png-clipart-one-piece-ship-illustration-thousand-sunny-usopp-nami-goku-one-piece-sunny-food-manga.png" alt="Logo"/>
          </LogoContainer>
          <h2>Sunny GameCenter</h2>
          <ListaMenu>
            <li>
              <a href="#eventos">
                Eventos
              </a>
            </li>
            <li>
              <a href="#servicios">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto">
                Contacto
              </a>
            </li>
            <li>
              <Link href="/podcast">
                <a>
                  NoobCast
                </a>
              </Link>
            </li>
            <li>
              <a href="#" target="_blank" className="icon-list">
                <i className="fab fa-instagram insta-color"></i>
              </a>
              <a 
                href="https://www.facebook.com/SunnyGameCenter"
                target="_blank"
                className="icon-list">
                <i className="fab fa-facebook fb-color"></i>
              </a>
              <a href="#" target="_blank" className="icon-list">
                <i className="fab fa-twitch twitch-color"></i>
              </a>
              <a href="#" target="_blank" className="icon-list">
                <i className="fab fa-youtube yt-color"></i>
              </a>
              <a href="#" target="_blank" className="icon-list">
                <i className="fab fa-whatsapp wa-color"></i>
              </a>
            </li>
        </ListaMenu>
        </MenuContenido>
      </Menu>


      <main>
        <Eventos id="eventos">
          <TituloSeccion>Eventos</TituloSeccion>
          <img src="https://static.wixstatic.com/media/ae60b5_cad18a9e442249368276b9ffce941803~mv2.jpg/v1/fill/w_600,h_791,al_c,q_85,usm_0.66_1.00_0.01/LIGA%20EDIT.webp" alt=""/>
        </Eventos>
        <div id="servicios">
          <TituloSeccion>Servicios</TituloSeccion>
          <img src="https://static.wixstatic.com/media/ae60b5_56c2403aeb6e46e8a3b01d446c002d62~mv2.jpg/v1/fill/w_980,h_521,al_c,q_85,usm_0.66_1.00_0.01/ae60b5_56c2403aeb6e46e8a3b01d446c002d62~mv2.webp" alt=""/>
          <img src="https://static.wixstatic.com/media/ae60b5_e3eb6da92c4f424dbab79f5de41beebc~mv2.jpg/v1/fill/w_980,h_521,al_c,q_85,usm_0.66_1.00_0.01/ae60b5_e3eb6da92c4f424dbab79f5de41beebc~mv2.webp" alt=""/>
        </div>
        <div id="contacto">
          <TituloSeccion>Contacto</TituloSeccion>
        </div>
      </main>
      <footer>
        Fili Arl &copy; {new Date().getFullYear()}
      </footer>
    </Container>
  )
}
