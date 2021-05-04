interface Config {
  type: string,
    url: string,
    dataType: string,
    async :boolean,
      data ? : string
}

function Ajax(config: Config) {
  const xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, config.async);
  xhr.send(config.data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("请求成功");
      if (config.dataType == 'json') {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.responseText);
      }
    } else {
      console.log("请求异常");

    }
  }
}
export{Ajax}