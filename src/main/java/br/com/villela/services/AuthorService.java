package br.com.villela.services;

import br.com.villela.domains.Author;
import br.com.villela.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {
    private AuthorRepository authorRepository;

    @Autowired(required = true)
    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Iterable<Author> index() {
        return authorRepository.findAll();
    }

    public Author findOne(Long id) {
        return authorRepository.findOne(id);
    }
}
