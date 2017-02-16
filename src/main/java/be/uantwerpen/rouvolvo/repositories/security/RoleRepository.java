package be.uantwerpen.rouvolvo.repositories.security;

import be.uantwerpen.rouvolvo.models.security.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Thomas on 17/02/2017.
 */
@Repository
public interface RoleRepository extends CrudRepository<Role, Long>
{
    Iterable<Role> findByName(String role);
}
