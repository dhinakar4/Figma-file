import apple1 from "/detailimage/apple1.jpg";
import apple2 from "/detailimage/apple2.jpg";
import apple3 from "/detailimage/apple3.jpg";

import cabbage1 from "/detailimage/cabbage1.png";
import cabbage2 from "/detailimage/cabbage2.png";
import cabbage3 from "/detailimage/cabbage3.png";

import capsicum1 from "/detailimage/capsicum1.webp";
import capsicum2 from "/detailimage/capsicum2.jpg";
import capsicum3 from "/detailimage/capsicum3.png";

import cauliflower1 from "/detailimage/cauliflower1.jpg";
import cauliflower2 from "/detailimage/cauliflower2.jpg";
import cauliflower3 from "/detailimage/cauliflower3.jpg";

import corn1 from "/detailimage/corn1.avif";
import corn2 from "/detailimage/corn2.jpg";
import corn3 from "/detailimage/corn3.jpg";

import cucumber1 from "/detailimage/cucumber1.jpg";
import cucumber2 from "/detailimage/cucumber2.webp";
import cucumber3 from "/detailimage/cucumber3.jpg";

import eggplant1 from "/detailimage/eggplant1.jpg";
import eggplant2 from "/detailimage/eggplant2.jpg";
import eggplant3 from "/detailimage/eggplant3.jpg";

import green1 from "/detailimage/green1.avif";
import green2 from "/detailimage/green2.jpg";
import green3 from "/detailimage/green3.avif";

import ladiesfinger1 from "/detailimage/ladiesfinger1.jpg";
import ladiesfinger2 from "/detailimage/ladiesfinger2.jpg";
import ladiesfinger3 from "/detailimage/ladiesfinger3.jpg";

import lettuce1 from "/detailimage/lettuce1.webp";
import lettuce2 from "/detailimage/lettuce2.jpg";
import lettuce3 from "/detailimage/lettuce3.jpg";

import mango1 from "/detailimage/mango1.webp";
import mango2 from "/detailimage/mango2.avif";
import mango3 from "/detailimage/mango3.avif";

import potatoes1 from "/detailimage/potatoes1.png";
import potatoes2 from "/detailimage/potatoes2.jpg";
import potatoes3 from "/detailimage/potatoes3.jpg";

import red1 from "/detailimage/red1.avif";
import red2 from "/detailimage/red2.avif";
import red3 from "/detailimage/red3.avif";

import redcapsicum1 from "/detailimage/redcapsicum1.jpg";
import redcapsicum2 from "/detailimage/redcapsicum2.jpg";
import redcapsicum3 from "/detailimage/redcapsicum3.webp";

import tomatoes1 from "/detailimage/tomatoes1.jpg";
import tomatoes2 from "/detailimage/tomatoes2.jpg";
import tomatoes3 from "/detailimage/tomatoes3.jpg";


export const products = [
    {
        id: 1,
        title: "Green Apple",
        image: "/hotdeals/img1.png",
        images: [apple1, apple2, apple3],
        price: "$15.00",
        oldprice: "$30.00",
        rating: 4,
        inStock: true,
        category: "fruits",
    },
    {
        id: 2,
        title: "Chinese Cabbage",
        image: "/hotdeals/img2.png",
        images: [cabbage1, cabbage2, cabbage3],
        price: "$11.00",
        rating: 3,
        inStock: false,
        category: "vegetables",
    },
    {
        id: 3,
        title: "Green Lettuce",
        image: "/hotdeals/img3.png",
        images: [lettuce1, lettuce2, lettuce3],
        price: "$9.00",
        oldprice: "$18.00",
        rating: 5,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 4,
        title: "Eggplant",
        image: "/hotdeals/img4.png",
        images: [eggplant1, eggplant2, eggplant3],
        price: "$34.00",
        rating: 3.5,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 5,
        title: "Fresh Cauliflower",
        image: "/hotdeals/img5.png",
        images: [cauliflower1, cauliflower2, cauliflower3],
        price: "$11.00",
        rating: 4,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 6,
        title: "Green Capsicum",
        image: "/hotdeals/img6.png",
        images: [capsicum1, capsicum2, capsicum3],
        price: "$9.00",
        oldprice: "$20.99",
        rating: 5,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 7,
        title: "Green Chilli",
        image: "/hotdeals/img7.png",
        images: [green1, green2, green3],
        price: "$29.00",
        oldprice: "$60.00",
        rating: 4,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 8,
        title: "Big Potatoes",
        image: "/hotdeals/img8.png",
        images: [potatoes1, potatoes2, potatoes3],
        price: "$14.00",
        rating: 3,
        inStock: false,
        category: "vegetables",
    },
    {
        id: 9,
        title: "Corn",
        image: "/hotdeals/img9.png",
        images: [corn1, corn2, corn3],
        price: "$17.00",
        rating: 4,
        inStock: true,
        category: "fruits",
    },
    {
        id: 10,
        title: "Red Capsicum",
        image: "/hotdeals/img10.png",
        images: [redcapsicum1, redcapsicum2, redcapsicum3],
        price: "$12.00",
        oldprice: "$24.00",
        rating: 5,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 11,
        title: "Red Tomatoes",
        image: "/hotdeals/img11.png",
        images: [tomatoes1, tomatoes2, tomatoes3],
        price: "$9.00",
        oldprice: "$20.99",
        rating: 4,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 12,
        title: "Surjapur Mango",
        image: "/hotdeals/img12.png",
        images: [mango1, mango2, mango3],
        price: "$31.00",
        rating: 4,
        inStock: true,
        category: "fruits",
    },
    {
        id: 13,
        title: "Green Cucumber",
        image: "/hotdeals/img13.png",
        images: [cucumber1, cucumber2, cucumber3],
        price: "$15.99",
        oldprice: "$30.00",
        rating: 4,
        inStock: true,
        category: "vegetables",
    },
    {
        id: 14,
        title: "Ladies Finger",
        image: "/hotdeals/img14.png",
        images: [ladiesfinger1, ladiesfinger2, ladiesfinger3],
        price: "$14.99",
        rating: 3,
        inStock: false,
        category: "vegetables",
    },
    {
        id: 15,
        title: "Red Chilli",
        image: "/hotdeals/img15.png",
        images: [red1, red2, red3],
        price: "$14.99",
        oldprice: "$28.00",
        rating: 3.5,
        inStock: true,
        category: "vegetables",
    },
];
