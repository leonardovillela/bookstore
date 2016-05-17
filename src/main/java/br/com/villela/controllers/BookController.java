package br.com.villela.controllers;

import br.com.villela.domains.Book;
import br.com.villela.services.AuthorService;
import br.com.villela.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/books")
public class BookController {

    private BookService bookService;
    private AuthorService authorService;

    @Autowired(required = true)
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping(method = GET)
    public Iterable<Book> index() {
        return bookService.index();
    }

    @RequestMapping(method = POST)
    public void save(@RequestBody Book book) {
        book.getAuthors()
            .(author -> {
                authorService.findOne(author.getId());
            });

        bookService.save(book);
    }
}
