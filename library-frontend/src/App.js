import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookEditForm from './components/BookEditForm'; 
import BookCatalog from './components/BookCatalog';  
import api from './api';  
import './App.css';


const App = () => {
    const [editingBook, setEditingBook] = useState(null);
    const [books, setBooks] = useState([]);

    // Função para carregar a lista de livros
    const fetchBooks = async () => {
        try {
            const response = await api.get('/api/books');
            setBooks(response.data);  // Atualiza o estado de livros
        } catch (error) {
            console.error('Erro ao carregar livros:', error);
        }
    };

    useEffect(() => {
        fetchBooks();  // Carrega os livros inicialmente
    }, []);

    const handleEdit = (book) => {
        setEditingBook(book);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/api/books/${id}`); 
            alert('Livro excluído!');
            fetchBooks();  // Atualiza a lista de livros após excluir
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            alert('Erro ao excluir livro');
        }
    };

    const handleEditComplete = () => {
        setEditingBook(null);
        fetchBooks();  // Atualiza os livros após a edição
    };

    // Função chamada quando um livro é adicionado
    const handleBookAdded = (newBook) => {
        // Adiciona o novo livro ao estado, incluindo a URL da imagem
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    return (
        <div style={{ backgroundColor: '#141414' }}>
            <h1 style={{ color: 'white', textAlign: 'center', padding: '20px' }}>Gerenciamento de Livros</h1>
            
            {/* Exibindo o catálogo de livros */}
            <BookCatalog 
                title="Catálogo de Livros"
                books={books} 
            />
            
            {/* Formulário de edição ou adição de livros */}
            {editingBook ? (
                <BookEditForm
                    bookToEdit={editingBook}
                    onEditComplete={handleEditComplete}
                />
            ) : (
                <BookForm onBookAdded={handleBookAdded} /> 
            )}
            
            <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default App;
