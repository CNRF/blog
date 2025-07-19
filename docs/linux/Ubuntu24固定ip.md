---
title: 'Ubuntu24固定ip'
tags: [ '' ]
categories: [ '' ]
---

1. ip link show # 查看网卡信息
2. cd /etc/netplan
3. sudo vi 50-cloud-init.yaml # 编辑配置文件

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    ens33:
      dhcp4: false  # 禁用dhcp4
      dhcp6: false  # 禁用dhcp6
      addresses:
        - 192.168.232.4/24 # 设置的静态IP地址
      routes:
        - to: default
          via: 192.168.232.2 # vmware的网关地址
      nameservers:
        addresses:
          - 192.168.232.2  # vmware的DNS地址
        search: [ ]
```

4. sudo netplan apply