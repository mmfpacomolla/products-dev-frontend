# Entorno Desarrollo
En esta sección se explica cómo poner en marcha el proyecto en tu entorno de desarrollo

## Crear y arrancar infraestructura

```bash
docker compose up -d
```
## VirtualHosts
Añade al archivo `hosts` el dominio:
```bash
<ip_maquina_anfitrión> products.dev.com
```
# Otras acciones
Arrancar o parar entorno
```bash
docker compose start/stop
```

Limpiar entorno (elimina contendores, volúmene, redes e imágenes)
```bash
docker compose down -v --rmi all
```