package be.uantwerpen.rouvolve.controllers;

import be.uantwerpen.rouvolve.models.Position;
import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.services.dynafleet.DynafleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Thomas on 18/02/2017.
 */
@Controller
public class TrucksController extends GlobalModelController
{
    @Autowired
    DynafleetService dynafleetService;

    @RequestMapping(value = {"/trucks"})
    public String showTrucks(ModelMap model)
    {
        return "public/trucks";
    }
}
