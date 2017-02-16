package be.uantwerpen.rouvolvo.tools;

import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 * Created by Thomas on 17/02/2017.
 */
@Service
public class DevelopersList
{
    private static String DEVELOPERSLIST = "static/lists/DevelopersList.xml";

    public List<String> getDevelopers() throws Exception
    {
        List<String> developers = new ArrayList<String>();
        ClassLoader classLoader = getClass().getClassLoader();

        try
        {
            File developersFile = new File(classLoader.getResource(DEVELOPERSLIST).toURI());

            DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            Document document = documentBuilder.parse(developersFile);

            document.getDocumentElement().normalize();

            NodeList nodeList = document.getElementsByTagName("developers").item(0).getChildNodes();

            for(int i = 0; i < nodeList.getLength(); i++)
            {
                Node node = nodeList.item(i);

                if(node.getNodeType() == Node.ELEMENT_NODE)
                {
                    developers.add(((Element)node).getElementsByTagName("name").item(0).getTextContent());
                }
            }
        }
        catch(IOException e)
        {
            throw new Exception("Could not load developers list! " + e.getMessage());
        }

        return developers;
    }
}
