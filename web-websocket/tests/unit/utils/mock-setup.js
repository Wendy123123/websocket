import {
  shallowMount, 
  mount, 
  createLocalVue,
  config
} from "@vue/test-utils";
import flushPromises from 'flush-promises'
import axios from 'axios';
import '@/mock/index';
let Mock = require('mockjs');

export {
  shallowMount,
  mount,
  config,
  createLocalVue,

  flushPromises,

  axios,
  
  Mock
}