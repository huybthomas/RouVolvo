package be.uantwerpen.rouvolve;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

@SpringBootApplication(exclude = {EmbeddedServletContainerAutoConfiguration.class})
public class RouVolvoApplication extends SpringBootServletInitializer
{
	public static void main(String[] args)
	{
		SpringApplication.run(RouVolvoApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder applicationBuilder)
	{
		return applicationBuilder.sources(RouVolvoApplication.class);
	}
}
