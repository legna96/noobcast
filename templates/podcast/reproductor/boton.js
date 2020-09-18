import styled from '@emotion/styled';

const Button = styled.button`
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background: var(--bg-principal-medio);
    color: var(--color-principal);
    font-weight: bold;
    font-size: 10px;
    box-shadow: 2px 1px var(--bg-principal), -2px -1px var(--bg-principal-claro);

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: inset 2px 1px var(--bg-principal-claro), inset -2px -2px var(--bg-principal);
    }
`
const Boton = ({icono, click}) => {
    return (
        <Button onClick={(e) => click(e)}>
            <i className={icono}></i>
        </Button>
    )
}

export default Boton