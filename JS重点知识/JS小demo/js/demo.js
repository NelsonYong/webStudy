CreateImageEl()
let ImgList = document.getElementsByClassName('wf-item')
let ImgLength = ImgList.length
let arr = []

window.onload = function () {

  setImgPos()

  function setImgPos() {
    let item
    for (let index = 0; index < ImgLength; index++) {
      item = ImgList[index]
      console.log(item);
      item.style.width = '232px'
      if (index < 5) {
        arr.push(ImgList[index].offsetHeight)
        item.style.top = '0px'
        if ((index + 1) % 5 === 1) {
          item.style.left = 0
        } else {
          item.style.left = index * (232 + 10) + 'px'
        }
      } else {
        minIndex = getMinIndex(arr)
        item.style.left = ImgList[minIndex].offsetLeft + 'px'
        item.style.top = (arr[minIndex] + 10) + 'px'
        arr[minIndex] += (item.offsetHeight + 10)
      }
    }
  }

  function getMinIndex(arr) {
    return [].indexOf.call(arr, Math.min.apply(null, arr))
  }
}



function CreateImageEl() {
  const w=190
  let wrap = document.getElementById('wrap')
  for (let index = 1; index < 60; index++) {
    const node = document.createElement('div')
    node.classList.add('wf-item')
    node.style.width=w+'px'

    const el = document.createElement('img')
    el.setAttribute('src', './waterfall/' + index + '.jpg')
    el.onload=function (){
      el.style.height=el.height*190/el.width+'px'
      el.style.width='100%'
      //console.log(el.height*190/el.width+'px');
    }
    el.onclick=(event)=>{

      console.log(event);

    }
    node.appendChild(el)
    wrap.appendChild(node)
  }

  console.log(wrap)

}