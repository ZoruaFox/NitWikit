---
slug: /Plugins/OtherPlugin/Via
title: 跨版本
sidebar_position: 4
---

# 什么是跨版本

跨版本就是可以让不同于服务器版本的客户端版本进入服务器，比如服务器版本为 1.20.1，安装跨版本之后可以让 1.19.4 进入服务器

:::danger

跨版本不适合模组服，代理端，Leaves！！会出很多问题！！

:::

:::danger

跨版本不宜太大，除非你有能力使低版本玩家获得更好的游戏体验(最简单的例子:1.17 以下的玩家一进入 1.17+服务器的 y 小于 0，就会疯狂回弹，严重影响游戏体验)

:::

## 支持的范围

插件版本的 via 支持以下版本进入服务器

ViaVersion+ViaBackwards:1.9-最新

ViaRewind:1.7-1.8（进入高版本服务器）

外置版本(ViaProxy)（本篇文档不会讲到）支持以下版本进入服务器

## 支持的服务器

- Release (1.0.0 - 1.20.5)
- Beta (b1.0 - b1.8.1)
- Alpha (a1.0.15 - a1.2.6)
- Classic (c0.0.15 - c0.30 包含 [CPE](https://wiki.vg/Classic_Protocol_Extension))
- 愚人节快照 (3D Shareware， 20w14infinite)
- 战斗测试快照 (Combat Test 8c)
- 基岩版服务器 1.20.70 ([某些功能缺失](https://github.com/RaphiMC/ViaBedrock#features))

## 支持的客户端版本

- Release (1.7.2 - 1.20.5)
- 基岩版 (需要[Geyser 插件](https://geysermc.org/download))
- Classic， Alpha， Beta， Release 1.0 - 1.6.4 (仅穿过)

你没看错，ViaProxy 可以让 1.20.4 客户端进入 Classic 版本的服务器(后者大概发布于十年前），也可以让一个 JAVA 版玩家进入基岩版服务器，或者基岩版玩家进入 JAVA 版服务器！！！

## 笨蛋脚本

[下载](https://github.com/lilingfengdev/NitWiki-Script/releases/download/windows-latest/via-setup.exe),为你自动配置 Via

## FAQ

### 用高版本进入低版本服务器，可用高版本的物品吗？

会用材质差不多的低版本物品替换显示，但享受不到大部分高版本物品功能

### 我装了跨版本却还是显示版本不支持

该更新你的 Via 了，Via 更新很频繁

### 低版本显示不了高版本的材质怎么办？

原版插件不支持，但是可以通过手段绕过后面会讲（仅支持 1.16+）
