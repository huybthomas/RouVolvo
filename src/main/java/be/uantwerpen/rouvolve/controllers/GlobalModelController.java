package be.uantwerpen.rouvolve.controllers;

import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.services.dynafleet.DynafleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;

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
        return dynafleetService.getTrucks().size();
    }

    @ModelAttribute("allTrucks")
    public Iterable<Truck> getAllTrucks()
    {
        return dynafleetService.getTrucks();
    }
}
