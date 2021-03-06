# react-base-part 本地调试

## 引用

### 安装yalc

> [文档](https://github.com/wclr/yalc) [参考资料](https://www.jianshu.com/p/a9175c773208)

```shell
$ yarn global add yalc
# or
$ npm i yalc -g
```

### 进入 `react-base-part` 文件夹

```shell
$ cd xxxx/react-base-part
```

### 本地发布

```shell
$ yalc publish
```

### 进入项目文件夹

```shell
$ cd xxxx/<project-name>
```

### 链接 `react-base-part` 模块

```shell
$ yarn link react-base-part
```

### 项目中使用

```json
// yarn link 如果遇到
// Error: Invalid hook call. Hooks can only be called inside of the body of a function component
// 就在package.json中添加以下代码
// https://zju.date/package-json-resolutions/
// 必须要 yarn link
"resolutions": {
  "**/react": "^17.0.1",
  "**/react-dom": "^17.0.1"
},
```

```js
// 如果直接 from 'react-base-part' 会丢失ts声明 不知道为什么
import { Button } from '../node_modules/react-base-part'

// 后来测试好像又没问题了 可以直接
import { Button } from 'react-base-part'
```