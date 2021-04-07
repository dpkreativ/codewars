/*
=== Description ===
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/
const MangoDiscount = (quantity, price) => {
  const free = Math.floor(quantity / 3);
  // const rem = quantity % 3;
  const paid = quantity - free;
  return paid * price;
};

export default MangoDiscount;
