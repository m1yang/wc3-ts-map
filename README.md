# wc3-ts-template

一个易于使用的模板，可让您可以为魔兽争霸 III 1.27 用 TypeScript 进行进行地图制作。

## 特性

- TypeScript API 和大多数魔兽争霸 III 1.27 中 handle 的包装 (详情查看 [w3ts](https://github.com/cipherxof/w3ts))
- 在世界编辑器中处理您的地图，同时使用 TypeScript 进行编程。
- 在编译时评估节点脚本并支持 npm 依赖项 (详情查看 [war3-transformer](https://github.com/cipherxof/war3-transformer))
- 从项目的地图文件夹中构建 w3x 文件。
- 自动生成由编辑器生成的全局变量的定义，例如区域、镜头或预设单位。

## 设置

---

### 前置需求

- 新版 node.js 和新版 npm
- 安装 VSCode

### 工程配置

- 请确保 maps 文件夹中放入已经设置为 lua 脚本并以文件夹形式保存的地图
- 配置 config.json 文件
  - mapFolder：maps 文件夹中哪个地图文件
  - minifyScript：是否简化脚本
  - gameExecutable：魔兽争霸 III 1.27 游戏本体路径
  - outputFolder：地图生成路径
  - launchArgs： 魔兽争霸启动参数

### 编译

事实上我只需要在测试或编译地图的时候检查地图文件是否修改
判断地图文件 hash 值，不一样将地图文件重新解压

WE 编辑地图
打包地图
解包地图
运行地图

产线和测试两个版本
build：
tstl-lua 文件夹，开启 sourceMap
w3x2lni-obj
publish：
tstl-单个 lua 文件，关闭 sourceMap，
w3x2lni-slk，混淆

编辑地图脚本

```shell
w3x2lni\\w2l.exe config slk.confused=true >nul
w3x2lni\\w2l.exe slk input output

w2l obj 指令如果指定output不是文件(.w3x)，则生成地图正常解析的文件夹

ydweconfig.exe -launchwar3 -loadfile "d:\moehero\moehero.w3x" -debugger 4278

cmd = exec.Command(app.Path.WE+"/WE.exe", "-loadfile", w3xFire)

bin\ydweconfig.exe  -datadir "%mapPath%\War3MPQ" -launchwar3 -loadfile "%mapPath%\map.w3x"

taskkill /F /IM War3.exe > nul
```

lua 混淆工具
https://github.com/prometheus-lua/Prometheus
https://github.com/zeusssz/hercules-obfuscator
https://www.npmjs.com/package/lua-format

lua 加密
https://www.rjek.com/arcfour.lua.txt

.w3x文件是什么作用
因为WE只能打开地图文件，为了让YDWE能直接打开 lni 后的地图，我们设置了一个dummy地图文件，当YDWE发现打开的是这个dummy地图文件时，便会引导YDWE走打开 lni 地图的流程