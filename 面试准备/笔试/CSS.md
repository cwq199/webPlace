##  笔试中遇到的css相关的题

* 选择器优先级
    内联样式：1000
    id选择器：100
    class:10
    元素选择器：1
    继承的：0

* 换行相关
    不换行也不省略 ： 
        word-break : keep-all;只在有-处换行
        white-space : nowrap; 
    不换行，超出用省略号代替 : 
        word-break : keep-all;
        white-space : nowrap;
        overflow : hidden;
        text-overflow : ellipsis;
    换行：
        word-break:break-all;
        word-wrap:break-word; (允许在长单词或URL地址内部换行)

* 易混属性
transform:旋转 div 元素;
translate:移动，是transform的一个方法;
transition:过渡,属性是一个简写属性，用于设置四个过渡属性：
transition-property:过渡属性
transition-duration：过渡花费时间
transition-timing-function：效果曲线（默认ease)
transition-delay：过渡延迟时间(默认0)

*  css3选择器
![css选择器](https://segmentfault.com/img/bVTd2d?w=780&h=728)

* css3新特性
https://segmentfault.com/a/1190000010780991
