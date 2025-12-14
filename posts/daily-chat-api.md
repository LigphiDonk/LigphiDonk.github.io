---
title: 日常使用接入 API 教学
slug: 日常对话使用
date: 2025-12-11
readTime: 8 分钟阅读
tags: [技术]
excerpt: 快速教学
---

## 电脑端使用方式推荐

推荐接入 cherry studio，方便日常对话和使用 AI 大模型。

### 详细指南

1. 官网下载 [Cherry Studio](https://www.cherry-ai.com/)
![Cherry Studio 官网界面](/images/pasted-20251212175036.png)
2. 安装软件：Win/Mac 下载对应的安装包进行安装
3. 进入软件点击设置
![Cherry Studio 设置入口](/images/pasted-20251212175305.png)
添加模型服务平台 keepcode
![Cherry Studio 添加 keepcode 服务](/images/pasted-20251212175412.png)
4. 接下来进入 keepcode 官网 <https://api.keepgo.icu>，在 API 令牌处点击添加令牌
![Keepcode 创建 API 令牌](/images/pasted-20251212175606.png)
设置名称选择你想用的模型的对应分组，注意分组的倍率，不同渠道有不同模型的倍率
![Keepcode 选择模型分组](/images/pasted-20251212175823.png)
注意开启无限额度，以防后期余额不足需要重新配置
5. 
![Cherry Studio 添加密钥示例](/images/pasted-20251212175946.png)
创建好后记得复制密钥，然后回到 Cherry Studio：

```
https://api.keepgo.icu
https://api.keepgo.icu/v1
https://api.keepgo.icu/v1/chat/completions
```

不同的软件可能使用不同的 base url，一般我们选择第一个。
![Base URL 设置界面](/images/pasted-20251212181004.png)

将复制好的密钥添加进去，最后要在你的分组下选择一个你想用的模型，比如我刚才选择的是 AZ 分组，我现在打算使用 gpt5.1
![Cherry Studio 选择模型分组示例](/images/pasted-20251212180338.png)
复制模型名称
![复制模型名称界面](/images/pasted-20251212180729.png)
在上方选择你对应分组的模型，就可以聊天了
![完成配置的聊天界面](/images/pasted-20251212181033.png)

