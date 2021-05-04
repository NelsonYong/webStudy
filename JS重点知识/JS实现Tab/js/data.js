
const BrowTitle='TabDemo'

const MainTitle='书单'

const Data=[
  {
    title:'HTML',
  },
  {
    title:'CSS',
  },
  {
    title:'Less',
  },
  {
    title:'JQuery',
  },
  {
    title:'Vue',
  },
  {
    title:'React',
  },
  {
    title:'Angular',
  },
  {
    title:'Webpack',
  },
  {
    title:'浏览器',
  },
  {
    title:'联系商家',
  },
  {
    title:'联系商家',
  }
]

const context=[
  {
    imgUrl:'./img/1.jpg',
    name:'HTML书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'CSS书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'Less书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'JQuery书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'Vue书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'React书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'Angular书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'Webpack书本',
    price:100
  },
  {
    imgUrl:'./img/1.jpg',
    name:'浏览器书本',
    price:100
  },
  {
    imgUrl:'./img/fan4.jpg',
    name:'联系商家',
    price:0
  },
  {
    imgUrl:'./img/fan4.jpg',
    name:'联系商家',
    price:0
  },
]

function getData(){
  return Data
}
function getContext(){
  return context
}
function GetTitle(){
  return {broT:BrowTitle,mT:MainTitle}
}