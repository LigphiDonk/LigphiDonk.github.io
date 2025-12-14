---
title: 国内如何使用最先进的编程工具 Claude Code 与 Codex（Windows）
slug: claude-code-codex-windows
date: 2025-12-14
tags: [技术]
excerpt: 一份在国内 Windows 环境下安装与配置 Claude Code、Codex 的实用指南。
---
首先我推荐去`https://api.keepgo.icu/register?aff=kPIK` keepcode官方站点获得api
## Claude code

### 下面首先介绍windows的配置方法

## (一) 安装Node.js环境

### Windows安装方法

**方法一：官网下载（推荐）**

1. 打开浏览器访问 `https://nodejs.org/`
2. 点击 "LTS" 版本进行下载（版本号要大于18，推荐长期支持版本）
3. 下载完成后双击 `.msi` 文件
4. 按照安装向导完成安装，保持默认设置即可

**方法二：使用包管理器**

如果你安装了 Chocolatey 或 Scoop，可以使用命令行安装：

```
# 使用 Chocolatey
choco install nodejs
# 或使用 Scoop
scoop install nodejs
```

**Windows 注意事项**

- 建议使用 PowerShell 而不是 CMD
- 如果遇到权限问题，尝试以管理员身份运行
- 某些杀毒软件可能会误报，需要添加白名单

**验证安装是否成功**

安装完成后，打开 PowerShell 或 CMD，输入以下命令：

```
node --version
npm --version
```

如果显示版本号，说明安装成功了！

---

## (二) 安装 Claude Code

### 安装 Claude Code

打开 PowerShell 或 CMD，运行以下命令：

##### 全局安装 Claude Code

```
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
```

这个命令会从 npm 官方仓库下载并安装最新版本的 Claude Code。更新也使用这个命令

**提示**

- 建议使用 PowerShell 而不是 CMD，功能更强大
- 如果遇到权限问题，以管理员身份运行 PowerShell

**验证 Claude Code 安装**

安装完成后，输入以下命令检查是否安装成功：

```
claude --version
```

如果显示版本号，恭喜你！Claude Code 已经成功安装了。

### 更新 Claude Code

运行

```
claude update
```

---

## (三) 配置 Claude Code

### 方法一（推荐）：通过文件设置
![Pasted image 20251214161652](/images/Pasted%20image%2020251214161652.png)
编辑文件 `~/.claude/settings.json` 文件添加以下内容(如果没有settings.json文件，请自行创建，不需要时可随意删除，不影响claude使用)：

==windows下路径为: C:/Users/你的用户名/.claude==

==Linux 或 macOS 系统中通常位于: ∼/.claude==

```
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "ANTHROPIC_BASE_URL": "https://api.keepgo.icu",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "permissions": {
    "allow": [],
    "deny": []
  }
}
```

### 方法三：通过环境变量设置

为了让 Claude Code 连接到你的中转服务，需要设置两个环境变量：

**PowerShell 临时设置（当前会话）**

在 PowerShell 中运行以下命令：

```
$env:ANTHROPIC_BASE_URL = "https://api.keepgo.icu"
$env:ANTHROPIC_AUTH_TOKEN = "你的API密钥"
```

NOTE

记得将 "你的API密钥" 替换为在上方 "API Keys" 标签页中创建的实际密钥。

**PowerShell 永久设置（用户级）**

在 PowerShell 中运行以下命令设置用户级环境变量：

```
# 设置用户级环境变量（永久生效）
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://api.keepgo.icu", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "你的API密钥", [System.EnvironmentVariableTarget]::User)
```

查看已设置的环境变量：

```
# 查看用户级环境变量
[System.Environment]::GetEnvironmentVariable("ANTHROPIC_BASE_URL", [System.EnvironmentVariableTarget]::User)
[System.Environment]::GetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", [System.EnvironmentVariableTarget]::User)
```

==设置后需要重新打开 PowerShell 窗口才能生效。==

**验证环境变量设置**

设置完环境变量后，可以通过以下命令验证是否设置成功：

在 PowerShell 中验证：

