import { Container } from './app.styled';
import { Header } from './components/Header';
import { NewBooks } from './components/NewBooks';
import { Search } from './components/Search';

export const App = () => {

  return (
      <Container>
        <Header />
        <Search />
        <NewBooks />
      </Container> 
  )
}

