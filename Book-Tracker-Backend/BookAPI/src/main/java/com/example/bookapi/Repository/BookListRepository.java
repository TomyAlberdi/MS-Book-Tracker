package com.example.bookapi.Repository;

import com.example.bookapi.Model.BookList;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface BookListRepository extends MongoRepository<BookList, String> {
    Optional<BookList> findByUserIdAndType(Long userId, BookList.BookListType type);
}
