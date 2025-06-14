package com.example.bookapi.Controller;

import com.example.bookapi.Model.BookList;
import com.example.bookapi.Service.BookListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/book-lists")
@RequiredArgsConstructor
public class BookListController {
    
    private final BookListService bookListService;
    
    @GetMapping("/{userId}/{type}")
    public ResponseEntity<?> getBookList(
            @PathVariable Long userId,
            @PathVariable BookList.BookListType type
    ) {
        try {
            BookList list =  bookListService.getOrCreateList(userId, type);
            return ResponseEntity.ok(list.getBookIds());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", "User doesn't exists"));
        }

    }
    
    @PostMapping("/{userId}/{type}/add")
    public ResponseEntity<?> addBookToList(
            @PathVariable Long userId,
            @PathVariable BookList.BookListType type,
            @RequestParam String bookId
    ) {
        try {
            bookListService.addBook(userId, bookId, type);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", "User doesn't exists"));
        }

    }
    
    @DeleteMapping("/{userId}/{type}/remove")
    public ResponseEntity<?> removeBookFromList(
            @PathVariable Long userId,
            @PathVariable BookList.BookListType type,
            @RequestParam String bookId
    ) {
        try {
            bookListService.removeBook(userId, bookId, type);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", "User doesn't exists"));
        }

    }
    
}
