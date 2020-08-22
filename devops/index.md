## 在 centos 上构建 MongoDB

### 配置命令

```bash
# 下载获取工具
yum install -y openssl wget

# 获取Mongodb的binary压缩包
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.5.tgz

# 解压下载包
tar -zxvf mongodb-linux-x86_64-4.0.5.tgz

# 移动到指定目录
mv mongodb-linux-x86_64-4.0.5 /usr/local/mongodb

# 创建db和log文件夹
cd /usr/local/mongodb && mkdir -p db && mkdir -p log

# 创建log文件
touch ./log/mongodb.log \

# 给两个文件夹加上权限
chmod +775 ./db && chmod +775 ./log \

# 设置全局入口
export PATH=$PATH:/usr/local/mongodb/bin
```

### 配置文件

```bash
# /usr/local/mongodb/mongodb.conf

port=27017 #端口  

dbpath=/usr/local/mongodb/db #数据库存文件存放目录  

logpath= /usr/local/mongodb/log/mongodb.log #日志文件存放路径  

logappend=true #追加方式写日志  

maxConns=100 #最大同时连接数  

auth=true #启用验证  

fork=true #可在后台运行

journal=true #每次写入会记录一条操作日志（通过journal可以重新构造出写入的数据）

storageEngine=wiredTiger  #存储引擎有mmapv1、wiretiger、mongorocks

bind_ip = 0.0.0.0  #允许外部访问，如设置为127.0.0.1则只能在本机访问
```

### 运行命令

```bash
mongod --config /usr/local/mongodb/mongodb.conf
```
