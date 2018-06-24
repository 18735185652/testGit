## JS前言

### 一、网页组成部分（3部分） 

结构层（html） 表现层（css） 行为层（JavaScript） 

### 二、浏览器内核 

##### 	浏览器的内核是分为两个部分的，一是渲染引擎，另一个是JS引擎。现在JS引擎比较独立，内核更加倾向于说渲染引擎

​	1、Trident内核：代表作品是IE，因IE捆绑在Windows中，所以占有极高的份额，又称为IE内核或MSHTML，此内核只能用于Windows平台，且不是开源的。 代表作品还有腾讯、Maxthon（遨游）、360浏览器等。但由于市场份额比较大，曾经出现脱离了W3C标准的时候，同时IE版本比较多，存在很多的兼容性问题。

   	2、Gecko内核：代表作品是Firefox，即火狐浏览器。因火狐是最多的用户，故常被称为firefox 内核它是开源的，最大优势是跨平台，在Microsoft Windows、Linux、MacOs X等主要操作系统中使用。

   Mozilla是网景公司在第一次浏览器大战败给微软之后创建的。有兴趣的同学可以了解一下浏览器大战

   	3、Webkit内核：代表作品是Safari、曾经的Chrome，是开源的项目。

   	4、Presto内核：代表作品是Opera，Presto是由Opera Software开发的浏览器排版引擎，它是世 界公认最快的渲染速度的引擎。在13年之后，Opera宣布加入谷歌阵营，弃用了 Presto

  	 5、Blink内核：由Google和Opera Software开发的浏览器排版引擎，2013年4月发布。现在Chrome内核是Blink。谷歌还开发了自己的JS引擎，V8，使JS运行速度极大地提高了

###  三、程序的概念

 	1.在javascript中，程序指为实现某一特定功能或某个目的，通过计算机语言编写的命令序列的集合。

 	2.程序语言只要包含两部分：

​	1).指令：计算机执行某种操作的命令

​	2).数据：电报010101发展到-->汇编语言【01翻译成能读懂的：针对专门的程序员】-->【能看懂的 JS/php】

### 四、javascript

​	 javascript是运行在浏览器端的一个脚本语言（ 既能编程又能直接解析自执行的语言）

### 五、JS能干什么

​      1.数据验证

​      2.实现页面的动效

​      3.对于页面中元素的操作

​      4.对用户或浏览器的行为进行响应，比如点击事件。鼠标移入移出事件，

​      5.单页面应用，比如谷歌在线的word，Excel等编译器，各大平台的云

​      6.网页游戏：（H5新标签 默认大小300*150 canvas）

​      7.服务器端的应用（node.js）

​      8.创建cookie 临时本地存储

###  六、发展历史  

##### 	JavaScript最初叫LiveScript   微软自己独立开发的脚本语言叫Jscript java是sun公司的

​      	1.95年，Netscape (网景)公司的Brendan Eich（布莱登-艾奇）,最开始叫做 livescript.因为sun公司

​       ·（java开发者所在公司）与网景合作的原因，被改名为javascript

##### 	 2.ECMAScript和JavaScript的区别

​         1.ECMAScript是javascript的 标准

​          日常生活中这两个词可以互换

​	 3.发布公司：java是sun公司推出，而JavaScript是Netscape公司设计并且实现的

​       	 4.从本质上来说：java是面向对象的编程语言，而javaScript是基于对象的，

​             它本身就提供了很多丰富的内置对象可以供设计人员使用

​      	 5.从执行的方式来讲;javascript是ECMAScript的是编译型的语言，而JavaScript就是解释型的语言

​             总之，java和javascript是两个完全不一样的语言

​       	【编译型：通常对源码进行编译，生成计算机可以执行的二进制编码，执行的是编译后的结果，如C、C++】

​       	【解释型：与编译类语言不同，无需编译，一般直接在浏览器中边解释边执行 如：js、】

#####    三.JS的特点

​       **基于（对象）和（事件驱动）的（松散型）的（解释型）的语言**

​       对象：一切皆对象

​       事件驱动：当用户的一些操作或者浏览器发生一些行为时，浏览器会有实时的响应

​       松散型：int，float，string 通过var可以声明任何数据类型的变量

​               	      var a=10；

​       **解释型：边解释边执行**

   1.外部引入方式 script src=" <ript>开始和结束标签中间不能有任何内容

   2.嵌入式  注意：嵌入式的script不能有src属性-->

   3.超链接和重定向  &lt;!&ndash;<a href="javascript:alert(1)">我是超链接</a>&ndash;&gt; a标签引入js会破坏href属性-->

​     a链接的表现形式：

​       1.普通的链接

​       2.资源下载   <a href="html.zip">资源下载（只能是压缩文件）</a>

​       3.JS引入，会自动屏蔽href属性

​       4.空链接

​    4.在事件之后调用：注意单双引号嵌套问题

​       注意事项：

​       1.上面四种不同的引入方式之间会在代码加载的时候按照书写顺序执行

​       2.通过多种方式引入多个js，最终还是在一个环境中解析的，所以相互之间是有关联的，会互相影响，共同作用。

## js输出方式

### JS输出工具可以帮助我们很好的调试错误 

   行注释  //               块注释 /* */

1.在页面中弹出一个提示框 alert(1);

2.在控制台输出内容 console.log() 注意console.log（）可以同时输出多条信息和内容 alert只能输出第一个

3.console.dir(Object)在控制台输出对象身上所有的属性和方法

4.console.clear()清除控制台所有的信息

5.document.write()将内容写入页面，可以识别标签

```js
document.write("<h2>HELLO</h2>")
```

6.prompt()在页面中弹出一个输入框

​    prompt("请输入土狗大帝")

7.confirm()在页面中弹出一个带确定和取消按钮的弹出框	 

```js
var str=confirm("确定删除吗？")

	 console.log(str)

```

## 变量

###    一.JS组成部分

   **1.基础语法：变量、数据类型、运算符、流程。函数、对象**

   **2.Bom(browser object model)浏览器对象模型**

   **3.Dom（document object model）文档对象模型**

#####    二.变量：保存数据的容器，保存在计算机的内存中

#####    三.有关变量命名的规范

​       1.变量名首字母必须以字母.下划线_或$开头，后面的部分可以跟任意的字母。数字、下划线或$

​       2.不能使用关键字（js自定义的var）或者保留字（为以后扩展用）命名

​       3.js有自己的命名习惯

​           *驼峰命名法：getElementById

​           *首字母大写法：Object

​       4.变量名区分大小写

​       5.命名一定要有意义，提高代码可读性

#####    四.变量的声明

​       1.通过关键字var num=10；

​       2.通过关键字let   [es6新增]; let a="hello"

​       3.通过关键字const [es6新增]; num3=true

#####    五.有关变量的赋值

​         1.声明的同时进行赋值 //var num="Hello"

​         2.先声明后赋值

​         3.同时声明多个变量并进行赋值，中间逗号隔开 // var num6 = 10,num7 = 11;

​         4.先同时声明多个变量，后进行赋值

#####    六. 0.声明变量后若不赋值，变量默认值为undefined

​       1.重新赋值，变量的新值会覆盖旧值

​       2.重新声明变量但不赋值，该变量不发生变化

​       3.可以在变量声明前调用，默认为undefined

​       4.不可以在变量赋值之前调用，否则报错

​       5.变量不用var修饰但是赋值了，调用时候不会报错【变量变为全局变量】

​       6.变量不用var修饰并且也没赋值，调用时会报错

#####   七、变量赋值发生的问题

1. 声明变量都如果不赋值，他的默认值是undefined
2. 重新赋值，变量的新值会覆盖旧值
3. 重新声明并且赋值，会发生覆盖之前的旧值
4. 重新声明变量不赋值，该变量不变。
5. 声明之前调用变量，默认是undefined
6. 不可以在变量赋值之前调用，否则会报错。
7. 变量不用var修饰但是赋值了，调用时不会报错【变量变成了全局变量】
8. 变量不用var修饰并且也没赋值，调用时会报错。

 console.log(window.num1);

window.num1=10;

 

### var let const他们的区别

#### 一.let

1.let不存在变量提升现象（在变量声明之前进行访问）

2.let不能重复去声明一个变量

3.let可以重新赋值

 var num18=35;

 let num="ddd"

#### 二. const 声明的是一个只读的常量

1.const必须声明的同时赋值，且必须先声明后调用

2.const声明的变量不允许再次赋值

## 数据类型

###   一. 数据类型概念？

​       在编程过程中，我们经常需要对值进行操作，而能够表示并操作值的类型称为数据类型

###   二. 1.初始数据类型   typeof一元运算符

​      1) undefined         可能的值：声明未赋值 声明后赋值为undefined

​      2) number            可能的值：整形.浮点型、二进制(0b)、八进制（0o）、十进制（0）、十六进制（0x）、科学计数法

​        科学计数法里面的最大值和最小值

​        var a=Number.MAX_VALUE;

​         var b=Number.MIN_VALUE;

​         console.log(a)

​         console.log(b)

​       3)string

​          var num="ddd"

​           var num1="\'hello\'";   //转义字符

​           console.log(num1)

​	4)boolean               true false

​        5)null                  空，表示一个占位符  object      null是所有对象的始祖

​	6)symobol

###  2.引用数据类型

​       Object

## 流程控制

###    程序中为什么需要流程？

   	一.代码执行顺序：从上到下，一条语句一条语句执行。有且只有这一种执行方式

  	 	流程：流程指的是程序代码的执行顺序。

  	 	语句（执行特定的功能）

​       			1.以分号分割；

​      			2.声明语句，比如变量的声明

​       			3.表达式语句 比如console.log（）

​      			4.控制语句  if else

   		表达式：即将赋值，或者已经赋值，最终会的到一个值

  	 		var a=5+6;  5+6是表达式，即将赋值

   			var b=a;    a是表达式

​    			b;         //b

​    二.流程控制

​       	通过规定的语句让程序代码有条件的按照一定的方式执行。

   三.三大流程控制结构

​       	1.顺序结构：

​         从上到下，一条语句一条语句执行，是JS中最基本的流程控制

​      	 2.选择结构

​       	3.循环结构

## 运算符

###   变量：保存任何类型数据的容器

####    一、算数运算符 + -  *  /  %  ++  --

​       **1**.+加号

​           \+ 如果两个数都是数值类型，进行加法运算

​               如果有一个操作数是字符串类型，进行字符串拼接

​               如果连个操作数一个是number类型，另一个若是undefined，会得到Nan，

​               如果是布尔类型，会发生隐式转换

​         	如果操作数都是number类型，进行加法运算，

​         	如果有一个是number，一个是string，则进行字符串拼接

​         	Nan（not a number）是number是数据类型的一个状态，表示是或否，不是一个确定的值，

​         	如果操作数中有string类型，会发生隐式转换，如果转换不成功，返回NaN

```js
var a = "100"`
var b = "c"
console.log(a-b) //NaN
```

​	  **2.*是正常的运算 **是指数的运算（几次方**）

​          **3.++自增、--自减**

```js
  num++、num-- // 运行之后在自增
 --num、--num  //运行之前就自增或自减
 var num4=5;
 console.log(--num4);
 console.log(num4++);
 console.log(num4);
```



####        二.比较运算符 > < >= <= == ===全等于 ！= ！==

​          1. ==和===的区别；

​              ==知识判断数值是否相等

​              ===不仅判断数值是否相等，还对数据类型进行判断，准确来讲===不允许隐式转换，性能更好

​           2.两个数字进行比较 ；正数大于负数，两个负数进行比较，绝对值大的反而小

​           3.两个string类型的数字进行比较，同上

​           4.数字和字符串进行比较：字符串会发生隐式转换，如果转换不成功，最终得到的是Nan，返回的就是false

​              

```js
 console.log(8<"a") //false
 console.log("bhabi"<"a") //false
