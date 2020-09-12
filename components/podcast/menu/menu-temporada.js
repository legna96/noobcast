import styled from '@emotion/styled';
import ImgTemporada from './img-temporada'

const Temporada = styled.div`
    display: flex;    
    width: 100%;
    cursor: pointer;
    background: var(--bg-principal-claro);
  /*  border-bottom: 1px solid #fff;*/
    margin-top: 10px;
    
    &:last-child {
        border-bottom: none;
    }
    
    span {
        padding: 5px;
        text-align: center;
        font-weight: bold;
    }
`


const MenuTemporada = ({src,label}) => {
    return (
        <Temporada>
            <ImgTemporada
                src={src}
            />
            <span>{label}</span>
        </Temporada>

    )
}

export default MenuTemporada;