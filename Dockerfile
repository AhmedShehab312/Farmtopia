FROM node:14 AS builder
ADD package*.json /tmp/
WORKDIR /tmp
RUN npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app
FROM node:14-slim
COPY . /usr/src/app
COPY --from=builder /usr/src/app /usr/src/app
WORKDIR /usr/src/app
# RUN export TOOL_NODE_FLAGS="--max-old-space-size=4096"
# RUN export NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build
EXPOSE 3000
CMD [ "node", "server.js" ]
