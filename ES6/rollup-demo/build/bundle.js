(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  // import util1 from './util1'
  // import {
  //   fn1,
  //   fn2
  // } from './util2'

  // console.log(util1);
  // fn1()
  // fn2()

  // [1, 2, 4].map(item => item + 1)

  var Animal = function () {
    function Animal(name) {
      classCallCheck(this, Animal);

      this.name = name;
    }

    createClass(Animal, [{
      key: 'eat',
      value: function eat() {
        console.log(this.name + 'eat');
      }
    }]);
    return Animal;
  }();

  var Dog = function (_Animal) {
    inherits(Dog, _Animal);

    function Dog(name) {
      classCallCheck(this, Dog);

      var _this = possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name));

      _this.name = name;
      return _this;
    }

    createClass(Dog, [{
      key: 'bar',
      value: function bar() {
        console.log(this.name + 'bar');
      }
    }]);
    return Dog;
  }(Animal);

  var hashiqi = new Dog('哈士奇');
  hashiqi.eat();
  hashiqi.bar();

})));
