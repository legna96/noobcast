import Podcast from '../../../templates/podcast/podcast.template'
import styled from '@emotion/styled';

const categorias = [
    {
        categoria_url: "videojuegos",
        title: "VideoJuegos",
    },
    {
        categoria_url: "anime",
        title: "Anime",
    }
]

const Container = styled.div`
    padding: 10px;
`

const Titulo = styled.h2`
    text-align: center;
    margin: 20px auto;
    font-weight: 900;
    font-size: calc(1em + 3vw);
` 

const Search = styled.input`
    width: 90%;
    border-radius 5px;
    padding: 5px;
    display: block;
    margin: 5px auto;
    text-align: center;
    color: #000;
    font-size: 16px;
`

const Grid = styled.div`
    margin: 20px auto;
    display: grid;
    grid-gap: 10px;
    grid-template-column: 1fr;
`

const Capitulo = styled.div`
    width: 240px;
    height: 240px;
    overflow: hidden;
    position: relative;

    img {
        display: block;
        width:100%;
        margin: auto;
    }
    
    &:hover {
        .overlay {
            height: 100%;
            display: flex:
            align-items: center;
            color: var(--color-terciario);

            &__play {
                display: initial;
            }
        }
    }

    .overlay {
        width: 100%;
        bottom:0;
        left:0;
        position: absolute;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgba(3, 7, 6, .8);
        z-index: var(--z-modal);
        color: var(--color-principal);
        font-weight: 900;
        text-align: center;
        line-height: 1;
        font-size: calc(1em + 1vw);

        &__play {
            display: none;
            cursor: pointer;
            margin: 20px auto;
            padding: 5px;
            width: 70px;
            border-radius: 5px;
            color: var(--color-principal);
            background: var(--bg-principal);
        }
    }

`

const Categoria = ({categoria}) => {
    console.log(categoria)
    return (
        <Podcast>
            <Container>
                <Titulo>{categoria.title}</Titulo>
                <Search type="text" placeholder="buscar capitulo"/>
                <Grid>
                    <Capitulo>
                        <img src="https://i.pinimg.com/originals/ef/18/89/ef1889cff2ab73ee2386f1dae3470c81.jpg"/>
                        <div className="overlay">
                            <p>T1E1 - Naruto No se que más poner de titulo</p>
                            <p className="overlay__play" onClick={() => alert('play')}><i className="fas fa-play"></i> Play</p>
                        </div>
                    </Capitulo>
                    <Capitulo>
                        <img src="https://images2-mega.mdstrm.com/etcetera/2020/05/18/11224_1_5ec2c55db2d06.jpg?d=500x500"/>
                        <div className="overlay">
                            <p>T1E2 - Kimetsu no Yaiba No se que más poner de titulo</p>
                            <p className="overlay__play" onClick={() => alert('play')}><i className="fas fa-play"></i> Play</p>
                        </div>
                    </Capitulo>
                    <Capitulo>
                        <img src="https://i.pinimg.com/originals/ef/18/89/ef1889cff2ab73ee2386f1dae3470c81.jpg"/>
                        <div className="overlay">
                            <p>T1E1 - Naruto No se que más poner de titulo</p>
                            <p className="overlay__play" onClick={() => alert('play')}><i className="fas fa-play"></i> Play</p>
                        </div>
                    </Capitulo>
                    <Capitulo>
                        <img src="https://images2-mega.mdstrm.com/etcetera/2020/05/18/11224_1_5ec2c55db2d06.jpg?d=500x500"/>
                        <div className="overlay">
                            <p>T1E2 - Kimetsu no Yaiba No se que más poner de titulo</p>
                            <p className="overlay__play" onClick={() => alert('play')}><i className="fas fa-play"></i> Play</p>
                        </div>
                    </Capitulo>
                    <Capitulo>
                        <img src="https://i.pinimg.com/originals/ef/18/89/ef1889cff2ab73ee2386f1dae3470c81.jpg"/>
                        <div className="overlay">
                            <p>T1E1 - Naruto No se que más poner de titulo</p>
                            <p className="overlay__play" onClick={() => alert('play')}><i className="fas fa-play"></i> Play</p>
                        </div>
                    </Capitulo>
                    <Capitulo>
                        <img src="https://images2-mega.mdstrm.com/etcetera/2020/05/18/11224_1_5ec2c55db2d06.jpg?d=500x500"/>
                        <div className="overlay">
                            <p>T1E2 - Kimetsu no Yaiba No se que más poner de titulo</p>
                            <p className="overlay__play" onClick={() => alert('play')}><i className="fas fa-play"></i> Play</p>
                        </div>
                    </Capitulo>
                </Grid>
            </Container>
        </Podcast>
    )
}

export default Categoria;

export async function getStaticPaths() {

    const paths = categorias.map((categoria) => {
        return {
            params: { 
                categoria_url: categoria.categoria_url
            },
        }
    })

    return { paths, fallback: false }
}
  
export async function getStaticProps({ params }) {

    const categoria = categorias.filter(categoria => categoria.categoria_url === params.categoria_url)[0];
    return { props: { categoria } }
}