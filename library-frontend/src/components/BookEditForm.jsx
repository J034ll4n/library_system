import React, { useState, useEffect } from 'react';
import api from '../api'; 


const BookEditForm = ({ bookToEdit, onEditComplete }) => {
    const [book, setBook] = useState(bookToEdit);

    useEffect(() => {
        setBook(bookToEdit); 
    }, [bookToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/api/books/${book.id}`, book); // Atualize o livro com os dados alterados
            alert('Livro atualizado com sucesso!');
            onEditComplete(); // Chama a função para finalizar a edição
        } catch (error) {
            console.error('Erro ao editar livro:', error);
            alert('Erro ao editar livro');
        }
    };

    return (
        <div>
            <h2>Editar Livro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={book.title || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Autor:</label>
                    <input
                        type="text"
                        name="author"
                        value={book.author || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gênero:</label>
                    <input
                        type="text"
                        name="genre"
                        value={book.genre || ''}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Salvar alterações</button>
            </form>
        </div>
    );
};

export default BookEditForm;
