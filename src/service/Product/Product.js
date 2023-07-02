

const getHomeProducts=async()=>{
  const products = [
    { id: 1, name: "Samsung A70", price: 110 ,image:"Samsung2.jpeg"},
    { id: 2, name: "Samsung A20", price: 115,image:"Samsung1.jpeg" },
    { id: 3, name: "Samsung A80", price: 120,image:"Samsung3.jpeg" },
    { id: 4, name: "Samsung S10", price: 90,image:"Samsung2.jpeg" },
    { id: 5, name: "Samsung A70", price: 70,image:"Samsung1.jpeg" },
    { id: 6, name: "Samsung S20", price: 120,image:"Samsung3.jpeg" },
  ];
  return(products)
}
export default getHomeProducts;