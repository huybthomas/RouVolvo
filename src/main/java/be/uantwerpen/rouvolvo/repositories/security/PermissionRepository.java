package be.uantwerpen.rouvolvo.repositories.security;

import be.uantwerpen.rouvolvo.models.security.Permission;
import be.uantwerpen.rouvolvo.models.security.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by Thomas on 17/02/2017.
 */
@Repository
public interface PermissionRepository extends CrudRepository<Permission, Long>
{
    @Query(value="select p from User u left join u.roles r left join r.permissions p where u=:usr")
    Iterable<Permission> findAllForUser(@Param("usr") User user);

    Iterable<Permission> findByName(String permission);
}
