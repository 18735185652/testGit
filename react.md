## React笔记

## 一、React的安装

**1.npm install -g create-react-app**

**2.create-react-app my-app**

**3.cd my-app**

**4.npm  start**

## 二、React初体验

```jsx
import React from 'react';
import ReactDom from 'react-dom';
/* render的含义就是把一个react元素渲染到dom内部 */ 
/* jsx javascript 和html（xml一种）混合写法 */
ReactDom.render(
    <h1>hellow</h1>,
    document.querySelector("#root")
)
```

```jsx
//1. 标签类型  对象属性  子元素
//1. 此处写的属性名都要转成驼峰命名法 backgroundColor
//2. 有些属性是JS关键字，要换种写法 class-className
let ele = <h1>hellow</h1>
console.log(ele)

/* 内部写法 标签为div，属性attr为null，子元素为span */
let _ele2 = React.createElement('div',null,
[React.createElement('span',null,['hellow'])])
console.log(_ele2 ) // type h1 children.props span

ReactDom.render(_ele2,document.querySelector('#root'));


/* 经过webpack编译过后，最终结果为 */

let eleobj = {
    type:'div', 
    props:{
        className:'red',
        id:1,
        children:['hellow',
        {
            type:'span',
            props:{
                className:'blue',
                children:['word']
            }
        }]
    }
}

function render(eleobj,container){
     let {type,props} = eleobj;  
     let ele = document.createElement(type);
      
     for(let attr in props){
         if(attr === 'children'){
            props[attr].forEach(function(item){
                if(typeof item==='string'){
                    let textNode = document.createTextNode(item);
                    ele.appendChild(textNode);
                }else{
                    render(item,ele); //如果有子元素，递归继续遍历
                }
              
            })    
         }else if(attr === 'className'){
            ele.setAttribute('class',props[attr]);
         }else {
            ele.setAttribute(attr,props[attr])
         }
        
     } 
     container.appendChild(ele);
}  
render(eleobj,document.querySelector('#root')); 
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

let names = ['大毛','','三毛'];
//{} 里面放的是JS表达式，表达式是由变量的运行符组合而成
// 1+1 a+b fn() 必须返回一个值

let style = {
    background:'red',
    fontSize:'20px'
}

ReactDOM.render(<div>
    {names.map(function(item,index){
        /* 为空不做任何操作 */     
        return item.length>0?<span style={style} className="red" key={index}>{item}</span>:null
    })}
</div>,document.querySelector("#root"));
```

**1.react是一个用户界面的库**

**2.react元素 JSX元素  其实就是一个用JS来描述界面的对象**

**react是由React元素 React组件**

1.首字母小写，凡是首字母小写的都会被认为是React元素

2.大写会认为是组件

## 三、React组件

### 组件的二种定义方式，以及他们之间的区别 

1.组件定义的第一种方法是函数，参数是属性对象

   {msg:"hellow",id:"5"}

2.组件的首字母一定是大写

3.组件定义完后可以像React元素一样使用

组件的渲染过程

1. 封装props对象

2. 调用组件函数，得到返回的React元素  

3. ReactDom把React元素转换成真是的DOM元素并且插入到目标容器内 

   ```jsx
   import React from 'react';
   import  {render} from 'react-dom'; /* 此处render是解构 */
   let Message = (props) => {
       return <h1 style = {props.style}>{props.msg}</h1>
   }
   /* 在index.html 里面定义全局的app window.app = document.querySelector("#app  ") */
   render(<Message msg = "hellow" id = "5" style = {{color:'red'}}/>,window.app);
   
   
   /* 转换过程 
       let str = 'msg="hellow" id="5"'
       let queryString = require('querystring');
       let obj = queryString.parse(str,' ','=');
       console.log(obj) */
   
   ```

```jsx
import React,{Component} from 'react';
import {render} from 'react-dom';

//计时器 Clock
//1.函数方式生命的组件是静态的，是不能动的
let Clock = () => {
    return <h1>{new Date().toLocaleString()}</h1>
}
setInterval(function(){
    render(<Clock/>,window.app);
},1000)



//2.通过类来声明组件 类需要继承自Component
class Clock extends Component{
    constructor(){
        super();
        //自定义组件状态对象
        this.state = {time:new Date().toLocaleString()}
    }
//声明周期函数 组件挂载完成
    componentDidMount(){
        //每秒会重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法重新渲染
        window.setInterval(()=>{
            this.setState({time:new Date().toLocaleString()})
        },1000)
    }
// render方法值得是该组件将要如何渲染,一定要返回一个React元素，而且只能返回一个React元素
    render() {
        return <h1>{this.state.time}</h1>;
    }
}

render(<Clock/>,window.app);
```

**默认props属性对象**

```jsx
import React,{Component} from 'react';
import {render} from 'react-dom';
/* 通过终端安装 npm install prop-types -S 第三方库*/
import PropTypes from 'prop-types'
class Person extends Component{
    constructor(){
        super();
        /* 为组件增加一个初始的状态 默认为true */
        this.state = {happy:true}
    }

    //默认属性对象
    static defaultProps = {
        name:'无名'
    }
    //如果定义组件的时候希望传入组件的属性有类型和是否必填的限制
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }
   /* 这里推荐写箭头函数，this指针不会发生变化 */
    handleclick = ()=>{
        this.setState({
            happy:!this.state.happy
        })
    }
    render(){
        let heart = this.state.happy?'开心':'难过'
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>心情：{heart}</p>
                /* 点击按钮切换心情 */
                <button onClick={this.handleclick}>改变</button>
            </div>
        )
    }
}
render(<Person name='gaopeng' age={25}/>,window.app) //不传age会报错
```

