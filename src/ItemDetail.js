import DragonFruit from './img/Frutadeldiablo.jpg'
const Newproducts = [{
    "id": 1,
    "title": "Dragon fruit",
    "description": "a exotic from taken from the oreintal region",
    "price": 150,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "category": "fruits",
    "thumbnail": "...",
    "img": DragonFruit,
}]
const getNewproduct = new Promise((resolve, reject) => {
    let afterPromises = true;
    setTimeout(() => {
        if (afterPromises) {
            resolve(Newproducts);
        } else {
            reject("Failed to get data");
        }
    }, 2000);
});
export default getNewproduct