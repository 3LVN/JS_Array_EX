const order = {
    cart: [
      { id: 1, name: "ao dai", amount: 5, price: 100000 },
      { id: 2, name: "ao coc", amount: 2, price: 200000 },
      { id: 3, name: "quan dai", amount: 3, price: 150000 },
      { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    total_money: 0,
    total_amount: 0,
  };

let obj = order.cart.reduce((total, currentValue) =>{
        total.total_amount += currentValue.amount;
        total.total_money += currentValue.price * currentValue.amount;
        return{
        total_amount : total.total_amount,
        total_money : total.total_money}
     
},{total_amount:0, total_money:0})
console.log(obj)

