<template>
  <div>
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        v-bind="formItemLayout"
        label="姓名"
      >
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ message: '请输入正确的姓名' }],
              initialValue: editorData && editorData.name ? editorData.name : ''
            }
          ]"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="日期"
      >
        <a-date-picker 
          v-decorator="['date', {
            rules: [{ type: 'object'}]
          }]" />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
      >
        <span slot="label">
          简介&nbsp;
          <a-tooltip title="针对XXX的品牌家简短介绍">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input
          v-decorator="[
            'address',
            {
              rules: [{ required: false, message: '', whitespace: true }],
              initialValue: editorData && editorData.address ? editorData.address : ''
            }
          ]"
        />
      </a-form-item>
      
      
      <a-form-item v-bind="tailFormItemLayout">
        <a-button
          type="primary"
          html-type="submit"
        >
          保存
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      editorData:{}
    };
  },
  
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },

  mounted(){
    this.getDataById();
  },
  
  methods: {
    
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {

        if(err){
          return;
        }

        const enterData = {
          ...values,
          'date': values['date'].format('YYYY-MM-DD'),
        }

        if(this.$route.params && this.$route.params.editorkey){
          enterData.key = this.$route.params.editorkey;
          this.updateData(enterData)
        } else { 
          this.addData(enterData)
        }
      });
    },

    async addData(params = {}){
      await this.$http.post("/api/addData", { params })
      this.$router.push({name: 'home'}) 
    },

    async updateData(params = {}){
      await this.$http.post("/api/updateData", { params })
      this.$router.push({name: 'home'}) 
    },

    async getDataById(){
      let dataKey = this.$route.params.editorkey;
      const resp = await this.$http.post("/api/getDataById", {'id': dataKey})
      this.editorData = resp.data.dataObj[0]
    }
  },
};
</script>