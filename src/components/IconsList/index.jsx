import { Container, Icon } from "./style";

import profile from '../../assets/img/perfil.svg';
import cart from '../../assets/img/sacola.svg';

export const IconsList = () => {
    const iconsOptions = [profile, cart]

    return (
        <Container>
            {
                iconsOptions.map((icon, index) => (
                    <Icon key={index}>
                        <img src={icon} alt="icons" />
                    </Icon>
                ))
            }
        </Container>
    )
}