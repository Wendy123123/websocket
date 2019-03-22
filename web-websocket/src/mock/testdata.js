const Mock = require('mockjs');
const { Random } = Mock;

// mock一组数据
let Data = [];

for (let i = 0; i < 100; i++) {
  Data.push({
    key: i,
    name: Random.cname(),               //随机生成中文姓名,
    date: Random.date(),                //随机生成日期,
    address: Random.sentence(5),        //随机生成一段话
  });
}

//数据列表
export const dataList = (options) => {
  console.log("dataList options", options);
  return {
    Data
  }
}

//删除数据
export const deleteData = (options) => {
  console.log("deleteData options", options.body);
  let id = parseInt(JSON.parse(options.body).id);
  Data = Data.filter((val) => {
      return val.key != id;
  });
  return {
    Data
  }
}

//修改数据
export const updateData = (options) => {
  console.log("updateData options", options.body);
  let editorObj = JSON.parse(options.body).params;
  Data = Data.map(val => { 
      return val.key == editorObj.key ? editorObj : val ;
  });
}

//增加数据
export const addData = (options) => {
  console.log("addData options", options.body);
  let obj = JSON.parse(options.body).params;
  obj.key = Data.length;
  Data = Data.concat(obj); 
  return {
    Data
  }
}
 
//id查询数据
export const getDataById = (options) => {
  console.log("getDataById options", options.body);
  let id = parseInt(JSON.parse(options.body).id);
  let dataObj = Data.filter(function(val) {
      return val.key == id;
  });
  return {
    dataObj
  }
}
