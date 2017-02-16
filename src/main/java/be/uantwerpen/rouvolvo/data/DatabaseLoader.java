package be.uantwerpen.rouvolvo.data;

import be.uantwerpen.rouvolvo.models.security.Permission;
import be.uantwerpen.rouvolvo.models.security.Role;
import be.uantwerpen.rouvolvo.models.security.User;
import be.uantwerpen.rouvolvo.repositories.security.PermissionRepository;
import be.uantwerpen.rouvolvo.repositories.security.RoleRepository;
import be.uantwerpen.rouvolvo.repositories.security.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by Thomas on 17/02/2017.
 */
@Service
@Profile("default")
public class DatabaseLoader
{
    private final PermissionRepository permissionRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Autowired
    public DatabaseLoader(PermissionRepository permissionRepos, RoleRepository roleRepos, UserRepository userRepos)
    {
        this.permissionRepository = permissionRepos;
        this.roleRepository = roleRepos;
        this.userRepository = userRepos;
    }

    @PostConstruct
    private void initDatabase()
    {
        //Check if tables are initialised or empty
        if(permissionRepository.findAll().iterator().hasNext())
        {
            //Tables are initialised, no need to refill database
            return;
        }

        //Initialise user database
        initUserDatabase();
    }

    private void initUserDatabase()
    {
        List<Permission> allPermissions = new ArrayList<Permission>();
        List<Role> roles;

        //Default permissions
        allPermissions.add(new Permission("logon"));

        //Save permission to database
        Iterator<Permission> it = allPermissions.iterator();
        while(it.hasNext())
        {
            permissionRepository.save(it.next());
        }

        //Default roles
        Role administrator = new Role("Administrator");

        //Set administrator
        administrator.setPermissions(allPermissions);

        //Save roles to database
        roleRepository.save(administrator);

        //Default users
        User adminUser = new User("Admin", "", "admin", "admin");

        //Set adminUser
        roles = new ArrayList<Role>();
        roles.add(administrator);
        adminUser.setRoles(roles);

        //Test users
        User user1 = new User("Thomas", "Huybrechts", "thomas.huybrechts", "test");
        User user2 = new User("Arthur", "Janssens", "arthur.janssens", "test");

        //Set test users
        user1.setRoles(roles);
        user2.setRoles(roles);

        //Save users to database
        userRepository.save(adminUser);
        userRepository.save(user1);
        userRepository.save(user2);
    }
}