```

​           5.数字和false true

​            

```js
console.log(0==false) //true
console.log(0===false) //false
console.log(undefined==null) //true  und声明未赋值，属于空
console.log(0==undefined) //false  0不代表未定义
console.log(0==null) //false 0不代表未定义
```

​           三.赋值运算符 = += -= *= /= %=

​              

```js
var num1=5;
var num2=2;
num2+=num1;  num2=num1+2
console.log(num2)
```

 

###        四.逻辑运算符 逻辑与&& 逻辑或|| 逻辑非!

​              经常用于boolean类型之间

​             **6个假值永远是false   undefined  0   NaN   ""   false   null**

​          剩下的都是true

​           1.逻辑与 同真为真，其余全为假  返回的是最后一个值,如果第一个值是假值，不会再判断第二个值

​           值1      值2      结果

​           true    true     true

​           true    false    false

​           false   false    false

​           false   true     false

​           console.log("aaa"&&"true")    //true

​           console.log("aaa"&&"ddd")     //ddd

​           console.log("aaa"&&(4<5))     //（4<5)

​           console.log(0&&"aaa")     //false

 

​           2.逻辑或 || 同假为假 其余全为真  如果最终结果是true，返回第一个真值

​           值1      值2      结果

​           true     true    true  //返回第一个true

​           true     false   true

​           false    false   false

​           console.log("aaa"||(5>4)) //aaa

​           console.log(""||("5>3")) //aaa

###      五.其他运算符

​      1.一元运算符     typeof（判断数据类型）  ++ --  +（正） -（负）

​                       new（创建一个对象实例） delete（删除一个对象实例）

​       2.二元运算符     + - * / && || ！

​       3.三元运算符     语法格式 判断真假的条件表达式 ?条件为真：条件为假的值

​        var num=(5>4)?5:4;    //console.log(num)  5

​      六、特殊运算符（）提高优先级

​      七 模板字符串 `${变量名}内容${变量名}`；  方便我们调用变量

​         

```js
  		   var num3="hello";

           var num4="1707-2";

           document.write(num3 +",前端"+num4+"班级")

           document.write(`${num3},前端${num4}班级`);

           document.write(`${num3},班级${num4}大活跃`)

           var num=40,num1=1;

           40+1=41;

           document.write(num+"+1"+"="+num1+"<br>")
           document.write(`${num}+${num1}=${num+num1}`);

       for(var i=1;i<10;i=i+1){

           if(i%2==0){

               i=i*2

           }

           console.log(i)                                               // 1 4 5 12

       }

       console.log(i)

   for(var i=0;i<60;i++){

       if(i%7!=0&&i%10!=7) {

           console.log(i)

       }

   }
```

   求100-999的水仙花数

```
for(var i=100;i<999;i++){
       var baiwei=parseInt(i/100);
       var gewei=parseInt(i%10);
       var shiwei=parseInt(i%100/10);
       var a=Math.pow(baiwei,3)
       var b=Math.pow(shiwei,3)
       var c=Math.pow(gewei,3)
       if(a+b+c==i){
           console.log(i)
       }
   }
```

##    选择结构

​       根据规定的条件有选择的执行对应的代码（条件可以是表达式也可以是任何的数据类型）

​       注意：条件不能重复，否则会发生意外的结果

​          

```js
js if(条件){

               条件成立执行的代码

           }else{条件不成立执行的代码}

      var tianqi = prompt("请输入今天的天气");

       if(tianqi == "下雨"){

           console.log("今天不上课");

       }else{

           console.log("不想去上课");

       }
```

**if使用情况 VS swith使用情况**

当判断某种范围的时候最好用if语句，当判断多个单值的时候用switch

Number()将任意类型的数据转换成number类型字符串类型的数据如果转换不成功，返回NaN.

isNaN()判断数据转换number类型转换是否成功

### 一.分支结构

1.单分支结构

```js
if(条件){
   条件成立执行的代码
}
```

2.双分支结构

```js
if(条件){
   条件成立执行的代码
}else{
   不成立执行的代码
}
```

3.多路分支

  

```
 if(条件){

       条件成立执行的代码

   }else if{

       条件2成立执行的代码

   }else if{

       条件3成立执行的代码

   }else if{

       条件4成立执行的代码

   }else{

       条件都不满足执行的代码

   }
```

4.嵌套分支结构  在一个if语句里面嵌套另外一个if语句

  

```
 var mixi =prompt("请输入要吃的食物")
   if(mixi == 1){

       console.log("我要吃米饭")

   }else if(mixi == 2){

       console.log("我要吃面条");

   }else if(mixi == 3){

       console.log("我要吃鸡蛋");

   }else if(mixi == 4){

       console.log("我要吃碗团");

   }else if(mixi == 5){

       console.log("我要吃面皮");

   }else if(mixi == 6){

       console.log("我要吃米粉");

   }else{

       console.log("您输入错误")

   }

   var score = prompt("请输入你的成绩");

   if(score>=60&& score<=100){

       alert("及格")

       if(score==100){

           alert("满分")

       }else if(score>=90&&score<100){

           alert("优秀")

       }else if(score>=70&&score<90) {

           alert("良好")

       }else if(score>=60&&score<70) {

           alert("一般")

       }

   }else if(score < 60&& score >= 0){

       alert("不及格")

   }else{

       alert("输入错误")

   }

 

var grade= prompt("请输入你的成绩");

   if(grade>=60&&grade<=100){

       alert("及格");

       if(grade==100){

           alert("满分");

       }

       else if(grade>=90&&grade<100){

           alert("优秀");

       }else if(grade>=80&&grade<90){

           alert("良好");

       }else if(grade>=70&&grade<80){

           alert("一般");

       }else if(grade>=60&&grade<70){

           alert("刚及格");

       }

   }else if(grade<60&&grade>0){

       alert("不及格");

   }else{

       alert("输入错误");

   }
```

九九乘法表

```js
for(var i=1;i<=9;i++){
   for(var j=1;j<=i;j++){
       document.write(`${i}*${j}=${i*j}`)
   }
   document.write("<br>")
}
```

### 二.条件结构

   

```
switch(条件){

       case 值1：满足值1执行的代码;

       case 值2：满足值1执行的代码;

       case 值3：满足值1执行的代码;

       case 值4：满足值1执行的代码;

       .......

       default:值都不满足的时候执行的代码

   }
```

 

   

```
var week=prompt("请输入日期");
   switch(week){
       case "1" : alert("今天是周一");
           break;
       case "2" : alert("今天是周二");
           break;
       case "3" : alert("今天是周三");
           break;
       case "4" : alert("今天是周四");
           break;
       case "5" : alert("今天是周五");
           break;
       case "6" : alert("今天是周六");
           break;
       case "7" : alert("今天是周日");
           break;
       default :  alert("输入有误");
   }

 

Number()强制转换为数字类型
   var num1 = prompt("请输入一个数")*1;
       if(isNaN(num1)){
           alert("num1输入有误");
       }

   var num2 = prompt("请在输入一个数")*1;
       if(isNaN(num1)){
           alert("num输入有误");
       }



   var num3=prompt("请输入运算符")
   switch(num3){
       case "+" :  alert(num1+num2 );
           break;
       case "-" :  alert(num1-num2 );
           break;
       case "*" :  alert(num1*num2 );
           break;
       case "/" :  alert(num1/num2 );
           break;
       case "%" :  alert(num1%num2 );
       default:("输入有误");
   }
   
   
   var num1=prompt("请输入一个数")*1;
   if(isNaN(num1)){
       alert("请输入一个数值");
   }

   var num2=prompt("请在输入一个数")*1;
   if(isNaN(num2)){
       alert("请输入一个数值");
   }

   var num3=prompt("请输入你的运算符");

   switch(num3){
       case "+":alert(num1+num2);break;
       case "-":alert(num1-num2);break;
       case "*":alert(num1*num2);break;
       case "/":alert(num1/num2);break;
       case "%":alert(num1%num2);break;
       default:("输入有误，请重新输入");
}

 

var grade=prompt("请输入你的成绩");

   if(grade>=60&&grade<=100){
       alert("及格")
       if(grade==100){
           alert("满分")
       }else if(grade>=90&&grade<100){
           alert("优秀")
       }else if(grade>=80&&grade<90){
           alert("良好")
       }else if(grade>=70&&grade<80){
           alert("一般")
       }else if(grade>=60&&grade<70){
           alert("刚刚及格")
       }
   }else if(grade<60&&grade>0){
       alert("不及格")
   }else{
       alert("请输入正确的分数")
   }
  
```

###  循环

break continue

   break:跳出并终止循环，继续执行下面的代码

   continue

​       跳出并终止当前循环，如果下个之还满足，则继续执行循环

小结

break

   1.swith 条件满足时候，退出switch时候

   2.循环 跳出并终止循环，继续执行下面的代码

continue

   1.循环。跳出并最终当前循环，如果下个值还满足，则继续执行循环

   2.最好用适当的语句代替continue



## 数组

   **栈区:访问速度快，内存空间固定 保存的是初始类型    undefined number string null boolean**

   **堆区:访问速度慢，内存空间大  保存的是引用类型     object**

   1.变量：存储数据的容器

2. 数组: 存储一组或一系列相关数据的容器

   3.数组能干什么？？

   	能帮助我们存储或者引用大量的数据

   4.优点：方便对数据进行管理；

​       代码的逻辑结构更简单清晰。

####    如何创建一个数组？

   1.通过字面量的方式

```js
 var arr=[34,64,2,77,45,67];
     console.log(arr);
```

   什么是字面量？

   在计算机科学中，字面量（literal）是用于表达源代码中一个固定值的表示法( notation）。几乎所有计算机编程	  语言都具有对基本值的字面量表示

  2.以实例化对象的方式创建数组  new Array()

   赋值

  

```js
 var arr1=[34,64,2,77] //1.声明的同时进行赋值
   arr1[0]=24;           //2.声明之后通过下标进行赋值  覆盖
   arr1[1]=30;
   console.log(arr1)
   var arr3 = [48,7,6,0,22,44,88,100]
```

#### 对数组进行访问

   通过下标的方式对数进行访问，下标起始值是从0开始。下标结束值是数组的length-1;

   如果下标超出范围，返回undefined

   数据元素可以是任意的数据类型

```js
//    console.log(arr3[arr3.length-1])   //访问最后一个数 length是数组的长度
//    console.log(arr3[9])
//    console.log(arr3[-1]) //undefined
//	 可以自定义下标的开始位置
//    var arr4=[];
//    arr4[-1]=24;
   	  var arr5=[4,6,8,,,,9,,102,45,99];
      arr5[7]=100;
//  console.log(arr5);
```

 

//  四.数组的遍历

   

```js
for(var i=0;i<arr5.length-1;i++){
       console.log(arr5[i])
   }

var str1=["小土狗","男",21,"山西省",12345678,170,120]
var str2=["大土狗","男",21,"山西省",12345678,170,120]
var str3=["二土狗","男",21,"山西省",12345678,170,120]
var str4=["四土狗","男",21,"山西省",12345678,170,120]
var str5=["小土狗","男",21,"山西省",12345678,170,120]
var str6=["大土狗","男",21,"山西省",12345678,170,120]
var str7=["二土狗","男",21,"山西省",12345678,170,120]

var class1=[str1,str2,str3,str4]
class1[4]=["小","男",21,"山西省",12345678,170,120]
console.log(class1)
class1[1]=["小","男",21,"山西省",12345678,170,120]
var class2=[str5,str6,str7]

str1[0]=["草证明"]

console.log(class1)
```

五。二维数组

```js
var arr3=[48,"3",76,,,null,undefined,9,23]

//var num=0;

var arr4=[];

for(var i=0;i<arr3.length;i++){

//    去除数组的空元素

   if(arr3[i]!=undefined){

       arr4[arr4.length]=arr3[i]

   }

}

console.log(arr4)

var arr4=[45,100,200,30,65,99]
var max=arr4[0];
 for(var i=0;i<arr4.length;i++){
   if(arr4[i]<max){
       max=arr4[i];
	}
}
console.log(max);
var arr5=[45,300,100,200,30,65,99]

//var ever=0;

var num=0;

for(var i=0;i<arr5.length;i++){
   num+=arr5[i]
}
num=num/arr5.length;
console.log(num)

```

```js
#### 排序冒泡

