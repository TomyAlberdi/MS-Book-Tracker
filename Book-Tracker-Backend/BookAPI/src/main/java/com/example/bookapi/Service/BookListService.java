package com.example.bookapi.Service;

import com.example.bookapi.Model.BookList;
import com.example.bookapi.Repository.BookListRepository;
import com.example.bookapi.Repository.UserApiClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class BookListService {
    
    private final BookListRepository bookListRepository;
    private final UserApiClient userApiClient;
    
    public BookList getOrCreateList(Long userId, BookList.BookListType type) {
        boolean userExists = Boolean.TRUE.equals(
                userApiClient.checkUserExists(userId).getBody()
        );
        if (!userExists) {
            throw new IllegalArgumentException("User does not exist.");
        }
        
        return bookListRepository.findByUserIdAndType(userId, type)
                .orElseGet(() -> bookListRepository.save(
                        BookList.builder()
                                .userId(userId)
                                .type(type)
                                .bookIds(new ArrayList<>())
                                .build()
                ));
    }
    
    public void addBook(Long userId, String bookId, BookList.BookListType type) {
        boolean userExists = Boolean.TRUE.equals(
                userApiClient.checkUserExists(userId).getBody()
        );
        if (!userExists) {
            throw new IllegalArgumentException("User does not exist.");
        }
        
        BookList list = getOrCreateList(userId, type);
        if (!list.getBookIds().contains(bookId)) {
            list.getBookIds().add(bookId);
            bookListRepository.save(list);
        }
    }
    
    public void removeBook(Long userId, String bookId, BookList.BookListType type) {
        boolean userExists = Boolean.TRUE.equals(
                userApiClient.checkUserExists(userId).getBody()
        );
        if (!userExists) {
            throw new IllegalArgumentException("User does not exist.");
        }
        
        bookListRepository.findByUserIdAndType(userId, type).ifPresent(list -> {
            list.getBookIds().remove(bookId);
            bookListRepository.save(list);
        });
    }
    
}
