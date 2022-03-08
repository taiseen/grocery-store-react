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

const reviewBox = [
    {
        id: 1,
        img: images.pic1,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae magni voluptatem adipisci, rerum molestiae ipsa odio beatae, inventore dolorem sint, a ea doloribus aspernatur. Iure harum rerum assumenda culpa error!',
    },
    {
        id: 2,
        img: images.pic2,
        name: 'Alex',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae magni voluptatem adipisci, rerum molestiae ipsa odio beatae, inventore dolorem sint, a ea doloribus aspernatur. Iure harum rerum assumenda culpa error!',
    },
    {
        id: 3,
        img: images.pic3,
        name: 'Sam',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae magni voluptatem adipisci, rerum molestiae ipsa odio beatae, inventore dolorem sint, a ea doloribus aspernatur. Iure harum rerum assumenda culpa error!',
    },
    {
        id: 4,
        img: images.pic4,
        name: 'Julia',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae magni voluptatem adipisci, rerum molestiae ipsa odio beatae, inventore dolorem sint, a ea doloribus aspernatur. Iure harum rerum assumenda culpa error!',
    },
];

const blogBox = [
    {
        id: 1,
        img: images.blog1,
        user : 'admin',
        date : '20 Mar, 2022',
        title: 'fresh and organic vegetables and fruits',
        post : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, doloribus?',
    },
    {
        id: 2,
        img: images.blog2,
        user : 'user',
        date : '25 Feb, 2022',
        title: 'fresh & organic vegetables & fruits',
        post : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, doloribus?',
    },
    {
        id: 3,
        img: images.blog3,
        user : 'admin',
        date : '18 Jan, 2022',
        title: 'fresh and organic vegetables',
        post : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, doloribus?',
    },
]


const data = {
    shoppingCart,
    featuresBox,
    productBox,
    categoriesBox,
    reviewBox,
    blogBox,
}

export default data;