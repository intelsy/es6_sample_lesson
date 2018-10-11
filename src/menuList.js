const menus = [
  {name: "ピザ", price: 800, calorie: 700},
  {name: "すし", price: 1000, calorie: 600},
  {name: "コーラ", price: 300, calorie: 500},
  {name: "お茶", price: 200, calorie: 400},
];

// map
const menuList = menus.map((menu) => {
  return `${menu.name} ${menu.price}円 (${menu.calorie}kcal)`
});

export default menuList;
