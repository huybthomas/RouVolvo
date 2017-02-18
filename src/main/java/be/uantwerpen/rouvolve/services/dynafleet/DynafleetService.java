package be.uantwerpen.rouvolve.services.dynafleet;

import be.uantwerpen.rouvolve.models.Position;
import be.uantwerpen.rouvolve.models.entities.Truck;
import be.uantwerpen.rouvolve.tools.Terminal;
import org.springframework.stereotype.Service;
import org.springframework.ws.client.core.support.WebServiceGatewaySupport;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Thomas on 17/02/2017.
 */
@Service
public class DynafleetService extends WebServiceGatewaySupport
{
    protected String dynafleetAPI = "https://api2.dynafleetonline.com/ports";
    protected String dynafleetLoginAPI = dynafleetAPI + "/Login";
    protected String dynafleetVehicleAndDriverAPI = dynafleetAPI + "/VehicleAndDriverAdmin";
    protected String dynafleetMessageAPI = dynafleetAPI + "/Message";
    protected String dynafleetTrackingAPI = dynafleetAPI + "/Tracking";
    protected static String username = "ApiVolvoHack12";
    protected static String password = "ApiVolvoHack012";
    protected String loginID = "";
    protected boolean loginSuccess = false;

    public boolean dynafleetLogin()
    {
        String response = sendSOAP(getLoginSOAP(username, password, 1), dynafleetLoginAPI, "POST");

        //Parse response
        try
        {
            if(response.contains("<result><id>"))
            {
                loginID = response.trim().split("<result><id>")[1];
                loginID = loginID.split("</id></result>")[0];

                loginSuccess = true;
            }
            else
            {
                loginID = "";
                loginSuccess = false;
            }
        }
        catch(Exception e)
        {
            loginID = "";
            loginSuccess = false;

            Terminal.printTerminalError("Could not parse login message from server! " + e.getMessage());
        }

        if(loginSuccess)
            Terminal.printTerminalInfo("Successful logged into Dynafleet system. [" + loginID + "]");
        else
            Terminal.printTerminalError("Failed to login to Dynafleet system!");

        return loginSuccess;
    }

    public boolean sendMessage(String message, Truck truck)
    {
        boolean success = false;
        String response = sendSOAP(sendMessageSOAP(message, truck), this.dynafleetMessageAPI, "POST");

        //Parse response
        try
        {
            if(response.contains("<result>"))
            {
                success = true;
            }
            else
            {
                success = false;
            }
        }
        catch(Exception e)
        {
            success = false;

            Terminal.printTerminalError("Could not parse response from server! " + e.getMessage());
        }

        if(success)
            Terminal.printTerminalInfo("Successful send new message to vehicle " + truck.name);
        else
            Terminal.printTerminalError("Failed to send new message to vehicle " + truck.name);

        return success;
    }

    public boolean sendMessageWithDestination(String message, Position destination, Truck truck)
    {
        boolean success = false;

        String response = sendSOAP(sendMessageWithDestinationSOAP(message, destination, truck), this.dynafleetMessageAPI, "GET");

        //Parse response
        try
        {
            if(response.contains("<result>"))
            {
                success = true;
            }
            else
            {
                success = false;
            }
        }
        catch(Exception e)
        {
            success = false;

            Terminal.printTerminalError("Could not parse response from server! " + e.getMessage());
        }

        if(success)
            Terminal.printTerminalInfo("Successful send new instruction to vehicle " + truck.name);
        else
            Terminal.printTerminalError("Failed to send new instruction to vehicle " + truck.name);

        return success;
    }

    public List<Position> getLocations(Truck truck, long numberOfLocations)
    {
        List<Position> positions = new ArrayList<Position>();
        String response = sendSOAP(getLocationsSOAP(numberOfLocations, truck), this.dynafleetTrackingAPI, "POST");

        //Parse response
        try
        {
            InputSource source = new InputSource();
            source.setCharacterStream(new StringReader(response));

            DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            Document document = documentBuilder.parse(source);

            document.getDocumentElement().normalize();

            NodeList nodeList = document.getElementsByTagName("result").item(0).getChildNodes();

            for(int i = 0; i < nodeList.getLength(); i++)
            {
                Node node = nodeList.item(i);

                if(node.getNodeType() == Node.ELEMENT_NODE)
                {
                    Position position = new Position();

                    //Get altitude
                    position.altitude = Float.parseFloat(((Element)node).getElementsByTagName("altitude").item(0).getLastChild().getFirstChild().getNodeValue());

                    //Get heading
                    position.heading = Float.parseFloat(((Element)node).getElementsByTagName("heading").item(0).getLastChild().getFirstChild().getNodeValue());

                    //Get latitude
                    position.latitude = Float.parseFloat(((Element)node).getElementsByTagName("latitude").item(0).getLastChild().getFirstChild().getNodeValue());

                    //Get longitude
                    position.longitude = Float.parseFloat(((Element)node).getElementsByTagName("longitude").item(0).getLastChild().getFirstChild().getNodeValue());

                    //Get time
                    position.time = ((Element)node).getElementsByTagName("positionTime").item(0).getLastChild().getFirstChild().getNodeValue();

                    positions.add(position);
                }
            }
        }
        catch(Exception e)
        {
            Terminal.printTerminalError("Could not retrieve position list from server! " + e.getMessage());
        }

        return positions;
    }

