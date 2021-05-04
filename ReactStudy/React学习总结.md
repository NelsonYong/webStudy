# React学习总结

### 认识React

* 类似Vue、Angular的组件化开发的前端框架
* 声明式编程
* 相比于Vue,React更加灵活
* All in js



### JSX

<u>JS的拓展性语法</u>

注意事项，在非React脚手架中使用 需要声明text\babel,需要通过babel将jsx的语法转为js的语法

```js
1.引入react 与react-dom的js文件
2.引入babel的js文件

<script type="text\babel">
    
 render(){
    return (
    <div></div>
    )
}
 </script>
```



在脚手架中，只需要import react这个js文件机可

```js
组件引入
import React, { Component } from 'react'

index.js引入
import React from 'react';
import ReactDOM from 'react-dom';
```

