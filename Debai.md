BT: Viết 3 methods myMap, myFilter, myReduce của Array sao cho công dụng và cách dùng giống với map, filter, reduce (sử dụng prototype của Array, this trong JS)

1. Trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
VD: array1 = [1,2,3,4,5,6];
    array2 = [3,4,8,9,12];
    => [3,4]
2. tìm 2 phần tử có tổng lớn nhất trong 1 mảng
VD: [1,7,9,2,5,3,8] => [9,8]
3. Tìm các cặp phần tử có tổng bằng 1 số cho trước
VD: [1,7,9,2,5,3,8]; sum = 10   => [1,9] ; [7,3]; [2,8]
4. Lấy ra 1 mảng mới từ mảng cho trước sao cho các phần tử chỉ xuất hiện 1 lần (sử dụng Set)
VD: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
5. Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
=> [3,5,9]
6. Từ ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] trả về object {'face': 2, 'zalo': 3, 'gmail':1}
7. Từ [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
Trả về {
  "audi": [
    {
      "make": "audi",
      "model": "r8",
      "year": "2012"
    },
    {
      "make": "audi",
      "model": "rs5",
      "year": "2013"
    }
  ],
  "ford": [
    {
      "make": "ford",
      "model": "mustang",
      "year": "2012"
    },
    {
      "make": "ford",
      "model": "fusion",
      "year": "2015"
    }
  ],
  "kia": [
    {
      "make": "kia",
      "model": "optima",
      "year": "2012"
    }
  ]
}


8. Cho 1 object như sau: const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  total_money: 0,
  total_amount: 0,
};

Yêu cầu: Chỉ dùng 1 lần reduce để lấy được giá trị cho total_money = 1870000  và total_amount = 14 (sử dụng reduce với giá trị khởi tạo là 1 object)