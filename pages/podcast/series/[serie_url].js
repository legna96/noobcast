import styled from "@emotion/styled";
import PodcastTemplate from '../../../templates/podcast/podcast.template'
import * as UtilsFechas from '../../../utils/fechas';

const series = [
    {
        serie_url: "temporada-1",
        title: "Temporada 1",
        coverpage: "https://i.pinimg.com/736x/6f/9f/fe/6f9ffe12e99075ce20e3493cc18ad761.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        chapters: 10,
        created_at: "2020-09-08 20:55:19.055744"
    },
    {
        serie_url: "temporada-2",
        title: "Temporada 2",
        coverpage: "https://i.pinimg.com/originals/e5/42/85/e54285c53d47a8720f81a658760292fe.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        chapters: 12,
        created_at: "2020-09-08 20:55:38.24024"
    }
]

const TemporadaDetails = styled.div`
    width: 100%;
    padding: 20px 10px;

    h3 {
        font-weight: 900;
        text-align: center;
        font-size: calc(1em + 3vw);
    }

    img {
        width: 80%;
        display: block;
        margin: 20px auto;
    }

    .num-capitulos {
        font-size: calc(1em + 1vw);
        text-align: center;
        span {
            font-weight: 900;
        }
    }

    .fecha {
        text-align: center;
    }

    .descripcion {
        font-size: calc(1em + .5vw);
        text-align: center;
        line-height: 1;
        word-break: keep-all;
        word-wrap: wrap;
    }
`

const Capitulos = styled.div`
        width: 100%;
    `
    
const PlayList = styled.div`
    padding: 5px;
    padding-bottom: 20px;

    .capitulos-titulo {
        font-weight: 900;
        text-align: center;
        font-size: calc(1em + 3vw);
        margin-bottom: 20px;
    }
    
    .playlist-item {
        margin: 10px auto;
        padding: 2px;
        display: grid;
        width: 100%;
        height: 40px;
        grid-template-areas:
            "img titulo"
            "img duracion"
        ;
        grid-template-rows: 20px 20px;
        grid-template-columns: 40px 1fr;
        grid-gap: 5px;
        position: relative;

        &:hover {
            .overlay {
                visibility: visible;
            }
        }

        .overlay {
            cursor:pointer;
            position: absolute;
            top: 2px;
            left: 2px;
            width: 40px;
            height: 40px;
            visibility: hidden;
            background: rgba(3, 7, 6, .8);
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                color: var(--color-primario);
            }
        }
                                            
        img {
            grid-area: img;
            width: 40px;
            height: 40px;
        }
                                            
        .titulo {
            font-weight: 700;
            grid-area: titulo;
            overflow:hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
        }
                                            
        .duracion {
            grid-area: duracion;
        }

    }
`

const Temporada = ({serie}) => {

    const reproducirCapitulo = () => {
        alert("reproducir capitulo");
    }

    return (
        <PodcastTemplate>
            <TemporadaDetails>
                <h3>{serie.title}</h3>
                <p className="num-capitulos">Capitulos: <span>{serie.chapters}</span></p>
                <p className="fecha">{UtilsFechas.formatoFechaSerie(serie.created_at)}</p>
                <img src={serie.coverpage} />
                <p className="descripcion">{serie.description}</p>
            </TemporadaDetails>
            <Capitulos>
                <PlayList>
                    <h3 className="capitulos-titulo">Capítulos</h3>
                    <div className="playlist-item">
                        <div className="overlay" onClick={() => reproducirCapitulo()}>
                            <i className="fas fa-play"></i>
                        </div>
                        <img src="https://columnacero.com/img/54156/boku-no-hero-academia-manga-277-espanol.jpg" />
                        <p className="titulo">T1E1 - Boku no hero academia: Plus ultraa</p>
                        <p className="info">59 min, 2020-09-16</p>
                    </div>
                    <div className="playlist-item">
                        <div className="overlay" onClick={() => reproducirCapitulo()}>
                            <i className="fas fa-play"></i>
                        </div>
                        <img src="https://i.pinimg.com/originals/32/b8/cc/32b8cc03b506ac70b09b819c3b3e357a.jpg" />
                        <p className="titulo">T1E2 - Kof 2002: art of fighting</p>
                        <p className="info">60 min, 2020-09-16</p>
                    </div>
                    <div className="playlist-item">
                        <div className="overlay" onClick={() => reproducirCapitulo()}>
                            <i className="fas fa-play"></i>
                        </div>
                        <img src="https://www.fea-evora.com.pt/wp-content/uploads/2016/01/guitarra-acustica-tocando.jpg" />
                        <p className="titulo">T1E3 - Un noob aprendiendo guitarra</p>
                        <p className="info">50 min, 2020-09-16</p>
                    </div>
                </PlayList>
            </Capitulos>
        </PodcastTemplate>
    )

}

export async function getStaticPaths() {

    const paths = series.map((serie) => {
        return {
            params: { 
                serie_url: serie.serie_url
            },
        }
    })

    return { paths, fallback: false }
}
  
export async function getStaticProps({ params }) {

    const serie = series.filter(serie => serie.serie_url === params.serie_url)[0];
    return { props: { serie } }
}

export default Temporada;