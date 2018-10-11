"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var menus = [{ name: "ピザ", price: 800, calorie: 700 }, { name: "すし", price: 1000, calorie: 600 }, { name: "コーラ", price: 300, calorie: 500 }, { name: "お茶", price: 200, calorie: 400 }];

// map
var menuList = menus.map(function (menu) {
  return menu.name + " " + menu.price + "\u5186 (" + menu.calorie + "kcal)";
});

exports.default = menuList;