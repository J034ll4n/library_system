import React, { useState } from 'react';
import api from '../api';

const BookForm = ({ onBookAdded }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [file, setFile] = useState(null);

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('genre', genre);

        if (file) {
            formData.append('file', file); // Anexando a imagem
        }

        try {
            const response = await api.post('/api/books', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Adiciona o novo livro diretamente ao estado no App
            onBookAdded(response.data);  // Passa o livro adicionado para o App
        } catch (error) {
            console.error('Erro ao adicionar livro:', error);
        }
    };

    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Autor:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Gênero:</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Imagem:</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <button type="submit">Adicionar Livro</button>
        </form>
    );
};

export default BookForm;
