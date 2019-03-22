<template>
  <div>
    <div>
      <a-button type="primary"><router-link :to="{name:'addData'}">增加数据</router-link></a-button>
    </div>
    <a-table :columns="columns" :dataSource="testData" :scroll="{ x: 1500, y: 300 }">
      <span slot="action" slot-scope="text, record">
        <a  href="javascript:;" @click="deleteData(text.key)">{{text.key}}删除</a>
        <a-divider type="vertical" />
        <router-link :to="{name:'editorData', params: {editorkey: text.key}}">{{text.key}}修改</router-link>
      </span>
    </a-table>
  </div>
</template>

<script>
import axios from 'axios';
const columns = [
  { title: '姓名', width: 70, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '日期', width: 130, dataIndex: 'date', key: 'date', fixed: 'left' },
  { title: '简介 1', dataIndex: 'address', key: '1', width: 150 },
  { title: '简介 2', dataIndex: 'address', key: '2', width: 150 },
  { title: '简介 3', dataIndex: 'address', key: '3', width: 150 },
  { title: '简介 4', dataIndex: 'address', key: '4', width: 150 },
  { title: '简介 5', dataIndex: 'address', key: '5', width: 150 },
  { title: '简介 6', dataIndex: 'address', key: '6', width: 150 },
  { title: '简介 7', dataIndex: 'address', key: '7', width: 150 },
  { title: '简介 8', dataIndex: 'address', key: '8' },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 150,
    scopedSlots: { customRender: 'action'},
  },
];

export default {
  data() {
    return {
      testData: [],
      columns,
    }
  },
  mounted(){
    this.getDataList();
  },
  methods:{

    async getDataList(){
      const resp = await axios.get("/api/dataList");
      this.testData = resp.data.Data;
    },

    async deleteData(id){
      const resp = await axios.post("/api/deleteData", { id })
      this.testData = resp.data.Data;
    }
  }
}
</script>