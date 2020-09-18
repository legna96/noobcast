import styled from '@emotion/styled';
import ImgTemporada from './img-temporada'
import Link from 'next/link'

const Temporada = styled.div`  
    width: 100%;
    cursor: pointer;
    margin-top: 10px auto;
`

const NavTemporada = ({src,url}) => {
    return (
        <Temporada>
            <Link href={url}>
                <a>
                    <ImgTemporada
                        margin="auto"
                        src={src}
                    />
                </a>
            </Link>
        </Temporada>
    )
}

export default NavTemporada;