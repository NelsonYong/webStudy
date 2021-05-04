class school {
  constructor(name) {
    this.name = name
  }
  show(){
    console.log(this.name+'----')
  }

}

class user extends school{
  constructor(name,username){
    super(name)
    this.username=username
    this.name=name
  }

  showinfo(){
    console.log(this.username+'在'+this.name)
  }
}

const xiao =new user('华南理工大学','小明')
xiao.showinfo()
xiao.show()