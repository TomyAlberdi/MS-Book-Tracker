package com.example.bookapi.Repository;

import com.example.bookapi.Model.DiaryEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface DiaryEntryRepository extends MongoRepository<DiaryEntry, String> {
    List<DiaryEntry> findByUserId(Long userId);
    Optional<DiaryEntry> findByUserIdAndBookId(Long userId, String bookId);
}
