package be.uantwerpen.rouvolve.controllers;

import be.uantwerpen.rouvolve.models.Position;
import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.services.dynafleet.DynafleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
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
        //List<Truck> trucks = dynafleetService.getTrucks();
        //Map<String, Position> positions = dynafleetService.getLastPositions();
        //for(Truck t: trucks)
        {
        //    t.position = positions.get(t.id);
        }
        //return trucks;

        //Mock trucks
        List<Truck> trucks = new ArrayList<Truck>();

        trucks.add(new Truck("TRUCK 01", "01", "01", new Position(51.12, 4.25432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 02", "02", "02", new Position(50.34, 4.65232, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 03", "03", "03", new Position(50.7954, 5.15432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 04", "04", "04", new Position(51.45352, 4.7435432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 05", "05", "05", new Position(50.22, 4.15432, 0, 0, "now")));

        return trucks;
    }

    @RequestMapping(value = {"/message"})
    public void sendDirections()
    {
        String message = "NEW ROUTE:\nLibramont via Antwerp.\nGo RouVolvo!";
        String vehicleId = "2000252807";
        Truck truck = new Truck();
        Position position = new Position();
        truck.id = vehicleId;
        position.latitude = 49.912496;
        position.longitude = 5.365496;

        //dynafleetService.sendMessageWithDestination(message, position, truck);

        return;
    }
}
