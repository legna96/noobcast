import styled from '@emotion/styled'

const Container = styled.div`
    width: 45%;
    padding: 2px;
    display: flex;
    align-items: center;
    overflow-x: hidden;

    .portada {
        width: 56px;
        height: 56px;
        z-index: var(--z-modal);
    }
    
    .descripcion {
        width: calc(100% - 56px);
        padding: 5px;
        white-space:nowrap;
        text-overflow: ellipsis;
    }

    .titulo {
        font-weight: 900;
        color: var(--color-principal);
        transition: transform 5s ease-in-out;
        
        &:hover {
            transform: translate(-200px);
        }
    }
    
    .artista {
        font-weight: 400;
        color: var(--color-principal-claro);
        transition: transform 5s ease-in-out;
        
        &:hover {
            transform: translate(-100px);
        }
    }
`

const Album = () => {
    return (
        <Container>
            <img className="portada" src="https://punkeando.com.mx/wp-content/uploads/2020/01/tim-2.jpg" />
            <div className="descripcion">
                <p className="titulo">I wanna Riot lore4I wanna Riot lore4I wanna Riot lore4</p>
                <p className="artista">Rancid</p>
            </div>
        </Container>
   
    )
}

export default Album;