双向数据绑定案例

```jsx
import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'
/* 受控组件 表单组件 受状态控制
   非受控组件 

*/ 
class Input extends React.Component{
    constructor(){
        super();
        this.state = {val:'66'};
    }
    handleChange = (event)=>{
        let val  = event.target.value;
        this.setState({val})
    }
    render(){
        return (
            <div>
                <p>{this.state.val}</p>
                <input type="text" onChange = {this.handleChange } value={this.state.val}/>
            </div>
        )
    }
}
render(<Input/>,window.app)

/*加减小案例 受控组件*/

import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            a:0,
            b:0,
            result:0
        }
    }
    handleChangeA = (event)=>{
        this.setState({
            a:parseInt(event.target.value),
            result:parseInt(event.target.value)+this.state.b
        })
    }
    handleChangeB = (event)=>{
        this.setState({
            b:parseInt(event.target.value),
            result:parseInt(event.target.value)+this.state.a
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.a} onChange={this.handleChangeA}/>+
                <input type="text" value={this.state.b}  onChange={this.handleChangeB}/>=
                <input type="text" value={this.state.result}/>
            </div>
        )
    }
}


render(<Sum/>,window.app)



/*加减小案例 非受控组件 */

import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'

class Sum extends Component{
    handleChange = () => {
        let a = parseInt(this.a.value||0);
        let b = parseInt(this.b.value||0);
        this.result.value = a + b;
    }
    render(){
        return (
            /* ref等于一个函数，表示当元素被挂载到页面中之后会立刻调用此函数，并传入渲染后的DOM元素 */
            <div onChange={this.handleChange}>
                <input type="text" ref={ref=>this.a=ref} />+
                <input type="text" ref={ref=>this.b=ref}  />=
                <input type="text" ref={ref=>this.result=ref} />
            </div>
        )
    }
}
render(<Sum/>,window.app)
```

## **复合组件**

```jsx
import React,{Component} from 'react';
import {render} from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
/* 单项数据流：数据只能从父组件传给子组件 */
/* 复合组件 */
/* npm install bootstrap -S */
class Penel extends Component{
    constructor(){
        super()
        this.state = {color:'black'}
    }
    setColor(color){
        this.setState({color:color})
    }
    render(){
        return (
            <div>
                <button onClick={()=>{this.setColor("red")}}>红</button>
                <button onClick={()=>{this.setColor("green")}}>绿</button>
                <PenelHead color={this.state.color} head={this.props.head}/>,
                <PenelBody body={this.props.body}/>,
                <PenelFooter footer={this.props.footer}/>
            </div> 
        )
    }
}
class PenelHead extends Component{
    render(){
        return <div style={{color:this.props.color}} className="panel-heading"> {this.props.head} </div>
        
    }
}
class PenelBody extends Component{
    render(){
        return <div className="panel-body">{this.props.body} </div>
    }
}
class PenelFooter extends Component{
    render(){
        return <div className="panel-footer">{this.props.footer}</div>
    }
}

render(<Penel head="头" body="体" footer="尾"/>,window.app)

```

## React生命周期

```jsx
import React,{Component} from 'react';
import {render} from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

/* 组件的完整生命周期 */
/* 一些代码的编写顺序 */

class Counter extends Component{
    constructor(){
        super();
        this.state = {num:0};
    }
    //组件将要被挂载
    componentWillMount(){
        console.log("1.componentWillMount 组件将要被挂载")
    }

    handleClick=()=>{
        /* setState方法是异步的，所以不能再赋值之后立即获取最新的state值,可以在回调函数中获取最新状态的值 */
        this.setState({
            num:this.state.num+1 
        },()=>{
            console.log(this.state.num);
        })
        console.log(this.state.num);
    }
    //newProps  新的属性对象
    //newState  新的状态对象
    shouldComponentUpdate(newProps,newState){
        console.log("4.shouldComponentUpdate 组件是否要进行更新")
        if(newState.num%5 === 0){
            return true;
        }else{
            return false;
        }
    }
    componentWillUpdate(){
        console.log("5.componentWillUpdate 组件将要更新")
    }
    componentDidUpdate(){
        console.log("5.componentDidUpdate 组件更新完成")
    }
    render(){
        console.log('2.render 组件挂载')
        return (
            <div style={{border:'1px solid red',padding:'5px '}}>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>+</button>
                <SubCounter num={this.state.num}/>
            </div>
        )
    }
    componentDidMount(){
        console.log("3.componentDidMount 组件挂载完成")
    } 
}

//子计数器
class SubCounter extends Component{

    componentWillReceiveProps(newProps){
        console.log('6.SubCounter componentWillReceiveProps 组件将要接收到新的属性对象' )
    }
    shouldComponentUpdate(newProps,newState){
        console.log(newProps)
        if(newProps.num%3===0){
            return true;
        }else{
            return false;
        }
    }
    render(){
        return (
            <div style={{border:'1px solid blue'}}>
                 <p>{this.props.num} </p>
            </div>
        )
    }
}

render(<Counter/>,window.app)
```

