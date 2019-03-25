# seo-service生产部署文档

## 生产机器环境搭建

### node(>v8.x)安装
> https://github.com/creationix/nvm

### pm2

`npm install pm2@v3.1.3`

### chrome

>https://askubuntu.com/questions/79280/how-to-install-chrome-browser-properly-via-command-line

## 服务启停命令

```sh
pm2 stop seo-service;  # 停止服务
pm2 start app.js --name seo-service # 启动服务
```

## 生产机器nginx配置

```nginx
upstream seoservice {
    server 127.0.0.1:3001; # 这里的端口号写你node.js运行的端口号，也就是要代理的端口号，我的项目跑在8081端口上
    keepalive 64;
}
server {
    listen 3002; #这里的端口号是你要监听的端口号
    # server_name xxx;
    server_name localhost;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_set_header Connection "";
        proxy_pass http://seoservice; # 这里要和最上面upstream后的应用名一致，可以自定义
    }
}
```

## 注意

1. 为了防止百度爬虫恶意爬取，希望实际环境流量有所限制。

2. https和域名(可以生僻一点没关系，域名很珍贵哈)最好都能支持下