    public Map<String, Position> getNewPositions()
    {
        Map<String, Position> newPositions = new HashMap<String, Position>();
        String response = sendSOAP(getNewPositionsSOAP(), this.dynafleetTrackingAPI, "GET");

        //Parse response
        try
        {
            InputSource source = new InputSource();
            source.setCharacterStream(new StringReader(response));

            DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            Document document = documentBuilder.parse(source);

            document.getDocumentElement().normalize();

            NodeList nodeList = document.getElementsByTagName("result").item(0).getChildNodes();

            for(int i = 0; i < nodeList.getLength(); i++)
            {
                Node node = nodeList.item(i);

                if(node.getNodeType() == Node.ELEMENT_NODE)
                {
                    Position position = new Position();
                    String vehicleId = "";

                    //Get latitude
                    position.latitude = Float.parseFloat(((Element)node).getElementsByTagName("latitude").item(0).getLastChild().getFirstChild().getNodeValue());

                    //Get longitude
                    position.longitude = Float.parseFloat(((Element)node).getElementsByTagName("longitude").item(0).getLastChild().getFirstChild().getNodeValue());

                    //Get time
                    position.time = ((Element)node).getElementsByTagName("positionTime").item(0).getLastChild().getFirstChild().getNodeValue();

                    //Get vehicle ID
                    vehicleId = ((Element)node).getElementsByTagName("vehicleInformationId").item(0).getLastChild().getFirstChild().getNodeValue();

                    newPositions.put(vehicleId, position);
                }
            }
        }
        catch(Exception e)
        {
            Terminal.printTerminalError("Could not retrieve new positions list from server! " + e.getMessage());
        }

        return newPositions;
    }

    public List<Truck> getTrucks()
    {
        List<Truck> trucks = new ArrayList<Truck>();
        String response = sendSOAP(getVehiclesSOAP(), this.dynafleetVehicleAndDriverAPI, "GET");

        //Parse response
        try
        {
            InputSource source = new InputSource();
            source.setCharacterStream(new StringReader(response));

            DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            Document document = documentBuilder.parse(source);

            document.getDocumentElement().normalize();

            NodeList nodeList = document.getElementsByTagName("result").item(0).getChildNodes();

            for(int i = 0; i < nodeList.getLength(); i++)
            {
                Node node = nodeList.item(i);

                if(node.getNodeType() == Node.ELEMENT_NODE)
                {
                    Truck truck = new Truck();

                    //Get name
                    truck.name = ((Element)node).getElementsByTagName("displayName").item(0).getTextContent();

                    //Get id
                    truck.id = ((Element)node).getElementsByTagName("id").item(0).getTextContent();

                    //Get vin
                    truck.vin = ((Element)node).getElementsByTagName("vin").item(0).getTextContent();

                    trucks.add(truck);
                }
            }
        }
        catch(Exception e)
        {
            Terminal.printTerminalError("Could not retrieve trucks list from server! " + e.getMessage());
        }

        return trucks;
    }

    public boolean loggedOn()
    {
        return loginSuccess;
    }

    public String getLoginID()
    {
        if(!loginSuccess)
        {
            dynafleetLogin();
        }

        return loginID;
    }

    public String getDynafleetAPI()
    {
        return this.dynafleetAPI;
    }