var arr6=[45,300,100,200,30,65,99]
var num;
for(var i=0;i<arr6.length;i++){
   for(var j=i+1;j<arr6.length;j++){
       if(arr6[i]>arr6[j]){
          num=arr6[i];
           arr6[i]=arr6[j];
           arr6[j]=num
           console.log(arr6);
       }
   }
}
console.log(arr6)
```



#### 冒泡排序：

思想：通过在无序区的相邻元素的比较和替换，视角小伙较大的元素浮到最上面

#### 选择排序：

思想：在无序区选出最小的元素，然后将他和无序区的第一个元素交换位置

Array()数组对象



#### 数组对象的属性

   1.length 返回或设置数组元素的个数

   2.prototype 返回对象类型原型的引用

   3.constructor 代表当前对象的构造函数

#### 数组对象的方法

####    一.添加、删除类

​       **1.push(元素1，元素2...)**

​         push方法用来向数组的末尾添加元素，返回值为新数组的长度

​         一次可以添加多个元素

​         push方法会影响原数组

```js
 var arr=new Array(1,2,3);
      console.log(arr.push(4,5,6));
      console.log(arr)
```

​       2.pop()

​           pop方法用来删除数组的最后一个元素，返回值为删除的元素

​           pop方法也会影响原数组

​           3.unshift(元素1，元素2...)

​       3.unshift方法用来向数组的开头添加元素，返回值为新数组的长度

​           一次可以添加多个元素

​           unshift方法也会影响原数组

​       4.shift()

​          shift方法用来删除数组的第一个元素,返回值为删除的元素

​          shift方法也会影响数组

​       **5. splice(index，数量，item1，item2...)**

​          splice方法用来删除。添加或替换数组的元素，堪称一个万能的方法

​          index,从哪里开始删除或添加，必须是数值类型的（从0开始计算的）

​          数量，规定了删除的个数，如果为0，表示不删除

​          如果是删除，返回删除的元素，会影响原数组

```
var arr=[4,6,7,8,9]
  arr.splice(0,2)
  console.log(arr.splice(1,2,2,4))
  console.log(arr)
```

 

####     二.数组转换

​       **1.join([分隔符])**

​           join方法用于将数组按照指定的分隔符转换为字符串，如果没有分隔符，默认为"，"来分隔，

​           返回值为组成的字符串

​           不会影响原数组

​           console.log(arr.join("-"))

​       2.toString（）将数组元素转换为字符串 默认以盗号分开，不可以指定分隔符

​       3.valueOf()    返回数组的原始值

####      三.数组的截取

​          **1.slice(参数1，参数2)**

​            slice方法从已有的数组中返回选定的元素，即从指定位置开始截取，到指定位置（不包括）结束

​            如果没有指定的结束位置，则从指定位置开始，到末尾结束

​            支持负数（从-1开始），返回值为新数组，不会破坏原数组

​            var arr=[4,6,7,8,9]

​            console.log(arr.slice(2,-1))

####       四.数组的连接

​           **1.concat()**

​            concat方法用于连接两个或更多个数组，并返回新数组

​            该方法不会影响原数组

​            var arr=[4,6,7,8,9]

​            var arr1=[10,11,12,13,14]

​           console.log(arr.concat(arr1))

​           sort()

​           sort方法用于对数组中的元素进行排序，排序顺序可以是字母或数字，并按升序或降序排列，

​           如果没有参数则按照字符的编码开始按顺序排序

​           如果有参数，这个参数必须是一个函数（回调函数）

​           

```js
 var arr3 =[10,22,5,60,8]
   var arr3 =[]
   arr3.sort(function(a,b){
        return b-a
   })
   console.log(arr3)
```

 

 

#### ESMA5 5.0  IE 6 7 8不支持

####      六、数组的过滤fliter

​         返回数组中符合条件的所有元素，在回调函数中定义判断条件 返回值为所有判断结果

​         为真的值组成的新数组

​         fliter(callback)  可以传三个值   val index callback

​           var arr1=[8,10,11,12,13,14]

​           console.log(arr1.filter(function(val){

​               return val>12;

​           }))

####       七.数组的映射

​           map（callback）  值  下标  操作的数组

​           map方法会返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值

​       

```js
 var arr1=[8,10,11,12,13,14]
       console.log(arr1.map(function(val){
           return val*2;   //对应的数组里面的每个值乘以2
       }))
```



####        八.数组的查找

​           indexOf（item）

​               indexOf()用来返回数组中某个指定的字符串值第一次出现的位置，从指定位置起从前向后搜索，如果没找到返回-1

​               如果没有指定起始位置，将从数组的开始位置查找

####        九.数组的查找

​            lastindexOf(item)

​            lastindexOf()方法返回数组中某个指定的字符串值最后一次出现的位置，和indexOf方法正好相反

 

 

​      

```js
 var arr1=[8,10,11,12,13,14,12]
       console.log(arr1.indexOf(12,5))     //后面的5代表从下标5开始查找12第一次出现的下标
       console.log(arr1.lastIndexOf(12))
```



#### 数组的判断

every（val,index，callback）

   every方法用来检测数组中的每一项元素是否符合条件

   即在回调函数中进行判断，如果有一个元素不满足条件，则整个表达式返回false，而且其他元素将不再进行判断

   ，如果所有元素都满足条件，则返回true

   注意：every方法不会对空数组进行检测

  

```js
 var arr=[1,2,3,4,5]
   var result=arr.every(function(item,index){
       return item<3
   })
   alert(result)   //false
```

 

some(val,index,callback)

   some方法用于检测数组中的每一个元素是否满足指定的条件

   即在回调函数中对每个元素一次进行判断，如果有一个元素满足条件，则表达式将会返回true，而且其他元素将不再进行判断

   如果没有满足条件的元素，则返回false

  

```js
 var arr=[1,2,3,4,5]
   var flag=arr.some(function(val,key){
       return val<3;
   })
   console.log(flag)   //true    //有一个大于三就是ture
```

 

 

10.数组反转

 1.reverse()

   将数组的索引值颠倒

 12 数组运算

   1.reduce(callback)

   对数组进行类似累加运算这种形式的运算

​     

```js
  var arr=[4,5,6,7]
       console.log(arr.reduce(function(total,val,index,arr){
         return total+val    //数组元素累加的和    22
       }))
```

 

​    2.reduceRight（callback）

​    功能同reduce，但是运算时从右往左

```js
console.log(arr.reduceRight(function(total,val){
   return total+val    //数组元素累加的和    22
}))
```

#### ECMA6

   find(callback)从数组当中查找某个元素(值最相近的元素)并返回

​    

```js
   var arr=[4,5,6,7]
       console.log(arr.find(function(val,index,arr){
           return val>90
       }))
```

 

 

   findIndex(callback) 从数组中查找某个元素并返回他的索引值

​       console.log(arr.findIndex(function(){

​       }))

 

   fill（item）使用传入的参数替换数组的元素

   includes(item)判断数组中是否包含某个元素的方法  存在true 不存在false

   copyWithin（index1,index2）从数组的指定位置拷贝元素到数组的另一个指定位置中



**练习**

```js
1.求数组最大的数
var arr1=[12,10,30,50,8,100];
var max=arr1[0];
for(var i=0;i<arr1.length;i++){
   if(arr1[i]>max){
       max=arr1[i]
   }
}
console.log(max)

2.求数组最小的数
var arr1=[12,10,30,50,8,100];
var min=arr1[0];
   for(var i=0;i<arr1.length;i++){
       if(arr1[i]<min){
           min=arr1[i]
       }
   }
console.log(min)

3.求数组中的平均值
var arr1=[12,10,30,50,8,100];
var sum=0;
   for(var i=0;i<arr1.length;i++){
       sum+=arr1[i]
   }

 console.log(sum/arr1.length)

二维数组中最大的值
var arr1=[[40,50],[60,80,4,90],[5,8,300]];
var max=arr1[0][0]
   for(var i=0;i<arr1.length;i++){
       for(var j=0;j<arr1[i].length;j++){
           if(arr1[i][j]>max){
               max=arr1[i][j]
           }
       }
   }
console.log(max)

二维数组中最小的值
var arr1=[[40,50],[60,80,4,90],[5,8,300]];
var min=arr1[0][0];
   for(var i=0;i<arr1.length;i++){
       for(var j=0;j<arr1[i].length;j++){
           if(arr1[i][j]<min){
               min=arr1[i][j];
           }
       }
   }
   console.log(min)

二维数组中纬度最长的


var arr1=[[5,8,300,30,40,60],[60,80,4,90],[40,50]];
var num=arr1[0];

   for(var i=0;i<arr1.length;i++){
     if(arr1[i].length>num){
         num=arr1[i].length;
//          num1=arr1[i]
     }
   }
console.log(num)

var arr1=[[5,100,200,5,4,6,8],[60,80,4,90],[40,50,50,6,4,5,8,5,1]];
var num=arr1[0];
//var num1=[]
for(var i=0;i<arr1.length;i++){
   if(num.length<arr1[i].length){
       num=arr1[i]
   }
}
console.log(num)



var arr = [[300,400,900,700],[200,500,600],[100,500,200,400,200,1000]]
   var wa = arr[0];    //最大无敌
for(var i=0;i<arr.length;i++){
   if(wa.length < arr[i].length){
       wa = arr[i];
   }
}
console.log(wa)


数组选择排序

   var empty;
   for(var i=0;i<arr1.length;i++){
       for(var j=i;j<arr1.length;j++){
           if(arr1[i]>arr1[j]){
               empty=arr1[i];
               arr1[i]=arr1[j]
               arr1[j]=empty
           }
       }
   }
   console.log(arr1)



var grade=[1,2,5,7,3];
for(var i=0;i<grade.length;i++){
   for(var j=0;j<grade.length-1-i;j++){
       if(grade[j]>grade[j+1]){
           var temp=grade[j];
           grade[j]=grade[j+1];
           grade[j+1]=temp;
       }
   }
}
console.log(grade);

   数组去空
   var arr=["r",4,5,6,,,6,,7,8];
   var num=[]
   for(var i=0;i<arr.length;i++){

       if(arr[i]!=undefined){
           num[num.length]=arr[i]
       }
   }
   console.log(num)





冒泡排序 相邻元素比较，把最大和最小值浮到上面

选择排序
var arr2=[33,66,40,20,35,18,100,80];
var empty;
for(var i=0;i<arr2.length;i++){
   for(var j=i+1;j<arr2.length;j++){
       if(arr2[i]>arr2[j]){
          empty=arr2[i];
           arr2[i]=arr2[j];
           arr2[j]=empty;
       }
   }
}
console.log(arr2)


一维数组的筛选

var arr3=[4,'eww',1,undefined,'sfd',true,null];

   for(var i=0;i<arr3.length;i++){
       if(typeof arr3[i]==="number"){
           console.log(`${arr3[i]}这个值是number类型`)
       }else if(typeof arr3[i]==="string"){
           console.log(`${arr3[i]}这个值是string类型`)
       }else if(typeof arr3[i]==="boolean"){
           console.log(`${arr3[i]}这个值是boolean类型`)
       }else if(typeof arr3[i]==="undefined"){
           console.log(`${arr3[i]}这个值是undefined类型`)
       }else if(typeof arr3[i]==="object"){
           console.log(`${arr3[i]}这个值是object类型`)
       }
   }

var arr1=[[4,5,6],[100,20,30,50,1],[4,5]]

var num=arr1[0];
   for(var i=0;i<arr1,length;i++){
       if(arr1[i].length>num.length){
           num[i]=arr1[i]
       }
   }
   console.log(num)
```

   arr.copyWithin(target_index,strat_index,)

   var arr=[4,5,2,20,30,40,50]

   console.log(arr)

   console.log(arr.copyWithin(1,3,4))

   十二    构造函数的方法

####    1.Array.from();

   Array.from方法用于将两类对象转为真正的数组，类似数组的对象和可遍历的对象。

​      

```js
 let lisi={
     0:48,
     1:50,
     2:20,
     length:3,
  }
  console.log(Array.from(lisi))
  console.log(lisi)
