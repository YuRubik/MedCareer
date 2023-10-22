package com.medcareer.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(indexes = {@Index(name = "uk_email", columnList = "email", unique = true)})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, columnDefinition = "varchar(20) comment '姓名'")
    @NotBlank(message = "Name can't be null")
    String name;

//    @Min(value = 1, message = "Age should be larger than 0")
    int age;

    @Column(nullable = false, length = 50)
    @Email(message = "E-mail format error")
    String email;

//    @Past(message = "Birthday should be in the past")
    LocalDate dob;

    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return getId() != null && getId().equals(user.getId());
    }

    @Override
    public final int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }
}
