package be.uantwerpen.rouvolve.repositories.security;

import be.uantwerpen.rouvolve.models.security.Role;
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
