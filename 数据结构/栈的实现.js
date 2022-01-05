// 先进后出 后进先出 使用数组模拟出入栈

const stack=[]

// 入栈
stack.push(1)
stack.push(2)

// 出栈
const item1 = stack.pop()
const item2 = stack.pop()


// 使用场景  先进后出 后进先出  

// 一、有效的括号  ((()))
// 遍历字符串，左括号入栈，右括号出栈，栈空则有效

// js的解释器使用的是调用堆栈的方法
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[]
    if(s.length % 2 ===1){
        return false
    }
    for(let i=0;i<s.length;i+=1){
        const c = s[i]
        if(c==="(" || c==='[' || c==='{'){
            stack.push(c)
        }else{
            // 取出栈顶元素
            const t = stack[stack.length-1]
            if(t==='(' && c===')' || t==='['&& c===']' || t==='{' && c==='}'){
               stack.pop()
            }else{
                 return false
            }
        }
    }
    return stack.length===0
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function(s) {
  if(s.length % 2 ===1) return false
    const char={
        '(':')',
        '[':']',
        '{':'}'
    }
    const charts = []
    const len = s.length
    for(let i =0;i<len;i+=1){ 
        if(/\(|\{|\[/g.test(s[i])){
            charts.push(s[i])
        }else{
            if(s[i]=== char[charts[charts.length-1]]){
                charts.pop()
            }
            else{
                return false
            }
        }
    }

    return charts.length===0
 
};
