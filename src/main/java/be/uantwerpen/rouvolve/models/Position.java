package be.uantwerpen.rouvolve.models;

/**
 * Created by Thomas on 17/02/2017.
 */
public class Position
{
    public double latitude;
    public double longitude;
    public double altitude;
    public double heading;
    public String time;

    public Position(double latitude, double longitude, double altitude, double heading, String time)
    {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.heading = heading;
        this.time = time;
    }

    public Position()
    {

    }
}
