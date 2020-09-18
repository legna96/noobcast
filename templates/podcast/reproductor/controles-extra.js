import styled from '@emotion/styled';
import Button from './boton';

const Container = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ControlesExtra = () => {

    const volumen = (e) => {
        alert('volumen')
    }
    
    const descargar = (e) => {
        alert('descarga')
    }

    return (
        <Container>
            <Button icono="fas fa-volume-up" click={(e) => volumen(e)} />
            <Button icono="fas fa-download" click={(e) => descargar(e)} />
        </Container>
    )
}

export default ControlesExtra