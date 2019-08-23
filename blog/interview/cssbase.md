# HTML/CSS 知识点


## display: none;和visibility: hidden;的区别

联系：都能让元素不可视

区别：
- display: none;将元素从渲染树中删除，不占据空间并改变布局；visibility: hidden;只是将opacity设为0，仍旧占据空间只是不可见
- 修改常规流中的display: none;会引起重排(回流)；修改visibility只会引起重绘
- display: none;是非继承属性；visibility是继承属性，子孙节点只是不可见。

## 水平居中元素

1.  常规流中inline元素，父元素设置text-align: center
2.  常规流中block元素，设置width、margin-left: auto;、margin-right: auto;

## 垂直居中元素

1.  margin: auto;
```html
<style>
    .father{
        position: relative;
        width: 200px;
        height: 200px;
    }
    .son{
        position: absolute;
        height: 50px;
        width: 50px;
        background: red;
        margin: auto 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>
<div class="father">
    <div class="son"></p>
</div>
```

2.  margin负值法

```html
<style>
.father{
    width: 200px;
    height: 200px;
    position: relative;
}
.son{
    background: red;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    transform: translateY(-50%);
}
</style>
<div class="father">
    <div class="son"></div>
</div>
```

3.  使用display: flex;

```html
<style>
.father{
    position: relative;
    display: flex;
    align-items: center;
    width: 200px;
    height: 200px;
}
.son{
    height: 50px;
    width: 50px;
    background: red;
}
</style>
<div class="father">
    <div class="son"></p>
</div>
```

4.  使用display: table-cell;

```html
    <style>
        .father{
            position: relative;
            display: table-cell;
            vertical-align: middle;
            width: 200px;
            height: 200px;
        }
        .son{
            height: 50px;
            width: 50px;
            background: red;
        }
    </style>
    <div class="father">
        <div class="son"></p>
    </div>
```

## CSS权重定义

1.  !important，权重为10000
2.  内联样式，style="",权重为1000
3.  ID选择器，权重为100
4.  类、伪类和属性选择器，权重为10
5.  标签和伪元素选择器，权重为1
6.  通用选择器(*)、子选择器(>)、相邻选择器(+)、同胞选择器(~)，权重为0

```html
<style>
<!-- 权重为10001 -->
div{
    color: red !important;
}
</style>
<!-- 权重为1000 -->
<1-- 字体颜色为红色 -->
<div style="color: blue;">呵呵呵呵呵</div>

```
