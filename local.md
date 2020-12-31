# react-base-part 本地调试

## 引用

### 进入 `react-base-part` 文件夹

```shell
$ cd xxxx/react-base-part
```

### 本地建立映射关系

```shell
$ yarn link
```

### 进入项目文件夹

```shell
# cd xxxx/<project-name>
```

### 链接 `react-base-part` 模块

```shell
$ yarn link react-base-part
```

### 项目中使用

```js
// 如果直接 from 'react-base-part' 会丢失ts声明 不知道为什么
import { Button } from '../node_modules/react-base-part'
```