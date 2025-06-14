package com.example.bookapi.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "book_lists")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookList {
    
    @Id
    private String id;
    
    private Long userId;
    
    private List<String> bookIds;
    
    @Field("type")
    private BookListType type;
    
    public enum BookListType {
        READING,
        WANT_TO_READ
    }
    
}
