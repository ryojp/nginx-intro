# Reverse Proxy using NGINX
Static hosting is pretty simple with NGINX.
Run `docker compose up --build` and run `curl http://localhost:8080/hello` or `curl http://localhost:8080/bye`

The above command starts the docker environment with three services (containers), `nginx`, `hello`, and `bye`.  
Both `hello` and `bye` are simple API servers running on port `8000` of their container.  
The `nginx` service is configured to pass requests that come with specific path (such as `/hello`) to appropriate backends (`hello` and `bye` services).  
Service names are resolved to IP addresses in the docker network automatically generated with docker compose.

In the NGINX config, we set three headers.  
The `proxy_set_header` directive is used to set the `Host` header to the original request's `Host` header (because we usually do not want the reverse proxy to overwrite the `Host` header), and to set the `X-Real-IP` and `X-Forwarded-For` headers to the IP address of the client making the request.

## How to view logs?
After starting the container, run `docker compose logs nginx` (add `-f` option for `tail -f`-like behavior)