```

 

 

####    2.Array.of（）

​       方法用于将一组值，转换为数组，Array.of

​          console.log(Array.of(40,50,60,70))

####    3.Array.isArray()

​    判断某个值是否为数组，返回布尔类型

```js
var arr=[4];
console.log(Array.isArray(arr))     //true
```







## 函数

一、函数概念：将能够实现某一特定功能的代码(封装)集合起来，能够重复使用的代码块

二、优点：1.方便、快捷;

​        2.代码逻辑结构更清晰；

​        3.方便重复使用.....；

#### 三、声明函数

   1、通过关键字function【最基本的方法】

​       console.log(fn)//函数块、本身

​    2、通过字面量的方式(匿名函数)在js语句中，等号右边的都是字面量

​      var a=function(){

​      }

​    3.通过实例化对象的方式

#### 四、调用函数

​       1.方式一 函数名加小括号 a()

​       2.方式二 字面量声明的 变量名+小括号

​       3.方式三 函数自调用  注意 前面内容要加分号，否则报错

```js
 (function a(){
    alert(1);
})();
```

 

​       4.方式四 通过事件来调用   注意：他前面的结束位置一定要加分号

```js
    onclick()
    onmouseover()
    onmousemove()
    onkeydown......
    document.getElementsByTagName("div")[0].onclick=fn;
```

 

#### 三、函数声明以及调用的注意事项

   1.函数自调用时注意他前面的语句结束为止切记加分号；

   2.重复声明一个函数时，会发生覆盖（新的覆盖旧的）

   3.通过关键字声明的函数，可以在声明之前进行调用【通过基本方法声明的函数会在页

​     面载入时，优先解析到内存中。方便调用，故可在函数声明前调用】

​     通过字面量声明的函数，只能在声明之后进行调用，前面调用报错，通过字面量声明

​     的函数会在执行到他的时候，才会被赋值，故只能在函数的后面进行调用

 

 

​      

```js
 a()     //Uncaught TypeError: a is not a function  报错：不是一个函数
       var a = function(){
              alert(1)
       }
```

  4.不同的script浏览器会分块进行解析（从上到下），故前面的块不能调用后面块中的函数，不同块间的函数应该	 先定义在调用

#### 四、小括号的作用；

   1.实参：函数在调用时，括号里所传入的值或变量叫实参，用于传递给形参

   2.形参：函数定义时，括号里所定义的变量交形参，用来接收实参

​       

```js
function sum(val){
  alert(val)
}
 sum("HELLO")
```

参数的作用：可以是任意类型的数据 动态的改变函数体

```js
undefined
Number
string
boolean
null
object

   function sum(val){
       if(typeof val === "undefined"){
           console.log(`${val}是undefined类型`)
       }else if(typeof val === "number"){
           console.log(`${val}是number类型`)
       }else if(typeof val === "string"){
           console.log(`${val}是string类型`)
       }else if(typeof val === "boolean"){
           console.log(`${val}是boolean类型`)
       }else if(typeof val === "object"&&val ==null){
           console.log(`${val}是null类型`)
       }
   }
   sum(null)
```

#### 五、参数个数【一般情况最多传25】

   1.实参的个数和形参的个数相等，一一对应

   2.实参个数小于形参，多出来的形参会默认赋值undefined

   3.实参个数大于形参，不会报错，需要借助arguments对象来访问参数

   argumens类似于数组

   每创建一个函数，该函数就会隐式创建一个arguments对象，arguments是用来记录函数的参数信息的一个对象，他包含有实际传入参数的信息

   arguments对象的属性

   length获得参数的个数

   callee 获得函数本身的引用

   访问传入参数的具体的值，arguments【下标】下标从0开始



当我们给一个函数传一个参，两个参，甚至不传参，解析器都会帮助我们正常的解析，这是因为ECMAScript中

的参数在内部是用一个数组来表示的，函数接收的始终都是这个数组，那我们的数组长度 是不是可变的呀，故不

会关心她数组中到底包含哪些参数。

 

 

```js
  function fn(){
	console.log(arguments)
   }
   fn(0,1,5,1,20,30,45,48)
```

 

#### 七.rest参数(ES6语法)

   用来接收剩余（没有形参对应的实参）参数，是一个数组。

```js
 function fn(a,b,...rest){
 	console.log(a,b,rest)
}
fn(23,"ew",43,undefined)
```

#### 八.参数的默认值

方式一.定义参数的时候就设置

默认参数的位置

   最好带默认值的参数放在最后面，使用方便

  

```js
 function fn(a = 3,b = 10){
       console.log(a,b)
   }
   fn(,6) //报错
```

方式二：三元表达式   判断数据类型

   条件？为真时的值：为假时的值

 

   

```js
function fn(a,b,c){
       c=c===undefined?9:c;
       console.log(a,b,c)
   }
 fn(2,4)

function fn(a,b,c){
       c=c===undefined?9:c;
       c=c||9
       console.log(c)
 }
 fn(1,2)
```

 

方式三：逻辑或运算符   判断数据大小

 

```js
  function fn(a,b,c){
    c=c || 8;
    console.log(a,b,c)
   }
   fn(2,4)
```

 

#### 九 函数的返回值（return）

   函数返回值即函数运行结束之后得到的值，return默认返回undefined

   作用1：跳出当前的函数，return后边的语句将不再执行

   作用2.返回一个值,返回的值可以是任意类型

​           函数允许写多return分支，只会执行一个

   作用3.一个函数只能有一个返回值。（原因：用逗号做返回值时候，是按从左到右赋值的

​         ，最终赋值为最后一个值，前面的值被覆盖了

​            前面我们已经提到过，若想返回多个值，需要借助数组）

   作用4.return后边不跟值时，返回结果为undefined

```js
   function fn(a,b){
       var sum=a+b;
       return ;        //undefined
//        console.log(sum);
   }

console.log(fn(4,5))

function fn(a){
   if(a>10){
       return a;
   }else{
       return 0;
   }
}
console.log(fn(8))


function fn(a,b,c){
   return a,b,c;
}
console.log(fn(23,5,88))    //88 return只能返回一个值，多个值时是最后一个
 
```



#### 十 作用域

 

   环境：

   1.宿主环境：浏览器

   2.执行环境：决定了变量和函数的访问权限

​     全局环境：整个页面

​     函数环境：一个函数就是一个环境

   作用域：就是变量与函数的可访问范围

   在js中，变量的作用域有两种

​       1.全局作用域

​       任何地方都能访问到

​         1.函数最外层定义的变量

​         2.所有未定义直接赋值的变量自动声明为全局变量（所有未通过关键字定义的变量【num = 9】）

​         3.所有window对象的属性

​           window对象内置属性都拥有全局作用域，例如window.name、window.location、window.top

​          2.局部作用域

​           和作用域相反，局部作用域一般只在固定的代码片段内可以访问到，最常见的案例如函数内部，所有在一些

​           地方也会看到有人把这种作用域称为函数作用域

  

```
  var outcaal=90;     //外层变量
    function outfn(){   //外层函数
        var inval=30;   //内层变量
        function infn(){//内层函数
           alert(1)
        }
        return infn
    }
    var c=outfn()
    c();
   console.log(window)
```

#### 练习

```js
 1  水仙花封装

   function fn(a){
       for(var i=100;i<=a;i++){

           var baiwei=Math.pow(parseInt(i/100),3)
           var gewei=Math.pow(parseInt(i%10),3)
           var shiwei=Math.pow(parseInt(i%100/10),3)
           if(baiwei+shiwei+gewei==i){
               console.log(i)
           }
       }
   }
   fn(999)

水仙花第二种封装方法

function shuixianhua(){

   for(var i=0;i<=9;i++){
       for(var j=0;j<=9;j++){
           for(var k=1;k<9;k++){
               if(i*i*i+j*j*j+k*k*k==i+j*10+k*100){
                   console.log(k,j,i)
               }
           }
       }
   }
}

2   获取数组的最大值封装
var arr=[6,8,12,16,20,4,48,18];
   function max(arr){
       var num=arr[0];

       for(var i=0;i<arr.length;i++){
           if(arr[i]>num){
               num=arr[i]
           }
       }
       return num
   }
console.log(max(arr))

3 数组中长度最长封装
var arr=[[4,6,8,6,22,48,50,44],[3,12,8,20,45],[2,3]]
function max(arr){
   var num=arr[0]
   for(var i=0;i<arr.length;i++){
       if(arr[i].length>num.length){
           num=arr[i]
       }
   }
   return num
}
console.log(max(arr))
4.对任意数组进行排序封装 小到大

升序 从小到大 ASC
降序 从大到小 DESC

var arr=[48,3,64,100,52,200,40];
function max(arr,type){
   type=type||"ASC"
   var empty;
   for(var i=0;i<arr.length;i++){
       for(var j=i+1;j<arr.length;j++){
           if(type=="ASC"){
               if(arr[i]>arr[j]){
                   empty=arr[i];
                   arr[i]=arr[j];
                   arr[j]=empty;
               }
           }else if(type=="DESC"){
               if(arr[i]<arr[j]){
                   empty=arr[i];
                   arr[i]=arr[j];
                   arr[j]=empty;
               }
           }
       }
   }
   return arr;
}
console.log(max(arr,"ASC"))
console.log(max(arr,"DESC"))

冒泡函数封装
function fn(arr,type){
   type==type||"ASC"
   for(var i=0;i<arr.length;i++){
       for(var j=0;j<arr.length-i-1;j++){
           var empty;
           if(type=="ASC"){
               if(arr[j]>arr[j+1]){
                   empty=arr[j]
                   arr[j]=arr[j+1];
                   arr[j+1]=empty;
               }
           }else if(type=="DESC"){
               if(arr[j]<arr[j+1]){
                   empty=arr[j]
                   arr[j]=arr[j+1];
                   arr[j+1]=empty;
               }
           }
       }
   }
   return arr
}
var arr1=[48,3,64,100,52,200,40];
console.log(fn(arr1,"ASC"))
console.log(fn(arr1,"DESC"))

5 统计偶数的个数
var arr=[4,3,6,8,10,7,9,11]
function max(arr){
   var newarr=[]
   for(var i=0;i<arr.length;i++){
       if(arr[i]%2==0){
           newarr.push(arr[i])
       }
   }
    return newarr.length;
}
   console.log(max(arr))

6 金字塔封装

function ta(num){
   num=num||10;    //不传参数默认10行
   var str="";
   for(var i=0;i<num;i++){
       for(var k=0;k<num-i;k++){
            str+="&nbsp;&nbsp;";
       }
       for(var j=0;j<i+1;j++){
           str+=("*&nbsp;&nbsp;&nbsp;");
       }
       str+=("<br>");
   }
   return str
}
document.write(ta(20))

7  10行10列表格封装

function biaoge(rows,lies,jcolor,jjcolor,ocolor,oocolor){
   rows=rows||10;lies=lies||rows;
   jcolor=jcolor||"cyan";
   jjcolor=jjcolor||"gold";
   ocolor=ocolor||"pink";
   oocolor=oocolor||"yellow";
   var str="<table cellspacing='0' border='1' width='500px' height='500px'>"
       for(var i=1;i<=rows;i++){
           str+="<tr>";
               for(var j=1;j<=lies;j++){
                   if(j%2==0&&i%2==0){
                       str+=`<th bgcolor=${jcolor}></th>`;
                   }else if(j%2==0&&i%2==1){
                       str+=`<th bgcolor=${jjcolor}></th>`;
                   }else if(j%2==1&&i%2==1){
                       str+=`<th bgcolor=${ocolor}></th>`;
                   }else if(j%2==1&&i%2==0){
                       str+=`<th bgcolor=${oocolor}></th>`;

                   }
               }
           str+="</tr>";
       }
   str+="</table>";
   return str;
}
  document.write(biaoge(20))
8.检测数据类型

function sum(val){
       if(typeof val === "undefined"){
           console.log(`${val}是undefined类型`)
       }else if(typeof val === "number"){
           console.log(`${val}是number类型`)
       }else if(typeof val === "string"){
           console.log(`${val}是string类型`)
       }else if(typeof val === "boolean"){
           console.log(`${val}是boolean类型`)
       }else if(typeof val === "object"&&val ==null){
           console.log(`${val}是null类型`)
       }
   }
   sum(null，”sss“)
9.去重
var arr=[4,30,5,6,4,3,6,20,30]
function fn(arr){
   var newarr=[]

   for(var i=0;i<arr.length;i++){
       var flag=true
       for(var j=i+1;j<arr.length;j++){
           if(arr[i]==arr[j]){
               flag=false
           }
       }
       if(flag==true){
           newarr[newarr.length]=arr[i]
       }
   }
   return newarr
}

console.log(fn(arr))


斐波那契数列 养兔子  递归
function tu(yue){
   if(yue==1||yue==2){
       return 1
   }else{
       return tu(yue-1)+tu(yue-2)
   }
}
console.log(tu(10))

