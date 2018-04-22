import Vue from 'vue';

export default class Component {
  constructor() {
    this.name = 'Component';

    this.components = {
      layout: [],
      container: [],
      menuItem: [],
      common: []
    };
  }

  register(Component, type = 'common') {
    if (Component.name === undefined) {
      throw `Missing prop name in component`;
    }

    console.log(Component.name);

    Vue.component(Component.name, Component);

    this.components[type].push({
      name: Component.name,
      component: Component
    });

    return this.components;
  }

  get(type, name) {
    return this.components[type].find(com => com.name === name);
  }
}