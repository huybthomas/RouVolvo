package be.uantwerpen.rouvolve.controllers;

import be.uantwerpen.rouvolve.models.Position;
import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.services.dynafleet.DynafleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by Thomas on 18/02/2017.
 */
@RestController
public class RouteController extends GlobalModelController
{
    @Autowired
    DynafleetService dynafleetService;

    @RequestMapping("/update")
    public List<Truck> getTrucks()
    {
        List<Truck> trucks = dynafleetService.getTrucks();
        Map<String, Position> positions = dynafleetService.getLastPositions();
        for(Truck t: trucks)
        {
            t.position = positions.get(t.id);
        }
        return trucks;
    }
}
