## 布局

### 盒模型的宽度如何计算？

盒模型分为标准盒模型和IE盒模型
          
1.标准盒模型：CSS是设置的宽高是盒子内容区的宽高  box-sizing:content-box
2.IE盒模型：CSS设置的宽高是盒子的真实宽高（包含内边距、边框和内容区）  box-sizing:border-box
          
IE盒模型的优点：不论内边距和边框如何改变，盒子的真实宽高都不会改变
    
### margin纵向重叠的问题

- 相邻元素的margin-top和margin-bottom会发生重叠
- 空白块级元素也会发生重叠

### margin负值的问题

- margin-top和margin-left负值，元素向上、向左移动
- margin-right负值，右侧元素左移，自身不受影响
- margin-bottom负值，下方元素上移，自身不受影响

### BFC理解和应用

- Block format context，块级格式化上下文
- 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
  
- 形成BFC的常见条件：
  1. float不是none
  2. position是absolute或fixed
  3. overflow不是visible
  4. diaplay是flex inline-block等

- BFC常见应用
  1. 清除浮动
   
### float布局的问题，以及clearfix

#### 如何实现圣杯布局和双飞翼布局

圣杯布局和双飞翼布局的目的：
- 三栏布局，中间一栏最先加载和渲染（内容最重要）
- 两侧内容固定，中间内容随着宽度自适应
- 一般用于PC网页
  
圣杯布局和双飞翼布局的技术总结：
- 使用float布局
- 两侧使用margin负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，一个用padding，一个用margin

#### 手写clearfix

#### 如何实现圣杯布局和双飞翼布局

#### 手写clearfix

### flex画色子

#### flex实现一个三点的色子

## 定位

### absolute和relative分别依据什么定位？

### 居中对齐有哪些实现方式？

## 图文样式

### line-height的继承问题

## 响应式

### rem是什么？

### 如何实现响应式？

## CSS3

### 关于CSS3动画