```
echo $env:ANTHROPIC_BASE_URL
echo $env:ANTHROPIC_AUTH_TOKEN
```

在 CMD 中验证：

```
echo %ANTHROPIC_BASE_URL%
echo %ANTHROPIC_AUTH_TOKEN%
```

**预期输出示例：**

```
https://api.keepgo.icu
sk_xxxxxxxxxxxxxxxxxx
```

==如果输出为空或显示变量名本身，说明环境变量设置失败，请重新设置。==

---

## (四) 开始使用 Claude Code

**现在你可以开始使用 Claude Code 了！**

启动 Claude Code：

```
claude
```

在特定项目中使用：

```
# 进入你的项目目录
cd C:\path\to\your\project
# 启动 Claude Code
claude
```

---

## Windows 安装常见问题解决

**安装时提示 "permission denied" 错误**

这通常是权限问题，尝试以下解决方法：

- 以管理员身份运行 PowerShell
- 或者配置 npm 使用用户目录：`npm config set prefix %APPDATA%\npm`

**PowerShell 执行策略错误**

如果遇到执行策略限制，运行：

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**环境变量设置后不生效**

设置永久环境变量后需要：

- 重新启动 PowerShell 或 CMD
- 或者注销并重新登录 Windows
- 验证设置：`echo $env:ANTHROPIC_BASE_URL`

## Codex
# Codex Windows使用指南

### (一) 安装Node.js环境

#### Windows安装方法

**方法一：官网下载（推荐）**

1. 打开浏览器访问 `https://nodejs.org/`
2. 点击 "LTS" 版本进行下载（版本号要大于18，推荐长期支持版本）
3. 下载完成后双击 `.msi` 文件
4. 按照安装向导完成安装，保持默认设置即可

**方法二：使用包管理器**

如果你安装了 Chocolatey 或 Scoop，可以使用命令行安装：

```
# 使用 Chocolatey
choco install nodejs
# 或使用 Scoop
scoop install nodejs
```

**Windows 注意事项**

- 建议使用 PowerShell 而不是 CMD
- 如果遇到权限问题，尝试以管理员身份运行
- 某些杀毒软件可能会误报，需要添加白名单

**验证安装是否成功**

安装完成后，打开 PowerShell 或 CMD，输入以下命令：

```
node --version
npm --version
```

如果显示版本号，说明安装成功了！

---

### (二) 安装 Codex Cli

#### 安装 Codex Cli

打开 PowerShell 或 CMD，运行以下命令：

###### 全局安装 Codex


安装官方codex,原汁原味的体验

```
npm i -g @openai/codex --registry=https://registry.npmmirror.com
```

这个命令会从 npm 官方仓库下载并安装最新版本的 Codex。更新也使用这个命令

#### 验证

```
codex --version
```

**提示**

- 建议使用 PowerShell 而不是 CMD，功能更强大
- 如果遇到权限问题，以管理员身份运行 PowerShell

---

#### 配置 Codex 环境变量

首先在 keepgo 站点获取你的 codex API，如图所示（注意分组选择 codex）：

![Pasted image 20251214161435](/images/Pasted%20image%2020251214161435.png)

1. 方法一 推荐使用

### 使用编辑配置文件方式配置 Codex 环境变量

- 打开文件资源管理器，找到 `C:\Users\你的用户名\.codex` 文件夹（如果没有则创建），如图：

![Pasted image 20251214161329](/images/Pasted%20image%2020251214161329.png)

- 创建 `config.toml`，用编辑器打开，输入以下内容：

```
disable_response_storage = true
model = "gpt-5.2"
model_reasoning_effort = "high"
model_provider = "keepcode"
sandbox_mode="danger-full-access"
windows_wsl_setup_acknowledged = true
base_instructions = "Always prefer built-in tools (read_file, list_dir, grep_files) over shell commands for file operations."
[experimental]
use_freeform_apply_patch = true
use_unified_exec_tool = true

[features]
apply_patch_freeform = true
ghost_commit = true
plan_tool = true
rmcp_client = true
streamable_shell = false
unified_exec = false
view_image_tool = true
web_search_request = true
enable_experimental_windows_sandbox = true
experimental_sandbox_command_assessment = true
parallel = true

[model_providers.keepcode]
base_url = "https://api.keepgo.icu/v1"
name = "keepcode"
requires_openai_auth = true
wire_api = "responses"

[sandbox_workspace_write]
network_access = true
```

