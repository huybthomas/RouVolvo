package be.uantwerpen.rouvolve.controllers;

import be.uantwerpen.rouvolve.models.Position;
import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.services.dynafleet.DynafleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Thomas on 04/04/2016.
 */
@Controller
public class GlobalModelController
{
    @Autowired
    private DynafleetService dynafleetService;

    @ModelAttribute("numOfTrucks")
    public int getNumberOfTrucks()
    {
        //return dynafleetService.getTrucks().size();

        return 7;
    }

    @ModelAttribute("allTrucks")
    public Iterable<Truck> getAllTrucks()
    {
        //return dynafleetService.getTrucks();

        //Mock trucks
        List<Truck> trucks = new ArrayList<Truck>();

        trucks.add(new Truck("TRUCK 01", "01", "01", new Position(51.12, 4.25432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 02", "02", "02", new Position(50.34, 4.65232, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 03", "03", "03", new Position(50.7954, 5.15432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 04", "04", "04", new Position(51.45352, 4.7435432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 05", "05", "05", new Position(50.22, 4.15432, 0, 0, "now")));
        trucks.add(new Truck("TRUCK 06", "06", "06", new Position(0,0,0,0,"now")));
        trucks.add(new Truck("TRUCK 07", "07", "07", new Position(0,0,0,0,"now")));

        return trucks;
    }
}
