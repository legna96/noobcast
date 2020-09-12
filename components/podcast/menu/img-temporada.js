const { default: styled } = require("@emotion/styled")

const Img = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin: ${props => props.margin ? props.margin : "initial"};
`

const ImgTemporada = ({src, margin}) => {

    return <Img src={src} margin={margin} />
    
}

export default ImgTemporada;