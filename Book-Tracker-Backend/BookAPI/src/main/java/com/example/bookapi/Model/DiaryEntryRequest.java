package com.example.bookapi.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiaryEntryRequest {
    private Integer score;   // Optional
    private Boolean liked;   // Optional
    private String review;   // Optional
}
