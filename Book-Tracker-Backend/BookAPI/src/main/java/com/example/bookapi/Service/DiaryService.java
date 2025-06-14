package com.example.bookapi.Service;

import com.example.bookapi.Model.DiaryEntry;
import com.example.bookapi.Repository.DiaryEntryRepository;
import com.example.bookapi.Repository.UserApiClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DiaryService {
    
    private final DiaryEntryRepository diaryEntryRepository;
    private final UserApiClient userApiClient;
    
    public DiaryEntry addOrUpdateEntry(Long userId, String bookId, Integer score, Boolean liked, String review) {
        
        boolean userExists = Boolean.TRUE.equals(
                userApiClient.checkUserExists(userId).getBody()
        );
        if (!userExists) {
            throw new IllegalArgumentException("User does not exist.");
        }
        
        DiaryEntry entry = diaryEntryRepository.findByUserIdAndBookId(userId, bookId)
                .orElse(DiaryEntry.builder().userId(userId).bookId(bookId).build());
        
        if (score != null) entry.setScore(score);
        if (liked != null) entry.setLiked(liked);
        if (review != null && !review.isBlank()) entry.setReview(review);
        
        entry.setDate(LocalDate.now());
        
        return diaryEntryRepository.save(entry);
    }
    
    public List<DiaryEntry> getUserDiary(Long userId) {
        boolean userExists = Boolean.TRUE.equals(
                userApiClient.checkUserExists(userId).getBody()
        );
        if (!userExists) {
            throw new IllegalArgumentException("User does not exist.");
        }
        
        return diaryEntryRepository.findByUserId(userId);
    }
    
}
