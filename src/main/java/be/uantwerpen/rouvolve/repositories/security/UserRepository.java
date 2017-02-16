package be.uantwerpen.rouvolve.repositories.security;

import be.uantwerpen.rouvolve.models.security.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Thomas on 17/02/2017.
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long>
{
    List<User> findByLastName(String lastName);

    User findByUsername(String username);

    List<User> findAll();
}
