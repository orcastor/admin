<p align="center">
  <a href="https://orcastor.github.io/doc/">
    <img src="https://orcastor.github.io/doc/logo.svg">
  </a>
</p>

<p align="center"><strong>OrcaS 管理后台</strong> <sup><a href="https://github.com/HalseySpicy/Geeker-Admin">Powered by Geeker-Admin</a></sup></p>

#### 首页Dashboard
- 告警、QPS、TBW/TBR、文件数、在线用户、CPU、内存、负载、进出流量、功耗
#### 用户管理
- 新建用户、删除用户、修改用户角色、重置密码、设置OTP、设备管理
#### 桶管理
- 新建桶、删除桶、修改所有者、修改配额
- 访问控制：是否游客能够访问、是否支持外网访问、禁用-读写-只读
#### 磁盘管理
- 路径、型号、序列号、容量（使用/可用）、温度、SMART信息（e.g.Mac-Percentage Used）
- 容量管理：云端回收站清理策略、多版本保留策略、不同类型数据的占用情况
- 用量和空间清理
#### 任务管理
- 任务执行、调度和日志等
#### 运维管理
- 风险操作识别（勒索病毒）
- 路径配置&迁移、换盘
- 安全密钥配置
- 网络配置：设置WIFI连接账号、密码
- 审计日志、访问日志、应用日志
- 升级管理：支持自动更新和离线更新
#### \[其他插件\]...

### 注意事项 

- `npm run build:pro`打包后的文件和webapp的放置到一起：
`ln -s $(admin)/front/dist $(webapp)/dist/prvw`