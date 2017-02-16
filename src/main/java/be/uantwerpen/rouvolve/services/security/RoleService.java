package be.uantwerpen.rouvolve.services.security;

import be.uantwerpen.rouvolve.models.security.Role;
import be.uantwerpen.rouvolve.repositories.security.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Thomas on 17/02/2017.
 */
@Service
public class RoleService
{
    @Autowired
    private RoleRepository roleRepository;

    public Iterable<Role> findAll()
    {
        return this.roleRepository.findAll();
    }
}