阶乘

function fn(num){
    if(num<=0){
        return 1
    }else{
       console.log(num*fn(num-1))
        return num*fn(num-1)
    }
}
console.log(fn(5))

闭包

   function fn(){
       var num=10;
       function bb(){
           num++;
           return num
       }
       return bb
   }

   var r=fn()
   console.log(r())
```

## 对象

1.对象

 一切皆对象

   心中的对象（模糊）                       现实（清晰）芳芳

   外观：黑色长发

​        酒窝

​        虎牙

​        瓜子脸

​        大眼睛

​        大长腿

   内在：

​       高学历

​       温柔体贴

​       贤良淑德

 

 

   //对象：属性和方法的无序集合，一切皆对象

 

####    声明 对象

#### 分类

   一.内部对象

​       1.内置对象 Global 、Math 可以直接拿过来用，不需要实例化

​       2.本地对象 需要new实例化 Function、Array、String、Boolean、Date、正则...

   二.宿主对象

​       Dom、Bom

   三.自定义对象

创建一个新对象，并且指向该空对象  还继承了对象原型

属性和方法被加入到this引用的对象中

新创建的对象由this所引用，宾倩隐式返回对象

#### 一 通过new关键字

  

```js
 var person=new Object()
       person.sex="女";
       person.name="张三";
       person.top="170";
       person["marry"]=true;
       person.say=function(){
           alert(this.name);
       }
       person.say()
       person["say"]()    //      对象名["方法名"]()
```

####    给对象添加属性和方法

​       添加属性： 对象名.属性名=属性值

​       添加方法： 对象名.方法名=function(){};

​       添加方法：对象名["方法名"]=function(){}

   

```js
 var fn=new Object();
    fn.sex="nv";
    fn.name="zhangsan"
    fn['age']=18;
    fn.say=function(){
        alert(this.name)
    }
    fn['hellow']=function(){
        alert("hellol world")
    }
    console.log(fn.say())
    console.log(fn['hellow']())
```

####    访问对象的属性和方法

​     对象名.属性名

​     对象名["属性名"]

​     对象名.方法名()

​     对象名["方法名"]()

 

 

#### 二 通过字面量

​       var cup={};

   console.log(cup)

#### 三 通过构造函数   //构造函数和普通函数没啥区别，关键在于我们怎么用

   函数名首字母大写 区别构造函数

  

```js
 var cup={};
   cup.size=20;
   cup.color="red";
   cup.caizhi="塑料";
   cup.jiage=50;
   cup.drink=function(){
       alert("我是用来喝水的")
   }
   console.log(cup.size)
```

 

#### 通过字面量 json格式

   

```js
var cup1={
      size:20,
      color:"red",
      caizhi:"塑料",
      jiage:50,
      drink:function(){
           alert("我是用来喝水的");
       }
   };
 console.log(cup1["drink"]())
```

   以上两种方法只能创建一个对象，当我们需要创建多个对象实例

   的时候需要用第三种方式们也就是通过构造函数创建



#### 通过构造函数

js中不存在类class，需要通过构造函数来实现类

通过构造函数我们可以实现多个类

 

 

```js
function Person(name,sex,age,mixi){
   this.name=name; //this指向实例化的对象
   this.sex=sex;
   this.age=age;
}
var zhangsan=new Person("张三","男",30);
    zhangsan.banji="1707-2"
var lisi=new Person("小梦","女",18);
zhangsan=null;  //销毁一个对象
console.log(zhangsan);
console.log(lisi.name);
```

通过new关键字一般用于实例化一个对象

销毁一个对象：对象名=null

delete删除的是对应的对象的一个值

delete zhangsan.sex

console.log(zhangsan);

#### 遍历一个对象    

```js
//for in  i代表对象的属性名   对象名[i] 属性对应的值
for(var i in zhangsan){
   console.log(i)
   console.log(zhangsan[i])
}
  // 初始类型：访问速度快，内存小
  //引用类型：栈区保存地址，堆区找内容 访问速度慢  内存大

var arr=[1,5,6,8]
    arr.push(2,3)
console.log(arr.indexOf())
```

#### 对象定义

   对象：人们研究的一切事物。抽象的，具体的,属性和方法的无序集合

   方法：描述对象的行为和数据

   类：具有相同或类似特性的对象称为类。

​      类是对象的抽象概念

​      对象是类的实例化

####    五 .创建对象

   通过关键字new  var obj=new Object

```js
//for in 遍历 json
 for(var i in wangwu){
     //i=对象的属性名
    // wangwu【i】=对应属性名的值
 }
```

 

对象的特性，封装

手机：

属性：品牌 材质 颜色 型号

   功能：打电话，发短信，玩游戏

   

```js
	var phone={}
       phone.brand="xiaomi";
       phone.cai="塑料";
       phone.color="玫瑰金";
       phone.type="小米6";
       phone.tel=function(){
           alert("打电话")
       };
       phone.play=function(){
           alert("玩游戏")
       };
```

 

#### 一.工厂函数  

不推荐使用，方便维护，节省内存，可以传参，但格式不规范，一般实例化对象都会new

```
function myPhone(color){
   var phone={};
   phone.brand="xiaomi";
   phone.cai="塑料";
   phone.color=color;
   phone.type="小米6";
   phone.tel=function(){
       alert("打电话")
   };
   phone.play=function(){
       alert("玩游戏")
   };
   return phone;
}
   var iphone7=myPhone("黑色")
   console.log(iphone7.color)
```

#### 二.构造函数 浪费内存

   动物

instanceof  判断实例化的对象是不是有指定的构造函数实例化出来的 （obj instanceof 类）

​           判断我们指定的对象是否由该构造函数实例化出来  是返回true  不是则false

constructor 可以访问该对象指向的构造函数   （Animal.constructor） this指向实例化的对象

```js
//animal对应的是最原始的object对象
function animal(name,tizhong){
   this.name=name;
//  this.color=color;
   this.tizhong=tizhong;
   this.say=function()
       alert("我会说话")
   };
}
animal.prototype.color="yellow"
var reds=new animal("小红",50)
console.log(reds.color)
console.log(reds.constructor)
console.log(reds instanceof animal)
```



   原型：js中，每个对象都会继承一个对象所有的属性和方法，这个被继承的对象就称做当前对象的原型

   访问对相关的原型，可以通过访问对象的构造函数prototype属性来访问

   原型也是一个对象

   每个对象对应唯一原型

   每一原型可以对应很多对象

   _proto_指向当前对象的原型

 

#### 三.原型  prototype 

prototype ：通过prototype方法可以实现相同代码共享，将共享的数据全部放到内存的代码块里面

```js
function animal(name,tizhong){
    this.name=name
    this.tizhong=tizhong;
    this.say=function(){
        alert("我会说话")
    };
}

animal.prototype={
    color:"blue",
    aa:{color:"pink"},
}
var reds=new animal("小红",50)
console.log(reds)
```

 

```js
function Animal(name,weight){
   this.name = name;
   // this.color = color;
   this.weight = weight;
}

// Animal.prototype.color = 'yellow'
Animal.prototype = {
   aaa:{color:'yellow'},
   singsing :function(){
       alert('唱歌')
   },
   fly :function(){
       alert('上天')
   }
}

var yingwu = new Animal('瓜皮' ,50);
var yingwx = new Animal('瓜皮' ,50);
console.log(yingwu.weight);
console.log(yingwu.aaa.color);
yingwu.aaa.color = 'red';
console.log(yingwu.aaa.color);
console.log(yingwx.aaa.color);

//继承：通过prototype，必须在实例化之前继承。
student.prototype=new person()

function person(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.say=function(){
        alert("会说话")
    }
}

student.prototype=new person();//继承的方式
function student(name,age,sex){
   this.name=name;
   this.age=age;
   this.sex=sex;
}
var lisi=new student("李四",20,"男")

//call指针
function student(name,age,sex){
   person.call(this,name,age,sex)
}
var lisi=new student("李四",20,"男");
console.log(lisi)
```

 

#### 混合模式：构造函数和原型结合

一般都将属性写在构造函数里边,方法写在原型的身上

#### 对象封装

   遍历数组：for循环，for in

   对象     只能用 for in一种方法遍历

数组；

i   下标

arr[i] 下标对应的数组元素

对象 i 属性名

obj[i] 属性对应的值 

  

```js
 var arr=[1,2,3];
       function fn(arr,...rest){
       var num=arr.length;
       for(var i=0;i<rest.length;i++){
               arr[num]=rest[i];
               num++;
           }
       return arr;
   }

   console.log(fn(arr,4,5,6,7,8))
```

 

```js
   function myArr(){
       for(let i=0;i<arguments.length;i++){
           //myArr[i]=this[i]
           this[i] = arguments[i];
        }
//      对象的属性
       this.length=arguments.length;

   }
myArr.prototype={
       push:function(){
           for(let i=0;i<arguments.length;i++){
               this[this.length]=arguments[i];
               this.length++;
           }
           return this;
       },

       indexOf:function(value){
           for(let i=0;i<this.length;i++){
               if(this[i]==value){
                   return i;
               }
           }
           return -1;
       },
   }

var arr=new myArr(20,48,"aaa")
arr.push(100,200)
console.log(arr)
console.log(arr.indexOf(48));
```



```js
function myArr(){
    for(var i=0;i<arguments.length;i++){
        this[i]=arguments[i]
    }
    this.length=arguments.length;
}
    myArr.prototype={
        push:function(){
            for(var i=0;i<arguments.length;i++){
               this[this.length]=arguments[i];
                this.length++;
            }
            return this
        },
        indexOf:function(value){
            for(var i=0;i<this.length;i++){
                if(this[i]==value){
                    return i
                }
            }
            return -1
        },
        Max:function(){
            var num=this[0];
            for(var i=0;i<this.length;i++){
                if(this[i]>num){
                    num=this[i];
                }
            }
            return num
        },
        Min:function(){
            var num=this[0];
            for(var i=0;i<this.length;i++){
                if(this[i]<num){
                    num=this[i];
                }
            }
            return num;
        },
//        冒泡排序法
        Sort:function(type){
            type=type||"ASC";
            for(var i=0;i<this.length;i++){
                var empty;
                var flag=true;
                for(var j=0;j<this.length-i-1;j++){
                    if(type=="ASC"){
                        if(this[j]>this[j+1]){
                            empty=this[j],
                                    this[j]=this[j+1];
                            this[j+1]=empty;
                        }
                    }else if(type=="DESC"){
                        if(this[j]<this[j+1]){
                            empty=this[j],
                            this[j]=this[j+1];
                            this[j+1]=empty;
                        }

                    }else(flag=false)
                }
            }
                if(flag==true){
                    return this;
                    console.log("请输入ASC求最大值或DESC求最小值")
                }else{
                    return -1;
                }
        },
//        选择排序法
        Xuanze:function(type){
            type=type||"ASC"
            for(var i=0;i<this.length;i++){
                var flag=true;
                var empty;
                for(var j=0;j<this.length;j++){
                    if(type=="ASC"){
                        if(this[i]<this[j]){
                            empty=this[i];
                            this[i]=this[j];
                            this[j]=empty;
                        }
                    }else if(type=="DESC"){
                        if(this[i]>this[j]){
                            empty=this[i];
                            this[i]=this[j];
                            this[j]=empty;
                        }
                    }else{
                        flag=false;
                        console.log("请输入ASC从小到大或DESC从大到小排序")
                    }
                }
            }if(flag==true){
                return this;
            }else{
                return -1;
            }
        },
//去重
        Quchong:function(){
            var newarr=new myArr();
            for(var i=0;i<this.length;i++){
                var flag=true;
                for(var j=i+1;j<this.length;j++){
                    if(this[i]==this[j]){
                         flag=false;
                    }
                }if(flag==true){
                    newarr.push(this[i]);
                }
            }
            return newarr;
        },
        Map:function (fn) {
            let newarr = new myArr();
            for(let i =0;i<this.length;i++){
                newarr.push(fn(this[i],i,this));
            }
            return newarr;
        },
//        过滤筛选
        Fliter:function(fn,index){
            let newarr=new myArr();
            for(let i=index;i<this.length;i++){
                if(fn(this[i],i,this)==true){
                    newarr.push(this[i]);
                }
            }
            return newarr;
        },
        Find:function(fn,index){
            var newarr=new myArr()
            for(let i=index;i<this.length;i++){
                if(fn(this[i])==true){
                    newarr.push(this[i])
                    return newarr
                };
            }
            return -1
        }
    }
   var arr=new myArr(40,50,30,40,50,3,15,80,40,60,100);
