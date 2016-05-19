package br.com.villela;

import br.com.villela.controllers.BookController;
import br.com.villela.repositories.BookRepository;
import br.com.villela.services.BookService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.http.MediaType.parseMediaType;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = BookstoreApplication.class)
@WebAppConfiguration
public class BookstoreApplicationTests {

	final String BASE_URL = "http://localhost:8080/";
	final String APPLICATION_JSON_UTF8 = "application/json;charset=UTF-8";
	private MockMvc mockMvc;

	@Autowired
	BookService bookService;

	@Before
	public void setup() {
		this.mockMvc = standaloneSetup(new BookController(bookService)).build();
	}

	@Test
	public void testControllerRespondGetRequestWithJSON() throws Exception {
		this.mockMvc.perform(get("/books"))
			.andExpect(content().contentType(APPLICATION_JSON_UTF8));
	}

	@Test
	public void testControlleRespondBooksInJsonFormat() throws Exception {
		this.mockMvc.perform(get("/books"))
			.andExpect(jsonPath("$[0].description", is(bookService.get(1L).getDescription())));
	}
}