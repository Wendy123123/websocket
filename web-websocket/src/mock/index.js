const Mock = require('mockjs');

import {
  dataList,
  deleteData,
  updateData,
  addData,
  getDataById
} from './testdata'

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/dataList', 'get', dataList);
Mock.mock('/api/deleteData', 'post', deleteData);
Mock.mock('/api/addData', 'post', addData);
Mock.mock('/api/getDataById', 'post', getDataById);
Mock.mock('/api/updateData', 'post', updateData);

Mock.mock('/user/userInfo', 'get', require('./json/userInfo'));

