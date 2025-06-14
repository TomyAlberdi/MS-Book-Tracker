package com.example.bookapi.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;

@Document(collection = "diary_entries")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DiaryEntry {
    
    @Id
    private String id;
    
    private Long userId;
    
    private String bookId;
    
    private LocalDate date;
    
    private Integer score;
    private Boolean liked;
    private String review;
    
}
