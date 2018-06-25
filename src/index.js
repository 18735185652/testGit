import React from 'react';
// import ReactDom from 'react-dom';
/* render的含义就是把一个react元素渲染到dom内部 */ 
/* jsx javascript 和html（xml一种）混合写法 */
let ele = <h1>hellow</h1>
console.log(ele)

// let _ele2 = React.createElement('div',null,
// [React.createElement('span',null,['hellow'])])
// console.log(_ele2 )

// let _ele2 = <div><span>hellow react</span></div>

//1.标签类型  对象属性  子元素
//1. 此处写的属性名都要转成驼峰命名法 backgroundColor
//2. 有些属性是JS关键字，要换种写法 class-className
// let _ele2 = React.createElement('div',{className:'red'},['hellow']);

/* 最终的react元素是这样的 */
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
                    render(item,ele);
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

// ReactDom.render(_ele2,document.querySelector('#root')); 