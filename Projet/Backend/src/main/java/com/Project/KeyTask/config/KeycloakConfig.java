package com.Project.KeyTask.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
public class KeycloakConfig {

    @Bean
    public com.Project.KeyTask.config.KeycloakSpringBootConfigResolver keycloakConfigResolver() {
        return new com.Project.KeyTask.config.KeycloakSpringBootConfigResolver();
    }
}

