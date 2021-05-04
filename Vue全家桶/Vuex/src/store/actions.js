
export default {

  aupdata(context, paylaod) {

    // setTimeout(()=>{

    //   context.commit('updata_info')
    //   console.log( paylaod.type)
    //   paylaod.success()

    // },1000)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updata_info')
        console.log(paylaod)
        resolve('111')
      }, 1000)
    })

  }

}