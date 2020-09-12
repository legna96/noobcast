import styled from '@emotion/styled';
import Album from './album';
import Controles from './controles';
import ControlesExtra from './controles-extra';

const Container = styled.div`
    position: fixed;
    z-index: var(--z-fixed);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    margin: 0;
    padding: 0;
    background: var(--bg-principal-medio);
    display: flex;
`

const Reproductor = () => {
    return (
        <Container>
            <Album />
            <Controles />
            <ControlesExtra />
        </Container>
    )
}

export default Reproductor;