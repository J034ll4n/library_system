package com.example.library_system.controller;

import com.example.library_system.model.Book;
import com.example.library_system.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@SuppressWarnings("unused")
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Optional<Book> getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PostMapping
    public Book addBook(
        @RequestParam("title") String title,
        @RequestParam("author") String author,
        @RequestParam("genre") String genre,
        @RequestParam(value = "file", required = false) MultipartFile file) {

        // Salvar a imagem (se existir)
        String imageUrl = null;
        if (file != null) {
            String uploadDir = "src/main/resources/static/images/";
            String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
            try {
                Files.copy(file.getInputStream(), Paths.get(uploadDir + fileName), StandardCopyOption.REPLACE_EXISTING);
                imageUrl = "/images/" + fileName;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // Criar o livro com a imagem (caso tenha sido fornecida)
        Book newBook = new Book();
        newBook.setTitle(title);
        newBook.setAuthor(author);
        newBook.setGenre(genre);
        newBook.setImageUrl(imageUrl);

        return bookService.addBook(newBook);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
