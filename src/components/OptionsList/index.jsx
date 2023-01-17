import { Container } from "./style";

export const OptionsList = () => {
  const textOptions = ['Categorias', 'Favoritos', 'Minha estante'];

  return (
    <Container>
      {
        textOptions.map((option, index) => (
          <li key={index}>
            <p>{option}</p>
          </li>
        ))
      }
    </Container>
  )
}