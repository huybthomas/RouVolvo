package be.uantwerpen.rouvolve.models.entities;

import be.uantwerpen.rouvolve.models.Position;

/**
 * Created by Thomas on 17/02/2017.
 */
public class Truck
{
    public String name;
    public String id;
    public String vin;
    public Position position;

    public Truck(String name, String id, String vin, Position position)
    {
        this.name = name;
        this.id = id;
        this.vin = vin;
        this.position = position;
    }

    public Truck()
    {

    }
}
