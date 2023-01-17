import { RecommendedCard } from "../RecommendedCard";
import { Title } from "../Title";
import { livros } from "./newBooksBD";
import { Container, ContainerBooks } from "./style";

import livro from '../../assets/img/livro2.png';

export const NewBooks = () => {
    return(
        <Container>
            <Title
                Color="#EB9B00"
                FontSize="36px"
            >
                Últimos Lançamentos
            </Title>
            <ContainerBooks> 
                {livros.map(( livro => {
                    return(
                        <img src={livro.src} />
                    )
                }))}
            </ContainerBooks>
            <RecommendedCard
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma google"
                img={livro}
            />
        </Container>
    )
}