//    console.log(arr.push(4,5,6))
//    console.log(arr.indexOf())
//    console.log(arr.Min())
//    console.log(arr.Max())
//    console.log(arr.Sort("ASC"))  //冒泡排序
//    console.log(arr.Quchong())      //去重
//    console.log(arr.Xuanze("ASC"))  //选择排序
//    console.log(arr.Map(function (val,index,arr) {
//        return val*2;
//    }));
//console.log(arr.Fliter(function(val,index,arr){
//            return val>40;
//        },4)
console.log(arr.Find(function( val){
    return val<100;
},0))
```



#### 数组方法封装练习

```js
   //选择排序封装
   var arr=[4,50,60,45,30,18,20];
   function fn(arr,type){
       for(var i=0;i<arr.length;i++){
           for(var j=i+1;j<arr.length;j++){
               var empty;
               var flag=true;
               if(type=="ASC"){
                   if(arr[i]>arr[j]){
                       empty=arr[i];
                       arr[i]=arr[j];
                       arr[j]=empty;
                   }
               }else if(type=="DESC"){
                   if(arr[i]<arr[j]){
                       empty=arr[i];
                       arr[i]=arr[j];
                       arr[j]=empty;
                   }

               }else{
                   flag=false;
               }
           }
       }
       if(flag==true){
           return arr;
       }else{
           return -1;
       }
   }
   console.log(fn(arr,"DESC"))

  // 冒泡函数封装
var arr=[4,50,60,45,30,18,20];
function fn(arr,type){
   var empty;
   var flag=true;
   for(var i=0;i<arr.length;i++){
       for(var j=0;j<arr.length-i-1;j++){
           if(type=="ASC"){
               if(arr[j]>arr[j+1]){
                   empty=arr[j];
                   arr[j]=arr[j+1];
                   arr[j+1]=empty;
               }
           }else if(type=="DESC"){
               if(arr[j]<arr[j+1]){
                   empty=arr[j];
                   arr[j]=arr[j+1];
                   arr[j+1]=empty;
               }
           }else{
               flag=false;
               alert("请输入ASC或DESC")
           }
       }
   }
   if(flag==true){
       return arr
   }else{
       return -1
   }
}
console.log(fn(arr,"DESC"))

//去重函数封装
var arr=[4,5,60,40,60,4,6,5];
function fn(arr){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        var flag=true;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                flag=false;
            }
        }
        if(flag==true){
            newarr[newarr.length]=arr[i];
        }
    }
    return newarr
}
console.log(fn(arr))


   //push函数封装

var arr=[1,2,3];
var num=arr.length;
   function fn(arr,...rest){
       for(var i=0;i<rest.length;i++){
           arr[num]=rest[i];
           num++;
       }
   return arr;
}
console.log(fn(arr,4,5,6,7,8))

//indexof函数封装
   var arr=[4,40,50,60,8,55,88]
   function fn(arr,num){
       for(var i=0;i<arr.length;i++){
           if(arr[i]==num){
               return i
           }
       }
       return -1;
   }
console.log(fn(arr,88))

//合并数组封装
var arr1=[4,5,6];
var arr2=[7,8,9];

function fn(arr1,...rest){
   var newarr=[]
    var num=arr1.length;
       for(var i=0;i<rest.length;i++){
           arr1[num]=rest[i]
           num++
       }
       return arr1;
}
console.log(fn(arr1,arr2))

var arr1=[4,5,6];
var arr2=[7,8,9];
var arr3=[10,11,12];
function fn (arr1,arr2){
   for(var i=1;i<arguments.length;i++){
       for(var j=0;j<arguments.length;j++){
           var num=arguments[0].length;
           var num;
           arguments[0][num]=arguments[i][j];
           num++
       }
   }
   return arguments[0]
}
console.log(fn(arr1,arr2,arr3))



//数组的最大值和最小值封装
var arr=[4,50,60,70,40,100]
function fn(arr,type){
var num=arr[0];
   for(var i=0;i<arr.length;i++){
       var flag=true;
       if(type=="Max"){
           if(arr[i]>num){
               num=arr[i]
           }
       }else if(type=="Min"){
           if(arr[i]<num){
               num=arr[i]
           }
       }else{
           flag=false;
       }
   }
   if(flag==true){
       return num
   }else{
       console.log("请输入Max或者Min求数组的最大值和最小值")
       return -1
   }
}

console.log(fn(arr,"Max"))
```

## Math对象

   Math的属性  按住ctrl 鼠标移入Math点击查看方法

​       abs()         取绝对值            //console.log(Math.abs(-30))

​       round()       取近似值，四舍五入

​       floor()       取近似值，向下取整

​       ceil()        取近似值，向上取整

​       max()         取一组数中的最大值

​       min()         取一组数中的最小值

​       random()      取随机数

​       pow(x,y)      取x的几次幂

​       sqrt()        取平方根

​       trunc()       去除一个数的小数部分,去除小数点

​       sin()         取正弦

​       cos()         取余弦

​       tan()         取正切弦

​       asin()        取反正弦值

​       acos()        取反余弦

​       atan()        取反正切弦

​       Math.PI       圆周率

​       Math.E        欧拉常数

​       Math.LN2      自然数2的对数

​       Math.log      求对数

```js
console.log(Math.round(3.5))    //4
console.log(Math.floor(3.5))    //3
console.log(Math.ceil(3.2))    //4
console.log(Math.max(23,65,100))    //100
console.log(Math.min(23,65,100))    //23
console.log(Math.random()*40)    //23
```

## 字符串

   获取

​    let str="www.sxuek.com";

​    let str1="山西优逸客"

   **charAt(index)获取指定位置的字符串；**

  

```js
   console.log(str.charAt(4)); //s
   charCodeAt(index)  //十六进制 获取指定位置字符串的Unicode编码
   console.log(str.charCodeAt(4))   //115
```

**String.fromCharCode()   根据传入的unicode编码饿到对应的字符串**

```js
   console.log(str1.charAt(4))     //客
   console.log(str1.charCodeAt(4)) //23458
   console.log(String.fromCharCode(23458)) //客
   console.log(String.fromCharCode(97))
```

 

 

####    查找

####    indexOf（）

   查找某个字符串在整个字符串当中第一次出现的位置

   lastindexOf(item，查找的结束位置)

   match()用于正则，用于在字符串检测指定的值，若有，返回指定的值，没有返回null

​    

```js
   console.log(str.match(/\d/g))   //返回null
```

   search（）只能用于正则   条件满足返回下标，不满足返回-1

​       

```js
  console.log(str1.search(/\d/g));
   replace(olditem,newitem)
