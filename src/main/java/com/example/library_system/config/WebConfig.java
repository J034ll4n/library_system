package com.example.library_system.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        // Permite requisições do frontend na porta 3000
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")  // Endereço do frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);
        
        registry.addMapping("/images/**").allowedOrigins("http://localhost:3000");
    }

    @Override
    public void addResourceHandlers(@SuppressWarnings("null") ResourceHandlerRegistry registry) {
        // Configura o Spring para servir imagens da pasta /static/images/
        registry.addResourceHandler("/images/**")
                .addResourceLocations("classpath:/static/images/");
    }
}
