package be.uantwerpen.rouvolve.controllers;

import be.uantwerpen.rouvolve.models.Position;
import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.services.dynafleet.DynafleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Thomas on 18/02/2017.
 */
@RestController
public class RouteController
{
    @Autowired
    DynafleetService dynafleetService;

    @RequestMapping("/update")
    public List<Truck> getTrucks()
    {
        List<Truck> trucks = dynafleetService.getTrucks();
        for(Truck t: trucks)
        {
            List<Position> positions = dynafleetService.getLocations(t, 1);
            t.position = positions.get(0);

            try
            {
                Thread.sleep(2000);}
                catch(Exception e)
                {

                }
        }
        return trucks;
    }
}
