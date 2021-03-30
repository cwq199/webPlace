var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);//456

//这样做的原因如下:当设置一个对象属性时，JavaScript将隐式地将参数值字符串化。
// 在这种情况下，因为b和c都是对象，它们都将被转换为“[对象对象]”。
// 因此，a[b]和[c]都等价于[“[对象对象]”]，
//可以互换使用。因此，设置或引用a[c]与设置或引用a[b]完全相同。