# denoland/deno does not provide images built for ARM, so ...
FROM runcitadel/deno:main
EXPOSE 8000
WORKDIR /app
ADD ./ ./
CMD ["deno", "run", "--allow-net", "main.ts"]