import { useState } from "react";
import { Input } from "../Input/style";
import { Book, BookContainer, Container, SubTitulo, Titulo } from "./style";
import { books } from './livrosDB'

export const Search = () => {
    const [searchBooks, setSearchBooks] = useState([]);

    const filterBooks = (e) => {
        const textSearch = e.target.value.toLowerCase();
        if(textSearch.length == 0) {
            setSearchBooks([]);
        } else {
            const resultSearch = books.filter(book => book.nome.toLowerCase().includes(textSearch));
            setSearchBooks(resultSearch);
        }

    }

    return (
        <Container>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                type='search'
                placeholder='Escreva sua próxima leitura'
                onChange={(e) => filterBooks(e)}
            />
            <BookContainer>
                {
                    searchBooks.map(book => (
                        <Book>
                            <p key={book.id}>{book.nome}</p>
                            <img src={book.src} />
                        </Book>
                    ))
                }
            </BookContainer>
        </Container>
    )
}