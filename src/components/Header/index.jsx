import { Container } from './style';

import { IconsList } from '../IconsList';
import { Logo } from '../Logo';
import { OptionsList } from '../OptionsList';

export const Header = () => {
    return (
        <Container>
            <Logo />
            <OptionsList />
            <IconsList />
        </Container>
    )
}