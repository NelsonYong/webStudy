(function () {

  require.config({
    baseUrl: '',
    paths: {
      "one": './modules/one',
      "two": './modules/two',
    }
  })
  require(['two'],function(two){})
})()

