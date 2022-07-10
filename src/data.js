import APPLe from './img/APPLe.jpg'
import grapes from './img/grapes.jpg'
import watermelon from './img/watermelon.jpg'
const products = [{
        id: 1,
        img: APPLe,
        title: 'Apple',
        price: 100
    },
    {
        id: 2,
        img: grapes,
        title: 'Grapes',
        price: 100
    },
    {
        id: 3,
        img: watermelon,
        title: 'watermelon',
        price: 100
    }
];
const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    setTimeout(() => {
        if (afterPromises) {
            resolve(products);
        } else {
            reject("Failed to get data");
        }
    }, 2000);
});

export default getData;