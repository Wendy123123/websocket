import {
  shallowMount,
  mount,
  createLocalVue,
  flushPromises,
  axios,
  Mock
} from './utils/mock-setup';
import HelloWorld from "@/components/HelloWorld.vue";

// MockJs 可以通过axios去获取数据，也可以动态生成数据
// let data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1
//     }]
// });

// 新创建一个vue实例，来操作测试逻辑，避免污染原有vue实例
// const localVue = createLocalVue()

// jest.fn() mock一个函数，返回值默认undefined
// const clickMethodStub = jest.fn();

// mock一个axois请求，需要返回promise对象，否则会报错
// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve(() => {data:3}))
// }))


describe("Helloworld.vue", () => {
  
  it('测试首页列表的axios数据通信',   async () => {
    const resp = await axios.get('/api/dataList')

    const wrapper = shallowMount(HelloWorld, {
      stubs: ['router-link', 'a-table', 'a-button']
    })
    wrapper.setData({ testData: resp})
    // console.log(JSON.stringify(wrapper.vm.testData))

    await flushPromises()

    expect(wrapper.html()).toContain('增加');
    expect(JSON.stringify(wrapper.vm.testData)).toContain('\\');
  })
})