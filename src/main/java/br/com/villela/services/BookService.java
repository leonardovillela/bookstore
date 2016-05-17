package br.com.villela.services;

import br.com.villela.domains.Book;
import br.com.villela.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired(required = true)
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Iterable<Book> index() {
        return bookRepository.findAll();
    }

    public void save(Book book) {
        bookRepository.save(book);
    }
}
