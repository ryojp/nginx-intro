# Reverse Proxy using NGINX
Static hosting is pretty simple with NGINX.
Run `docker compose up --build` and run `curl http://localhost:8080/` multiple times to get different greetings

The above command starts the docker environment with three services (containers), `nginx`, `hello`, and `bye`.  
Both `hello` and `bye` are simple API servers running on port `8000` of their container.  
The `nginx` service is configured to pass requests to the upstream `greetings` defined in `default.conf`.  
This upstream is made up with two backend servers: `hello:8000` and `bye:8000`.

## How to view logs?
After starting the container, run `docker compose logs nginx` (add `-f` option for `tail -f`-like behavior)
