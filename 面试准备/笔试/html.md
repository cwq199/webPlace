## 笔试中HTML相关知识点

* 常用html5标签
```html

     <header></header>
    <nav></nav>
    <section></section>
    <aside></aside>
    <footer></footer>
    <article></article>
```

* h5新增表达控件
    email
    search
    url
    tel
    number
    range:范围(属性：value、max、min、step(步长))
    color:颜色
    date
    mouth
    week


* 无障碍性
    role：指定元素作用
    alt：图片加载失败后的提示文字(用来为图片提供文字性说明？)
    tableindex控制tab键控制网页时的顺序


* form 元素的enctype属性
1. `enctype属性在get请求中会被忽略，在post请求中才有效`
2. `application/x-www-form-urlencoded表示会对特殊字符进行转义`
3. `text/plain 以文本的形式进行编码，不会对特殊字符进行编码`
4. `multipart/form-data向服务器发送二进制文件的时候有用，例如提交文件！！！`


* Canvas性能优化
    1、将渲染阶段的开销转嫁到计算阶段之上。
    2、使用多个分层的 Canvas 绘制复杂场景。
    3、不要频繁设置绘图上下文的 font 属性。
    4、不在动画中使用 putImageData 方法。
    5、通过计算和判断，避免无谓的绘制操作。
    6、将固定的内容预先绘制在离屏 Canvas 上以提高性能。
    7、使用 Worker 和拆分任务的方法避免复杂算法阻塞动画运行。


* Canvas和SVG
    Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。
    * SVG 是一种使用 XML 描述 2D 图形的语言。
    SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
    在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
    * Canvas 通过 JavaScript 来绘制 2D 图形。
    Canvas 是逐像素进行渲染的。
    在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。


* 常见的inline内联元素：
    span、img、a、lable、input、abbr（缩写）、em（强调）、big、cite（引用）、i（斜体）、q（短引用）、textarea、select、small、sub、sup，strong、u（下划线）、button（默认display：inline-block））

* 常见的block块级元素：
    div、p、h1…h6、ol、ul、dl、table、address、blockquote、form

* 常见的inline-block内联块元素：
    img、input