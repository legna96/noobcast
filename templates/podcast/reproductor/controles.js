import styled from '@emotion/styled'
import { useState } from 'react';
import Button from './boton';

const Container = styled.div`
    padding: 2px 5px;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Player = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const Barra = styled.input`
    width: 90%;
    margin: 5px auto;
    height: 3px;
    -webkit-appearance: none;
    background-color: var(--color-primario);

    &:focus {
        border: none;
        outline: none;
    }

    &::-webkit-slider-thumb {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: var(--color-terciario);
      }

`

const Timer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
`

const Controles = () => {

    let [ reproduccion, setReproduccion] = useState(false)

    const retrasar = (e) => {
        alert('retrasar')
    }
    
    const play = (e) => {
        alert('play')
        setReproduccion(true);
    }
    
    const pause = (e) => {
        alert('pause')
        setReproduccion(false);
    }
    
    const avanzar = (e) => {
        alert('avanzar')
    }

    return (
        <Container>                
            <Player>
                <Button icono="fas fa-undo-alt" click={(e) => retrasar(e)}/>
                {
                    reproduccion
                    ? <Button icono="fas fa-pause" click={(e) => pause(e)} />
                    : <Button icono="fas fa-play" click={(e) => play(e)}/>
                }
                <Button icono="fas fa-redo" click={(e) => avanzar(e)} />
            </Player>
            <Barra type="range" />
            <Timer>
                <p>0:00</p>
                <p>4:20</p>
            </Timer>
        </Container>
    )
}

export default Controles;