package com.example.bookapi.Controller;

import com.example.bookapi.Model.DiaryEntry;
import com.example.bookapi.Model.DiaryEntryRequest;
import com.example.bookapi.Service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/diary")
@RequiredArgsConstructor
public class DiaryController {
    
    private final DiaryService diaryService;
    
    @PostMapping("/{userId}/{bookId}")
    public ResponseEntity<?> createOrUpdateDiaryEntry(
            @PathVariable Long userId,
            @PathVariable String bookId,
            @RequestBody DiaryEntryRequest request
    ) {
        try {
            DiaryEntry entry = diaryService.addOrUpdateEntry(
                    userId,
                    bookId,
                    request.getScore(),
                    request.getLiked(),
                    request.getReview()
            );
            return ResponseEntity.ok(entry);
        }  catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", "User doesn't exists"));
        }

    }
    
    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserDiary(@PathVariable Long userId) {
        try {
            List<DiaryEntry> entry = diaryService.getUserDiary(userId);
            return ResponseEntity.ok(entry);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", "User doesn't exists"));
        }
    }
    
}
