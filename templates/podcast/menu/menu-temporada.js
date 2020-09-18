import styled from '@emotion/styled';
import ImgTemporada from './img-temporada'
import Link from 'next/link'

const Temporada = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    background: var(--bg-principal-claro);
    /*  border-bottom: 1px solid #fff;*/
    margin-top: 10px;
    
    &:last-child {
        border-bottom: none;
    }
    
    span {
        cursor: pointer;
        padding: 5px;
        text-align: center;
        font-weight: bold;
    }
`


const MenuTemporada = ({src,label, url, toogleMenu}) => {
    return (
        <Temporada>
            <Link href={url}>
                <a onClick={toogleMenu}>
                    <ImgTemporada src={src}/>
                </a>
            </Link>
            <Link href={url}>
                <a onClick={toogleMenu}>
                    <span>{label}</span>
                </a>
            </Link>
        </Temporada>
    )
}

export default MenuTemporada;