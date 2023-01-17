import logo from '../../assets/img/logo.svg';
import { Container } from './style';

export const Logo = () => {
    return (
        <Container>
            <img src={logo} alt="Logo do site AluraBooks"></img>
            <p><strong>Alura</strong>Books</p>
        </Container>
    )
}
