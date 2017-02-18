package be.uantwerpen.rouvolve.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Thomas on 18/02/2017.
 */
@Controller
public class TrucksController extends GlobalModelController
{
    @RequestMapping(value = {"/trucks"})
    public String showTrucks(ModelMap model)
    {
        return "public/trucks";
    }
}
