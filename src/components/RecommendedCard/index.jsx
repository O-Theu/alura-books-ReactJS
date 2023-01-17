import { Button, Caption, Container, Description, Image } from "./style"

export const RecommendedCard = ({ titulo, subtitulo, descricao, img }) => {
    return(
        <Container>
            <div>
                <h2>{titulo}</h2>
                <Caption>{subtitulo}</Caption>
                <Description>{descricao}</Description>
            </div>
            <div>
                <Image src={img}/>
                <Button>Saiba mais</Button> 
            </div>
        </Container>
    )
}