- 创建 `auth.json` 文件，在文件添加以下内容：

```
{
  "OPENAI_API_KEY": "sk_xxx"
}
```

3. 方法三

如果你使用支持 OpenAI API 的工具（如 Codex），需要设置以下环境变量：

**PowerShell 设置方法**

在 PowerShell 中运行以下命令：

```
$env:OPENAI_BASE_URL = "https://88code.org/openai/v1"
$env:OPENAI_API_KEY = "你的API密钥"
```

==使用你的 keepcode API 密钥，格式如 sk_xxxxxxxxxx, 使用与 Claude Code 相同的 API 密钥即可。==

**PowerShell 永久设置（用户级）**

在 PowerShell 中运行以下命令：

```
# 设置用户级环境变量（永久生效）
[System.Environment]::SetEnvironmentVariable("OPENAI_BASE_URL", "https://api.keepgo.icu/v1", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "你的API密钥", [System.EnvironmentVariableTarget]::User)
```

==设置后需要重新打开 PowerShell 窗口才能生效。==

**验证 Codex 环境变量**

在 PowerShell 中验证：

```
echo $env:OPENAI_BASE_URL
echo $env:OPENAI_API_KEY
```

---

### (三) 开始使用 Codex

#### 启动 Codex

配置完成后，在 PowerShell 或 CMD 中输入以下命令启动 Codex：

```
codex
```

首次启动时，Codex 会进行初始化配置。

#### 基本使用

- **交互模式**：直接输入 `codex` 进入交互式对话
- **指定项目**：在项目目录下运行 `codex`，Codex 会自动识别项目上下文
- **退出程序**：输入 `exit` 或按 `Ctrl+C` 退出

---

### (四) 常见问题解决

#### 1. 命令未找到错误

**问题**：运行 `codex` 时提示 "不是内部或外部命令"

**解决方法**：

```
# 检查 npm 全局安装路径
npm config get prefix

# 确保该路径在 PATH 中
$env:Path

# 如果不在，添加到系统环境变量
# 打开系统环境变量设置，将 npm 全局路径添加到 Path 中
# 默认路径通常是：C:\Users\你的用户名\AppData\Roaming\npm
```

#### 2. 权限问题

**问题**：安装时提示权限不足

**解决方法**：

```
# 以管理员身份运行 PowerShell
# 右键点击 PowerShell 图标，选择"以管理员身份运行"

# 然后重新安装
npm install -g @openai/codex
```

#### 3. API 连接失败

**问题**：Codex 无法连接到 API 服务

**解决方法**：

```
# 检查环境变量是否正确设置
echo $env:OPENAI_BASE_URL
echo $env:OPENAI_API_KEY

# 测试网络连接
Test-NetConnection -ComputerName 88code.org -Port 443

# 重新设置环境变量
$env:OPENAI_BASE_URL = "https://88code.org/openai/v1"
$env:OPENAI_API_KEY = "你的API密钥"
```

#### 4. 更新 Codex

**问题**：如何更新到最新版本

**解决方法**：

```
# 更新 Codex（推荐使用国内镜像）
npm i -g @openai/codex --registry=https://registry.npmmirror.com

# 或者重新安装
npm install -g @openai/codex
```

#### 5. Node.js 版本过低

**问题**：提示 Node.js 版本不兼容

**解决方法**：

```
# 检查当前版本
node --version

# 从官网下载最新的 LTS 版本（需要 18 或更高版本）
# 访问 https://nodejs.org/ 下载安装
```

#### 6. 防火墙或杀毒软件拦截

**问题**：安装或运行时被防火墙拦截

**解决方法**：

- 将 Node.js 和 npm 添加到防火墙白名单
- 临时关闭杀毒软件进行安装
- 检查企业网络策略是否允许访问 npm 仓库
