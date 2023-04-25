# Static Hosting using NGINX
Static hosting is pretty simple with NGINX.
Run `docker compose up --build` and visit `http://localhost:8080`

In case you get "Welcome to nginx" notice, try reloading the page and forcing refresh so that the browser fetches the non-cached content.

Here, Docker Compose uses the bind mount feature to map `html/` directory into `/usr/share/nginx/html` inside the container.
This is useful during development as it allows hot-reload, but in production it is better to copy the finalized html directory while building using Dockerfile.

## How to view logs?
After starting the container, run `docker compose logs nginx` (add `-f` option for `tail -f`-like behavior)
