import styled from '@emotion/styled';
import ImgTemporada from './img-temporada'

const Temporada = styled.div`
    display: flex;    
    width: 100%;
    cursor: pointer;
    margin-top: 10px;
`

const NavTemporada = () => {
    return (
        <Temporada>
           <ImgTemporada
                margin="auto"
                src="https://yt3.ggpht.com/a/AATXAJz8M0acNFxbxC2elTcxnseBqaUzGDApoeQa5tRsmw=s900-c-k-c0xffffffff-no-rj-mo"    
            />
        </Temporada>
    )
}

export default NavTemporada;