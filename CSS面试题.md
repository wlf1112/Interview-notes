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

#### 如何实现圣杯布局和双飞翼布局

#### 手写clearfix

```
.clearfix:after{
  content:'';
  display:table;
  clear:both;
}

```

### flex画色子

常用语法：
- flex-direction
- justify-content
- align-items
- flex-wrap
- align-self

#### flex实现一个三点的色子

## 定位

### absolute和relative分别依据什么定位？

- relative依据自身定位
- absolute依据最近一层的定位元素定位
  
定位元素：
 - absolute reletive fixed
 - body

### 居中对齐有哪些实现方式？

- 水平居中
  - inline元素：text-align:center
  - block元素：margin:auto
  - absolute:left:50% + margin-left 负值
  
- 垂直居中
  - inline元素：line-height的值等于height
  - absolute元素：top:50% + margin-top 负值 (必须知道子元素的尺寸)
  - absolute元素：transfrom:translate(-50%,-50%)
  - absolute元素：top,left,bottom,right=0 + margin:auto

## 图文样式

### line-height的继承问题

- 写具体数值，如果 30px，则继承该值
- 写比例，如果 2/1.5，则继承该比例，实际line-height的值是 自身font-size*该比例
- 写百分比，如果200%，则继承 父元素font-size*百分比 求得的值

## 响应式

### rem是什么？

- px，绝对长度单位，最常用
- em，相对长度单位，相对于父元素，不常用
- rem，相对长度单位，相对于根元素，常用于响应式布局

### 如何实现响应式？

- media-query，根据不同的屏幕宽度设置根元素font-size
- rem，基于根元素的相对单位

#### 追加响应式vw/vh

- rem弊端
- 网页视口尺寸
  - window.screen.height        //屏幕高度
  - window.innerHeight          //网页视口高度
  - document.body.clientHeight  //body高度
- vh 网页视口高度的1/100
- vw 网页视口高度的1/100
- vmax取两者最大值；vmin取两者最小值
