# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build @crypto-alert/mailer`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t crypto-alert-mailer`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system crypto-alert-mailer && \
          adduser --system -G crypto-alert-mailer crypto-alert-mailer

COPY apps/mailer/dist crypto-alert-mailer/
COPY apps/mailer/package.json crypto-alert-mailer/
RUN chown -R crypto-alert-mailer:crypto-alert-mailer .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix crypto-alert-mailer --omit=dev -f install

CMD [ "node", "crypto-alert-mailer" ]