    public String sendSOAP(String message, String sendURL, String request)
    {
        String outputString = "";
        HttpURLConnection httpConn = null;

        try
        {
            String output = encapsulatedSOAP(message);
System.out.println(output);
            URL url = new URL(sendURL);
            URLConnection connection = url.openConnection();
            httpConn = (HttpURLConnection)connection;

            ByteArrayOutputStream oStream = new ByteArrayOutputStream();

            byte[] buffer = new byte[output.length()];
            buffer = output.getBytes();

            oStream.write(buffer);

            byte[] b = oStream.toByteArray();

            httpConn.setRequestMethod(request);
            httpConn.setDoOutput(true);
            httpConn.setDoInput(true);
            OutputStream out = httpConn.getOutputStream();

            out.write(b);
            out.close();

            //Read response
            InputStreamReader isr = new InputStreamReader(httpConn.getInputStream());
            BufferedReader in = new BufferedReader(isr);

            String responseString = "";

            while((responseString = in.readLine()) != null)
            {
                outputString = outputString + responseString;
            }

            in.close();
        }
        catch(Exception e)
        {
            System.err.println("Error sending SOAP request: " + e);
            e.printStackTrace();
        }

        return outputString;
    }

    public String getLoginSOAP(String username, String password, int gmtOffset)
    {
        String loginSOAPStart = "<typ:login><Api_LoginLoginTO_1>";
        String loginSOAPEnd = "</Api_LoginLoginTO_1></typ:login>";

        //Add gmtOffset
        String offsetString = "<gmtOffset><value>" + gmtOffset + "</value></gmtOffset>";

        //Add password
        String passwordString = "<password>" + password + "</password>";

        //Add username
        String usernameString = "<username>" + username + "</username>";

        return loginSOAPStart + offsetString + passwordString + usernameString + loginSOAPEnd;
    }

    public String getLocationsSOAP(long numberOfLocations, Truck truck)
    {
        String getStart = "<typ:getVehiclePositions><Api_TrackingGetVehiclePositionTO_1>";
        String getEnd = "</Api_TrackingGetVehiclePositionTO_1></typ:getVehiclePositions>";

        //Add number of locations
        String locationsString = "<numberOfPositions><value>" + numberOfLocations + "</value></numberOfPositions>";

        //Add id
        String idString = "<sessionId><id>" + getLoginID() + "</id></sessionId>";

        //Add vehicle id
        String vehicleString = "<vehicleId><id>" + truck.id + "</id></vehicleId>";

        return getStart + locationsString + idString + vehicleString + getEnd;
    }

    public String getNewPositionsSOAP()
    {
        String getStart = "<typ:getNewPositions><Api_SessionId_1>";
        String getEnd = "</Api_SessionId_1></typ:getNewPositions>";

        //Add id
        String idString = "<id>" + getLoginID() + "</id>";

        return getStart + idString + getEnd;
    }

    public String getVehiclesSOAP()
    {
        String getStart = "<typ:getVehiclesV2><Api_SessionId_1>";
        String getEnd = "</Api_SessionId_1></typ:getVehiclesV2>";

        //Add id
        String id = "<id>" + getLoginID() + "</id>";

        return getStart + id + getEnd;
    }

    public String sendMessageSOAP(String message, Truck truck)
    {
        String sendStart = "<typ:sendMessageToVehicle><Api_MessageSendMessageToVehicleTO_1>";
        String sendEnd = "</Api_MessageSendMessageToVehicleTO_1></typ:sendMessageToVehicle>";

        //Add id
        String idString = "<sessionId><id>" + getLoginID() + "</id></sessionId>";

        //Add message
        String messageString = "<text>" + message + "</text>";

        //Add vehicle id
        String vehicleIDString = "<vehicleId><id>" + truck.id + "</id></vehicleId>";


        return sendStart + idString + messageString + vehicleIDString + sendEnd;
    }

    public String sendMessageWithDestinationSOAP(String message, Position position, Truck truck)
    {
        String sendStart = "<typ:sendMessageWithDestinationPointToVehicle><Api_MessageSendMessageWithDestinationPointToVehicleTO_1>";
        String sendEnd = "</Api_MessageSendMessageWithDestinationPointToVehicleTO_1></typ:sendMessageWithDestinationPointToVehicle>";

        //Add point
        String pointString = "<point><latitude><value>" + position.latitude + "</value></latitude><longitude><value>" + position.longitude + "</value></longitude></point>";

        //Add id
        String idString = "<sessionId><id>" + getLoginID() + "</id></sessionId>";

        //Add message
        String messageString = "<text>" + message + "</text>";

        //Add vehicle id
        String vehicleIDString = "<vehicleId><id>" + truck.id + "</id></vehicleId>";

        return sendStart + pointString + idString + messageString + vehicleIDString + sendEnd;
    }

    public String encapsulatedSOAP(String body)
    {
        String header = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:typ=\"http://wirelesscar.com/dynafleet/api/types\"><soapenv:Header/><soapenv:Body>";
        String footer = "</soapenv:Body></soapenv:Envelope>";

        return header + body + footer;
    }
}
