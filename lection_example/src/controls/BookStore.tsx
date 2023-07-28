import {nanoid} from 'nanoid'
import { useState } from 'react';
import Feedback2 from './Feedback2';

interface Book {
    id: string;
    name: string;
}

const bookstore: Book[] = [
    { id: nanoid(), name: "Р.Мартин. Чистая архитектура" },
    { id: nanoid(), name: "О.Генри. Сказки на ночь" },
    { id: nanoid(), name: "А.Пушкин. Руслан и Людмила" },
    { id: nanoid(), name: "С.Тургенев. Записки охотника" }
]

function BookStore() {
    const [books, setBooks] = useState(bookstore);
    const [searchBook, setSearchBook] = useState('');
    const [newBookTitle, setNewBookTitle] = useState('');

    //const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // или, если хотим напрямую достать value
    const handlerSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBook(value);
    }

    const resetSearch = () => {
        setSearchBook('');
    }

    const removeBook = (id: string) => {
        setBooks(prevBooks => {
            return prevBooks.filter(it => it.id !== id)
        });
    }

    const filteredBooks = bookstore.filter(
        book => book.name.toLocaleLowerCase()
        .includes(searchBook.toLocaleLowerCase()));

    const handlerAddBook = (event: React.FormEvent) => {
        event.preventDefault();
        if (!newBookTitle)
            return;
        setBooks(prevBooks => {
            const newBook = { 
                id: nanoid(), 
                name: newBookTitle 
            };
            return [...prevBooks, newBook];
        });
        setNewBookTitle('');
    }
    // Если не сделать event => event.preventDefault(), кнопка
    // будет каждый раз перерисовывать форму
    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                <label htmlFor="searchInput">Поиск книги</label>
                <input
                    id="searchInput"
                    placeholder="Введите название книги" 
                    value={searchBook}
                    onChange={handlerSearch}
                />
                <button onClick={resetSearch} type='button'>Очистить</button>
            </form>
            <ol>
                {books.map((book) => (
                    <li key={book.id}>{book.name}
                    <button onClick={() => removeBook(book.id)}>Удалить</button>
                    </li>
                    
                ))}
            </ol>
            <form onSubmit={handlerAddBook}>
                <input placeholder='Введите название книги'
                    value={newBookTitle}
                    onChange={event => setNewBookTitle(event.target.value)}
                />
                <button>Добавить</button>
            </form>
        </>
    )
}

export default BookStore;