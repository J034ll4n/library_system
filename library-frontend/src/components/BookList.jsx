import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
    return (
        <div className="library-book-list">
            {books.map((book) => (
                <div key={book.id} className="library-book-item">
                    {/* Exibindo a imagem do livro */}
                    <img
                     src={`http://localhost:8080${book.imageUrl}?${new Date().getTime()}`}
                        alt={book.title}
                        />


                    <div className="library-book-info">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>

                    {/* Botões para editar e excluir */}
                    <div className="library-book-actions">
                        <button onClick={() => onEdit(book)}>Editar</button>
                        <button onClick={() => onDelete(book.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
