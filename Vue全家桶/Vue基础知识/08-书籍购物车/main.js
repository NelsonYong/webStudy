const app= new Vue({
  el:'#app',//管理元素
  data:{
    books:[
      {
        id:1,
        name:"滑稽论",
        date:'2020-1-1',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:"搞笑王子",
        date:'2020-1-2',
        price:95.00,
        count:1
      },
      {
        id:3,
        name:"逗比公主",
        date:'2020-1-3',
        price:80.00,
        count:1
      },
      {
        id:4,
        name:"痴情国王",
        date:'2020-1-4',
        price:75.00,
        count:1
      }
    ],
    allPrice:0,
    flag:false
  },
  methods: {
    //for循环的时候， let item of books可以直接拿到数组的下标元素

    add(index){
      this.books[index].count++
      this.Price(this.books[index].price)
    },
    reduce(index){
      this.books[index].count--
      this.Price(-this.books[index].price)
    },
    delect(index){
      this.Price( -(this.books[index].count*this.books[index].price))
      this.books[index].count=0
      this.books.splice(index,1)
    },
    Price(price){
      this.allPrice=this.allPrice+price
    },
    getFirstPrice(){
      this.books.forEach(key => {
      this.allPrice=this.allPrice+key.price
      });
    }
  },
  mounted () {
    this.getFirstPrice()
  },
  computed: {
    totalPrice(){
      return this.allPrice.toFixed(2)
    }
    
  },
  filters: {
    //过滤器
    showPrice(price){
      return price.toFixed(2)
    }
  }
})   