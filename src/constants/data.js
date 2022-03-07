import images from './images';

const featuresBox = [
    {
        img: images.feature1,
        title: 'free & organic',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, atque.'
    },
    {
        img: images.feature2,
        title: 'free delivery',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, atque.'
    },
    {
        img: images.feature3,
        title: 'easy payments',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, atque.'
    },
];

const productBox = [
    {
        id: 1,
        img: images.product1,
        title: 'fresh orange',
        price: [4.85, 10.25],
        quantity: 1,
    },
    {
        id: 2,
        img: images.product2,
        title: 'fresh onion',
        price: [5.35, 9.42],
        quantity: 1,
    },
    {
        id: 3,
        img: images.product3,
        title: 'fresh meet',
        price: [18.38, 25.45],
        quantity: 1,
    },
    {
        id: 4,
        img: images.product4,
        title: 'fresh cabbage',
        price: [3.45, 5.20],
        quantity: 1,
    },
    {
        id: 5,
        img: images.product5,
        title: 'fresh potato',
        price: [4.95, 8.85],
        quantity: 1,
    },
    {
        id: 6,
        img: images.product6,
        title: 'fresh avocado',
        price: [12.55, 18.75],
        quantity: 1,
    },
    {
        id: 7,
        img: images.product7,
        title: 'fresh carrot',
        price: [7.65, 8.45],
        quantity: 1,
    },
    {
        id: 8,
        img: images.product8,
        title: 'fresh lemon',
        price: [2.35, 4.35],
        quantity: 1,
    },
    {
        id: 9,
        img: images.product9,
        title: 'watermelon',
        price: [2.35, 5.75],
        quantity: 1,
    },
    {
        id: 10,
        img: images.product10,
        title: 'onion',
        price: [3.35, 4.35],
        quantity: 1,
    },
    {
        id: 11,
        img: images.product11,
        title: 'chicken',
        price: [12.45, 14.35],
        quantity: 1,
    },
];

const shoppingCart = [
    {
        imgUrl: images.product9,
        pName: 'watermelon',
        price: productBox[8].price[0],
        quantity: 1,
    },
    {
        imgUrl: images.product10,
        pName: 'onion',
        price: productBox[9].price[0],
        quantity: 2,
    },
    {
        imgUrl: images.product11,
        pName: 'chicken',
        price: productBox[10].price[0],
        quantity: 1,
    },
];

const categoriesBox = [
    {
        id: 1,
        img: images.cat1,
        category: 'vegetables',
        speech: 'up to 45% off',
    },
    {
        id: 2,
        img: images.cat2,
        category: 'fresh fruits',
        speech: 'up to 30% off',
    },
    {
        id: 3,
        img: images.cat3,
        category: 'dairy products',
        speech: 'up to 50% off',
    },
    {
        id: 4,
        img: images.cat4,
        category: 'fresh meet',
        speech: 'up to 15% off',
    },
]

const data = {
    shoppingCart,
    featuresBox,
    productBox,
    categoriesBox,
}

export default data;