```

   从整个字符串中查找拼配的字符串并替换为另一个字符串

​       

```js
var str3="我要吃炒饭"
console.log(str3.replace("我要","你要"))
```

   es6 includes(item)判断在整个字符串当中是否包含某个字符串

   es6 starWith(item，index)判断字符串是否是以某个字符串开始的，第二个参数表示的是开始判断的位置

​       

```js
var str4="45678"有问题
console.log(str4.starwith("6",2)
```

   es6 endWith（item，index）判断字符串是否是以某个字符串结束的，第二个为判断的结束位置。

 

#### 截取

slice(start，end) 和数组当中的用法一样 不包括结束的位置，传一个参数，从指定的位置开始，到末尾结束

substring（start，end）和slice的功能类似，只不过不能传负值，自动转换为0

   substr（start，length）接收两个参数

   第一个表示要截取的开始位置

   第二个表示要截取的长度，长度    不支持负数,不报错，返回空

```js
 var str5="6,7,8,10,20,30"
   console.log(str5.substr(-3)) //，30
   console.log(str5.substr(-3,-1)) //空
   console.log(str5.substr(-3,3)) //
```

转换 split（“分隔符”，length）将字符串转化为数组的方法

   第一个参数分隔符

   第二个参数为转换之后的数组的最大长度

```
var str6="一-万-个-理-由-40"
console.log(str6.split("-",6))
```

   toUpperCase() 转大写

```
 var str7="apple"
console.log(str7.toUpperCase())
```

​    toLowerCase

```
  var str7="APPLE"

       console.log(str7.toLowerCase())
```

   去字符串左边和右边的空格 trim

```
 str8=" a 4 6 "
console.log(str8)
console.log(str8.trim())
console.log(Math.random)
```

## JSON

   JSON是一种轻量级的数据格式，采用的是独立与语言的格式，是理想的数据格式，必须要双引号

   两个结构

   对象：{}

```js
var obj={
   "名称":"值",
    "名称":"值"
}
```

   数组:[]

```js
var arr=[
  {"名称":值,"名称":"值"},
  {"名称":值,"名称":"值"},
]
```

 

   在我们数据传输中，数据是以JSON字符串的形式去处理的，但是js操作的是JSON对象，所以需要进行

   JSON字符串和JSON对象间的转换

   JSON字符串转化为对象

   1.通过JSON.parse()

```js
 let na = '{"name":"ddd","age":23}';
 let a = JSON.parse(na);
   console.log(a);
```

2. JSON对象转换成JSON字符串

```js
 let str1 = {"name":"ddd","age":23};
   let b = JSON.stringify(str1);
   console.log(b)
```

####    解构赋值



   解构赋值：ES6中允许按照一定的模式，从数组或对象中提取值，并对变量进行赋值，称为解构赋值

   **数组中解构赋值**

   

```js
let [a,b,c] = [3,4,5]
   console.log(a,b,c);
   let [num,age]=["李四"];
   console.log(num,age)    //李四 undefined
   let [x,y=23]=[34,45];
   console.log(x,y)        //34 45
   let [aa,[bb]]=[23,[45]];  //23 45
   console.log(aa,bb)
```

 

   **对象解构赋值**：

   在数组中，按照顺序一一对应，对象当中，不会按照顺序对应，按照变量名和属性名保持一致

  

```js
   let {obj1,obj2}={obj1:"这是1",obj2:"这是2"}
   console.log(obj1,obj2)  //这是1 这是2

   let {obj3}={obj1:"这是1",obj2:"这是2"}
   console.log(obj3)  //undefined;

   let {obj4:xx}={"obj4":"这是1"}
   console.log(xx)  //这是1   左边的obj4是一个模式匹配，媒介

   let {obj4:name1,obj3:name2}={"obj4":"lisi","obj3":"laowang"}
   console.log(name1,name2)
```

 

**字符串解构赋值**

 

```js
let [str1,str2,str3]='uek'
console.log(str1,str2,str3)
```

**函数解构赋值**

```js
function a1([x,y]){
   return x+y;
}
console.log(a1([12,3]))
```

**数组的遍历**

```js
var arr=[40,50,60,35,21,3,5,100]
arr.forEach(function(ele,index){
    console.log(ele)
})
```

## 知识回顾

   dom(文档对象模型)

   定义了如何通过js操作文档中的标签元素

####    document对象

   指的是整个加载到我浏览器当中的文档，提供了包含文档信息的属性以及用于获取具体的元素对象的方法

   属性

   head   访问当前head标签对象

   body   访问当前body标签对象

   title  设置或者获取当前文档的标题，也就是title标签中的内容

   URL    访问当前文档的URL（统一资源定位符）

   all    整个文档当中所有的标签对象集合

   images 获取整个文档当中所有的img标签对象集合

   links  获取整个文档中所有的a标签对象集合

   forms  获取整个文档中所有的form标签对象集合

   anchors获取整个文档中所有锚链接

   方法：querySelector（）通过接收一个css选择器字符串，返回在文档中查找到的标签（元素）对象，如果能够查找到多个，返回第一个

​           如果查找不到，会返回null

​        querySelectorAll（）  通过接收一个css选择器字符串，返回在文档中查找到的标签（元素）对象集合，如果能够查找到一个，也是集合

​           如果查找不到，会返回null

   普通的元素对象（div,p,span,ul,li.....）

####    属性：innerHTML

​       获取或者设置某个标签中所有的内容，识别内部标签的

####        textContent

​       获取或者设置某个标签中所有的文本内容，不识别内部标签

####        innerText

​       textContent在低版本IE（IE8以下）浏览器中的实现方式

####        className

​       获取或者设置某个标签的类名

####        id

​       获取或者设置某个标签的id

####        style

####        获取某个标签的所有行内样式对象

​           style.width  获取或者某个标签的某个css样式

​       	   style.cssText

​       获取或设置某个标签所有的行内样式，会覆盖之前的行内样式  可以用+=拼接避免

​         classList访问到某个标签的类名对象

​         classList.add()给某个标签添一个类名

​         classList.remove（）移除某个标签的某个类名

​         classList.toggle（）对于某个标签的某个类名进行切换

​         offsetWidth   获取某个元素在页面中实际所占的宽度

​         offsetHeight  获取某个元素在页面中实际所占的高度

####    事件

   onclick鼠标单击事件

   onmouseover鼠标移入事件

   onmouseout鼠标移出事件

   transitionEnd     过渡结束

   animationend 监听帧动画效果完成的事件

####    方法

####    querySelector

   querySelectorAll

   从某一个标签当中进行查找

   addEventListener()添加一种时间的方式

   onfocus获得焦点事件

   onblur失去焦点事件

   getComputedStyle()获取某个对象的css属性集合

   demo.currentStyle //旧版本IE

   offsetLeft（） 如果所有的前辈元素都没有定位属性，这个值指的就是当前当前元素距离文档左边的值，

   如果某个前辈元素有定位属性，就是距离这个前辈元素左边（padding-box）的值，不包括边框

####    offsetTop 同上

​       scrollTop   获取或设置某个元素内部的子元素通过滚动超出当前元素顶部的值

​       scrollLeft  获取或设置某个元素内部的子元素通过滚动超出当前元素左边的值

​       document.documentElement.scrollTop

​       ondblclick 鼠标双击事件

​       onmousedown 鼠标按下事件

​       onmouseup  鼠标抬起事件

​       onmousemove  鼠标移动事件

​       onwheel  鼠标滚轮事件

​       onwheel  鼠标滚轮事件

​       onload  内容加载完成一般window触发

​       onresize 浏览器窗口大小发生改变时候触发的事件

​       onchange 内容改变并且失去焦点

​       onkeydown 键盘按下

​       onkeypress 键盘按压

​       onkeyup     键盘抬起

​       onkeyup     键盘抬起

#### 选项卡案例

```css
<style>
        *{
            margin:0;
            padding:0;
        }
        .box{
            width: 600px;
            height: 500px;
            background-color: #ccc;
            margin-bottom:50px;
        }
        .top{
            width: 100%;
            height:50px;
            text-align: center;
        }
        .items{
            width: 150px;
            height:50px;
            background-color:#eee;
            float:left;
            line-height: 50px;
        }
        .down{
            width: 100%;
            height:450px;
            background-color: #ccc;
            overflow: hidden;
        }
        .contents{
            width: 100%;
            height: 450px;
            background-color: red;
            font-size: 60px;
            color:#fff;
            line-height: 450px;
            text-align: center;
        }
        .active{
            background-color: pink;
        }
    </style>
```

```html
<div class="box">
        <div class="top">
            <div class="items active">家电</div>
            <div class="items">冰箱</div>
            <div class="items">暖气</div>
            <div class="items">清洁</div>
        </div>
        <div class="down">
            <div class="contents">1</div>
            <div class="contents">2</div>
            <div class="contents">3</div>
            <div class="contents">4</div>
        </div>
    </div>
```

```js
 var items=document.querySelectorAll(".items")
    var content=document.querySelectorAll(".contents")
    var goudan=0;

    for(var i=0;i<items.length;i++){
        items[i].index=i;
        items[i].onclick=function(){
            items[goudan].classList.remove("active")
            content[goudan].style.display="none";
            goudan=this.index;
            items[goudan].classList.add("active")
            content[goudan].style.display="block";

        }
    }
```

## BOM

**Bom：浏览器对象模型：定义了我们如何通过js操作浏览器中的内容（浏览器界面，历史记录，地址栏...）**

**window**

   在浏览器中的全局对象（global），它的属性和方法都是可以不加window直接访问的

#### 属性：

   screenX/screenY 当前浏览器距离屏幕左侧和顶部的值

innerWhdth/innerHeight 获取浏览器窗口的宽度和高度值

top 获取当前窗口的顶层窗口 (一般用在iframe中)

   history location document  screen  navigator

#### 方法

   alert()

   prompt()

   confirm()

   setInterval()   //设置一个循环执行的时间函数

   clearInterval() //清除一个时间函数

   setTimeout（）//设置一个延迟执行的时间函数

   clearTimeout()//清除一个延迟执行的时间函数

 

#### 事件

onload  整个文档加载完成的事件

#### history

#### 属性

   length 当前历史记录的条数

#### 方法

   back() 网页跳转到前一条历史记录的页面中

   forward（）网页跳转后一条历史记录的页面中

   go(-1)前一条

   go(1)后一条

   go(0)重新假造当前的地址

#### location

#### URL组成部分   协议  域名  端口号  路径  查询字符串 锚链接

#### 属性

protocol 访问当前地址的协议

hostname  访问域名

port端口号

host 域名+端口号

pathname 路径

search 访问查询字符串

hash 访问锚链接

href 访问完整的URL

#### 方法

assign（）加载某个网页

replace（）加载某一个网页，不会留下历史记录

reload（） 重新加载所有的资源

document

screen

 **属性**

width屏幕的宽度

height屏幕的高度

navigator 获取当前浏览器的一些信息  版本号、平台

   **浏览器位置**

   screenX

   screenY

   screenTop   旧版本IE

   screenLeft

```js
console.log(window.screenX)
console.log(window.screenTop)
```

 

   窗口的尺寸

   window.innerWidth

   window.innerHeight

console.log(window.innerWidth)

 

   window.top    当前窗口的顶层窗口

   方法

​       

```js
window.alert()
window.prompt()
window.confirm()
var r=confirm("确定吗")
console.log(r)
```

 

   setInterval()

   setTimeout();延迟执行函数，只会执行一次

   clearTimeout() 清除延迟函数



```js
setTimeout(function(){

   alert(1)

},3000)
```

 

```js
let num=0;
   setInterval(function(){
       num++;
       if(num==10){
           clearInterval(1)
       }
       console.log(num)
   },1000)
```

 





http://localhost:63342/JS%E6%80%BB/JSbanner.？user=123456&pass=123456.html#aa

http://     协议

localhost   主机名/域名

:63342      端口号  默认的端口号都是80

/JS%E6%80%BB/JSbanner.html   文件路径部分

？user=123456&pass=123456    查询字符串   ---完整的地址

\#aa         锚链接地址

 

```js
console.log(location.protocol)  //当前网页的协议
console.log(location.hostname)  //主机名
console.log(location.port)      // 端口
console.log(location.host)      //主机名加端口号
console.log(location.pathname) //路径部分
console.log(location.search)    //查询部分
console.log(location.hash)      //锚链接
console.log(location.href)      //完整的路径URL
location.assign("http://www.baidu.com") //跳转页面
location.replace("http://www.baidu.com") //替换 不能倒退
location.reload("http://www.baidu.com") //刷新网页，重新加载当前网页请求的资源
   protocol地址协议
   location.host 主机名+端口
   location.port 端口
   location.hostname 主机名
   location.hash锚链接
   location.href 完整的url链接
   location.pathname  路径
   location.search   查询字符串
   history.go（）
   history.back()  //后退
   history.forward()//前进
```

transitionend 监听

 

用户对于浏览器的一些操作或者是浏览器自身的一些行为

#### 小米翻页效果

```css
  <style>
        *{
            margin:0;
            padding:0;
            list-style: none;
        }
        .content{
            width: 1226px;
            height: 400px;
            margin:0 auto;

        }
        .content-box{
            width: 296px;
            height: 400px;
            background-color:#666;
            float:left;
            position: relative;
            margin: 5px;
        }

        .content-page{
            width: 296px;
            height: 400px;
            background-color: yellow;
            overflow: hidden;
        }
        .content-item{
            width: 2000px;
            height: 400px;
            /*background-color: red;*/
            float:left;
            transition: all 1s;
            overflow: hidden;
        }
        .content-item li{
            width: 296px;
            height: 400px;
            background-color: pink;
            float:left;
            color:#fff;
            font-size: 80px;
            text-align: center;
            line-height: 400px;
        }
        .dian{
            width:296px;
            height: 30px;
            background-color: blue;
            position: absolute;
            bottom:20px;
            left:0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .dian li{
            width: 20px;
            height: 20px;
            margin:0 10px;
            background-color: yellow;
            border-radius: 50%;
        }
        /*.dian li:hover{*/
            /*background:red;*/
        /*}*/
        .dian li.active{
            border:2px solid red;
            width:17px;
            height: 17px;
        }
        .prev,.next{
            width: 30px;
            height: 50px;
            background-color: #ccc;
            position: absolute;
            /*left:0;*/
            top:50%;
            text-align: center;
            line-height: 50px;
            font-size: 25px;
        }
        .next{
            right:0;
        }
    </style>
```

```html
 <div class="content">
        <div class="content-box">
            <div class="content-page">
                <ul class="content-item">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <ul class="dian">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
            <div class="prev">&lt;</div>
            <div class="next">&gt;</div>
        </div>
        <div class="content-box">
            <div class="content-page">
                <ul class="content-item">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <ul class="dian">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
            <div class="prev">&lt;</div>
            <div class="next">&gt;</div>
        </div>
        <div class="content-box">
            <div class="content-page">
                <ul class="content-item">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <ul class="dian">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="prev">&lt;</div>
            <div class="next">&gt;</div>
        </div>
        <div class="content-box">
            <div class="content-page">
                <ul class="content-item">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <ul class="dian">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="prev">&lt;</div>
            <div class="next">&gt;</div>
        </div>
    </div>
```

```js
 function fn(parent){
        var content=parent.querySelector(".content-item");
//        var pages=parent.querySelectorAll(".content-item li");
        var dians=parent.querySelectorAll(".dian li");
        var prev=parent.querySelector(".prev");
        var next=parent.querySelector(".next");
    //    console.log(content)
        dians.forEach(function(ele,index){
            ele.onclick=function(){
                for(var i=0;i<dians.length;i++){
                    dians[i].classList.remove("active")
                }
                ele.classList.add("active")
                content.style.marginLeft=-296*index+"px";
                num=index;
            }
        })
        function fn(){
                for(var i=0;i<dians.length;i++){
                    dians[i].classList.remove("active")
                }
                dians[num].classList.add("active")
            }

        var num=0
            next.onclick=function(){
                nextfn()
            }
            prev.onclick=function(){
                prevfn()
            }
            function prevfn(){
                num--;
                if(num==-1){
                    num=0;
                }
                content.style.marginLeft=-296*num+"px"
                fn();
            }
            function nextfn(){
                num++;
                if(num===dians.length){
                    num=dians.length-1;
                }
                content.style.marginLeft=-296*num+"px"
                fn();
            }
        }
    var content=document.querySelectorAll(".content-box")
    console.log(content)
    for(var i=0;i<content.length;i++){
        fn(content[i])
    }
```

## 节点

​    

```js
oul=document.querySelector("ul")

   li=oul.firstChild.nextElementSibling   //js获取第一个节点的第一个兄弟元素节点 li

   console.log(li)

   last=oul.lastElementChild    //获取最后一个元素节点 3号li

   console.log(last)

   last=oul.lastElementChild.previousElementSibling   // 获取最后一个元素节点的上一个兄弟元素节点 2号li

   console.log(last)
```

 

####    注释节点

   

```js
zhushi=oul.firstChild.nextSibling
   console.dir(zhushi)
   console.dir(zhushi.nodeName)        //#comment
   console.dir(zhushi.nodeType)        //8
   console.dir(zhushi.nodeValue)        //注释
```

####    元素节点

  

```js
 li=oul.firstElementChild        //获取第一个元素节点
   console.dir(li)
   console.log(li.nodeName)        //LI
   console.log(li.nodeValue)        //null
   console.log(li.nodeType)        //1
```

 

#### 文本节点

```js
   text=oul.firstChild
   console.dir(text)
   console.log(text.nodeName)      //#text
   console.log(text.nodeValue)      // 123456
   console.log(text.nodeType)      // 3
```

#### 文档节点

   

```js
console.log(document.nodeName)      //#document

   console.log(document.nodeType)      //9

   console.log(document.nodeValue)      //null
```

 

#### 属性节点

  

```js
attr=oul.firstElementChild
   console.log(attr.attributes[0])
   console.log(attr.attributes[0].nodeName)    //class
   console.log(attr.attributes[1].nodeValue)   //aa
   console.log(attr.attributes[1].nodeType)    //
```

####    文档树模型

   节点

   整个Dom文档中所有组成部分都称作节点

   document本身就是一个节点      文档节点

   每一个元素对象也都属于一个节点  元素节点

   元素中的文本内容也属于节点      文本节点

   每一个元素它的属性也是一个几点   属性节点

   每一个注释标签也是一个节点       注释节点    comment

   属性

####   关系属性

​           parentNode获取某个节点的父节点

​           childNodes子节点 获取某个节点的子节点

​          firsChild 获取某个节点的第一个子节点

​          firstElementChild 获取某个节点的第一个元素子节点

​           lastChild 获取最后一个子节点

​           lastElementChild 获取某个节点的最后一个元素子节点

​           nextSibling  获取某个节点的下一个兄弟节点

​           nextElementSibling 获取某个节点的下一个元素兄弟的节点

​           previousSibling 获取某个节点的上一个兄弟节点

​           previousElementSibling 获取某个节点的上一个元素兄弟节点



​           属性节点

​                  attributes 属性集合

####    信息属性

​             节点类型      节点【nodeType】    nodeName    nodeValue

​             元素节点      1                  元素的标签名    null

​             属性节点      2                  属性名         属性值

​             文本节点      3                  #text         文本内容

​             注释节点      8                  #comment      注释内容

​             文档节点      9                  #document      null

   方法  定义了节点的增删改



#### 添加节点

  

```js
 document.creatElement()   //创建一个元素对象 接收一个标签名，通过标签名创建并返回
   parent.appendChild()   //将某一个元素对象追加到当前对象所有子元素的后面
   parent//父级的意思
   parent.insertBefore(a,b)//将元素a插入到元素b的前面
   parent.replaceChild(a,b)  //将b元素替换为a元素
   //文档中创建节点
   let divs=document.createElement("div")
      document.body.appendChild(divs)
   divs.style.cssText="width:50px;height:50px;background:red"
   divs.innerHTML="创建节点"

   let box=document.querySelector(".box")
   let p=document.querySelector(".box p")
   console.log(p)
   obj=document.createElement("div")


```

####    在元素的后面追加节点

  

```js
   box.appendChild(obj)
   box.insertBefore(obj,p)
   obj.style.cssText="width:100px;height:100px;background:red"
```

####    元素外面的插入到box里面

   

```js
   let box=document.querySelector(".box")
   let p=box.children[0]
   let p=document.querySelector(".box p")
   let item=document.querySelector(".item")
   box.appendChild(item)
   box.insertBefore(item,p)

   //将p元素替换为item元素
   box.replaceChild(item,p)
   parent.removeChild()//移除某个子元素

   a.cloneNode() //克隆某个元素，返回克隆的元素，参数为true，返回克隆当前元素的子元素

let box=document.querySelector(".box")
    let p=box.children[0]
    box.removeChild()
```

#### 练习

```css
 <style>
        .container{
            width: 500px;
            height: 500px;
            border:1px solid red;

        }
        .item{
            height:50px;
            width: 50px;
            background-color: rgb(255,255,30);
            /*text-align: right;*/
            margin:15px;
            position: relative;
            text-align: right;
            float:left;

        }
        .item span{
            color:#fff;
            font-size: 30px;
            cursor: pointer;

        }
    </style>
```

```html
<input type="button" value="增加一个" class="apend">
<input type="button" value="增加指定个数" class="apends">
<input type="number" max="10" min="1" value="2" class="num">
<input type="button" value="清空" class="clear">

<div class="container">
    <!--<div class="item">-->
        <!--<span>X</span>-->
    <!--</div>-->
    
</div>
```

```js
//   console.log(Math.floor(Math.random()*(40-35)+35+1))
//a~b之间的随机数

//   Math.random()*(a-b)+b+1)

    let append=document.querySelector(".apend")
    let appends=document.querySelector(".apends")
    let box=document.querySelector(".container")
//    console.log(box)
    let num=document.querySelector(".num")
    let clears=document.querySelector(".clear")
//    let item=document.querySelector(".item")
    let n=0
      let color=[0,3,6,9,"c","f"]
       function getColor(){
           var str="#"
            for(var i=0;i<6;i++){
                str+=color[Math.floor(Math.random()*color.length)]
            }
           return str;
        }
        console.log(getColor())
        append.onclick=creatFn;

        function creatFn(){
            n++
            divobj=document.createElement("div")
            divobj.className="item"
            divobj.innerHTML=n
            divobj.style.background=getColor();
            box.appendChild(divobj)
            spanobj=document.createElement("span")
            spanobj.innerHTML="X";
            divobj.appendChild(spanobj);
            spanobj.onclick=function(){
                box.removeChild(this.parentNode)
            }
        }

        appends.onclick=function(){
            var length=num.value;
            console.log(length)
            for(var i=0;i<length;i++){
                creatFn()
            }
        }

        clears.onclick=function(){
            box.innerHTML=""
        }
```

#### 事件



```js
    let box=document.querySelector(".box")

    box.onclick=function(e){
//        鼠标距离屏幕的位置
//        console.log(e.screenX)
//        console.log(e.screenY)

//        鼠标距离浏览器窗口的位置
//        console.log(e.clientX)
//        console.log(e.clientY)
//        鼠标距离文档原点的位置
//        console.log(e.pageX)
//        console.log(e.pageY)
//        鼠标距离事件源的位置
//        console.log(e.offsetX)
//        console.log(e.offsetY)
    }
```

```js
   let box=document.querySelector(".box")
//    box.onclick=function(){
//        console.log("鼠标按下事件")
//    }
   function fn(){
       alert(1)
   }
   function fn1(){
       alert(2)
   }
   box.addEventListener("click",fn)
   box.addEventListener("click",fn1)
   box.removeEventListener("click",fn1)    //移除fn1
demo.attachEvent("onclick",fn) 低版本的IE以下8浏览器事件监听，现有浏览器不识别

demo.detachEvent("onclick",fn)  //移除
```

```js
   let box=document.querySelector("div");
     box.onkeydown=function(e){
       let o=e.keyCode
//         console.log(String.fromCharCode(o))
        console.log(o)
      }

//按下ctrl和回车弹出1

box.onkeydown=function(e){
   if(e.ctrlKey){
       if(e.keyCode==13){
           alert(1)
       }
   }
}
```

#### 留言区案例

```css
<style>
        *{
            margin:0;padding:0;
        }
        .box{
            width: 500px;
            height: 300px;
            position: relative;
        }
        #text{
            width: 500px;
            height: 300px;
        }
        .cont{
            position: absolute;
            bottom:0;
            right:0;
        }
        .liuyan{
            width: 500px;
            height:500px;
            border:1px solid red;
        }
        .liuyan h3{
            text-align: center;
        }
        .liuyan h4{
            font-weight: normal;
        }

    </style>
```

```html
<div class="box">
    <textarea name="" id="text" cols="30" rows="10">请输入留言</textarea>
    <div class="cont"><span>0</span>/40</div>
</div>
<input type="button" value="提交" id="tijiao">
<div class="liuyan">



</div>
```

```js
let box=document.querySelector(".box")
    let cont=document.querySelector(".cont span")
    let text=document.querySelector("#text")
    var liuyan=document.querySelector(".liuyan")
    let tijiao=document.querySelector("#tijiao")
    text.onfocus=function(){
        if(text.value=="请输入留言"){
            text.value=""
        }
    }
    text.onblur=function(){
        if(text.value==""){
            text.value="请输入留言"
        }else{
            text.value
        }
    }
    text.onkeydown=text.onkeyup=function(){
        let val=this.value;
        let len=val.length;
        cont.innerHTML=len;
        if(len>40){
            cont.innerHTML=40
            this.value=val.slice(0,40)
        }
    }
    tijiao.onclick=onkeydown=function(e){
        var flag=false;
        if(e.type=="keydown"){
            if(e.ctrlKey&&e.keyCode===13){
                flag=true;
                console.log(1)
            }
        }else if(e.type="click"){
            flag=true;
        }
        if(flag){
            let obj=document.createElement("h4");
            let first=liuyan.firstElementChild
            let val=text.value;
            text.value="请输入留言"
            obj.innerHTML=val;
            if(first==null){
                liuyan.appendChild(obj)
            }else{
                liuyan.insertBefore(obj,first)
            }
            cont.innerHTML=0
        }
    }
    let ot=null;
    liuyan.onclick=function(e){
        let target=e.target;
        if(target.nodeName=="H4"){
            if(ot){
                ot.style.background=""
            }
            target.style.background="red"
            ot=target
        }
    }
    document.body.onclick=function(e){
        let target=e.target;
        if(target.nodeName!="H4"){
            if(ot){
                ot.style.background=""
            }
        }
    }
```

## 事件委派

####    事件流

   触发任何一个元素身上的事件的时候，他的前辈元素以及整个

   页面都会按照特定的方式来响应这个事件，这种事件触发的形式我们称为事件流

####    冒泡型事件流

   默认存在的，从最明确的事件源（小的元素）到最不明确的事件源依次触发

####    捕获型事件流

​       只能在addEventListener 设置第三个参数为true 从最不明确的事件源依次触发

​       捕获型事件流执行完成之后依然还是会触发冒泡型事件流只能在addEventListener 设置第三个参数为true 从最不明确的事件源依次触发

   阻止事件流的传播，使用e.stopPropagation()

   在旧版本的IE浏览器 window.event.cancelBubble=true;

​    addEventListener

​    tagName 获取标签名

​    nodeName 获取元素名标签名字

####    事件委派target.e

   当我们需要给很多子元素添加事件的时候，我们选择给父元素添加一个事件，

   在父元素中会找到真正触发事件的子元素，并且对它做相应的操作，这种添加事件的形式称为事件委派

   利用到了事件流和 e.target 可以获取到直接事件源（最先触发事件的元素也就是冒泡的最底端）

   当子元素数量非常大的时候或者是子元素是由js后期创建的时候

####  天猫导航事件冒泡

```css
<style>
        body{
            height: 3000px;
        }
        .banner{
            width: 1230px;
            height: 500px;
            background-color:red;
            margin:0 auto;
        }
        .left{
            width: 200px;
            height: 500px;
            background-color:blue;
            float:left;
            margin-left:50px;
        }
        .right{
            width: 500px;
            height: 500px;
            background-color: pink;
            float:left;
            display: none;
        }
        .box{
            width: 100px;
            height: 100px;
            background-color: red;
            position: fixed;
            bottom:20px;
            right:20px;
            opacity: 0;
            transition: all 1s;
            text-align: center;
            line-height: 100px;
            color:#fff;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
```

```html
 <div class="banner">
        <div class="left"></div>
        <div class="right"></div>
    </div>

<div class="box">回到顶部</div>
```

```js
let banner=document.querySelector(".banner")
    let left=document.querySelector(".left")
    let right=document.querySelector(".right")

    left.onmouseover=function(){
        right.style.display="block"
    }
    left.onmouseout=function(e){
        e.stopPropagation()
//        right.style.display="none"
    }
    right.onmouseover=function(){
        right.style.display="block"
    }

    banner.onmouseout=function(){
        right.style.display="none"
    }



//回到顶部
    let box=document.querySelector(".box")
    let obj;
    window.onscroll=function(){
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        let st=obj.scrollTop;
        if(st>400){
            box.style.opacity=1
        }else{
            box.style.opacity=0
        }
    }
    let bb
    box.onclick=function(){
         bb=setInterval(dingbuFn,50)
    }
    function dingbuFn(){
        let now=50
        obj.scrollTop-=now
        if(obj.scrollTop<=0){
            clearInterval(bb)
        }
    }


//    onmouseenter   鼠标移入事件
//    onmouseleave   鼠标移出事件  不受事件流影响
```

