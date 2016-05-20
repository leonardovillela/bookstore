package br.com.villela.controllers;

import br.com.villela.domains.Book;
import br.com.villela.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/books")
public class BookController {

  private BookService bookService;

  @Autowired(required = true)
  public BookController(BookService bookService) {
      this.bookService = bookService;
  }

  @RequestMapping(method = GET)
  public Iterable<Book> index() {
    return bookService.index();
  }

  @RequestMapping(method = POST)
  public void save(@RequestBody Book book, HttpServletResponse resp) throws IOException {
    bookService.save(book);
    resp.sendRedirect("/index.html");
  }
}
