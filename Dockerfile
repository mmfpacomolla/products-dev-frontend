#Imagen base
FROM debian

LABEL org.opencontainers.image.authors="miguelmira.informatica@iespacomolla.es"

#Actualizaciones + instalación de VIM + instalación del servidor web NGINX + PHP
RUN apt update && \
    apt install -y vim && \
    apt install -y nginx

#Expongo el puerto de NGINX
EXPOSE 80

#Habilito nginx para que arranque cada vez que el contenedor se inicie
ENTRYPOINT ["/bin/bash", "-c", "nginx -g 'daemon off;'"]