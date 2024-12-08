import React, { useState } from 'react';
import './BookCatalog.css'; // Certifique-se de que o arquivo CSS esteja importado corretamente

const BookCatalog = ({ books, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? books.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === books.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="catalog-container">
            {/* Título do catálogo */}
            <h2 className="catalog-title">{title}</h2>

            {/* Container do carrossel */}
            <div className="carousel-container">
                {/* Setas laterais */}
                <button onClick={goToPrevious} className="carousel-button carousel-button-left">
                    &#8249;
                </button>

                {/* Livro principal com imagem maior */}
                {books.length > 0 && (
                    <div className="main-book">
                        <div className="main-book-image">
                            <img
                                src={`http://localhost:8080${books[currentIndex].imageUrl}?${new Date().getTime()}`}
                                alt={books[currentIndex].title}
                            />
                        </div>
                        <h3 className="main-book-title">{books[currentIndex].title}</h3>
                        <p className="main-book-author">{books[currentIndex].author}</p>
                    </div>
                )}

                {/* Setas laterais */}
                <button onClick={goToNext} className="carousel-button carousel-button-right">
                    &#8250;
                </button>
            </div>

            {/* Livros menores com rolagem horizontal */}
            <div className="book-items-container">
                {books.map((book, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={book.id}
                            className={`book-item ${isActive ? 'active' : ''}`}
                        >
                            <img
                                src={`http://localhost:8080${book.imageUrl}?${new Date().getTime()}`}
                                alt={book.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookCatalog;
