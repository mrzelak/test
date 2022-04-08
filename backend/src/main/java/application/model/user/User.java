package application.model.user;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
@Builder
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotBlank
    @Column(name = "user_name", unique = true)
    @Size(min = 3, max = 30)
    private String username;

    @NotBlank
    @Column(name= "email")
    @Size(min = 6, max = 40)
    @Email
    private  String email;

    @NotBlank
    @Column(name = "password")
    @Size(min = 8, max = 40)
    private String password;
}
