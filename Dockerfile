# 用于GitLab CI/CD中node应用远程部署能力的docker环境。
# https://github.com/mhart/alpine-node
# https://github.com/nodejs/docker-node
FROM mhart/alpine-node:10

RUN apk add --no-cache \
    bash \
    rsync \
    openssh \
    && npm i -g pm2@3.1.3

CMD ["/bin/bash"]
