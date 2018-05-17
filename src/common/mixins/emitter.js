"use strict";
// exports.__esModule = true; // 标记这是一个 ES2015 输出的模块

/**
 * 
 * @param {组件名称} componentName 
 * @param {事件名} eventName 
 * @param {数据} params 
 * 寻找所有子孙组件中，组件名为 componentName 的组件，若找到其组件，则 emit 触发 eventName 事件，数据为 params
 */
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if(name === componentName){
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: {
    // 寻找所有父组件，直至找到要找的父组件，并在其身上触发指定事件
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      // 搜索 componentName
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if(parent){
          name = parent.$options.componentName
        }
      }
      if(parent){ // $emit 调用，传两个参数的，按数组形式传
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params)
    }
  }
}