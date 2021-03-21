import React from 'react';
import MarketItem from "./MarketItem";
import {useCallback} from "react/cjs/react.production.min";

export default function MarketStorage() {
    const createMarket = useCallback(async (deleteText) => {
        const burger = {
            name: 'burger',
            uri: require('../test_images/burger.png'),
            cost: 3,
            category: 'food',
        }

        const burgerItem = new MarketItem(burger)
        await burgerItem.save()

        const shoes = {
            name: 'shoes',
            uri: require('../test_images/shoes.png'),
            cost: 10,
            category: 'clothes'
        }

        const shoesItem = new MarketItem(shoes)
        await shoesItem.save()

        const pizza = {
            name: 'pizza',
            uri: require('../test_images/pizza.png'),
            cost: 3,
            category: 'food'
        }

        const pizzaItem = new MarketItem(pizza)
        await pizzaItem.save()

        const carrot = {
            name: 'carrot',
            uri: require('../test_images/carrot.png'),
            cost: 2,
            category: 'food'
        }

        const carrotItem = new MarketItem(carrot)
        await carrotItem.save()

        const ball = {
            name: 'ball',
            uri: require('../test_images/ball.png'),
            cost: 8,
            category: 'toys'
        }

        const ballItem = new MarketItem(ball)
        await ballItem.save()

        const shirt = {
            name: 'shirt',
            uri: require('../test_images/shirt.png'),
            cost: 9,
            category: 'clothes'
        }

        const shirtItem = new MarketItem(shirt)
        await shirtItem.save()

        const water = {
            name: 'water',
            uri: require('../test_images/water.png'),
            cost: 2,
            category: 'food'
        }

        const waterItem = new MarketItem(water)
        await waterItem.save()

        const blue_shoes = {
            name: 'blue shoes',
            uri: require('../test_images/blue_shoes.png'),
            cost: 12,
            category: 'clothes'
        }

        const blue_shoesItem = new MarketItem(blue_shoes)
        await blue_shoesItem.save()

        const black_shirt = {
            name: 'black shirt',
            uri: require('../test_images/black_shirt.png'),
            cost: 10,
            category: 'clothes'
        }

        const black_shirtItem = new MarketItem(black_shirt)
        await black_shirtItem.save()

        const blue_shirt = {
            name: 'blue shirt',
            uri: require('../test_images/blue_shirt.png'),
            cost: 10,
            category: 'clothes'
        }

        const blue_shirtItem = new MarketItem(blue_shirt)
        await blue_shirtItem.save()

        const red_ball = {
            name: 'red ball',
            uri: require('../test_images/red_ball.png'),
            cost: 10,
            category: 'toys'
        }

        const red_ballItem = new MarketItem(red_ball)
        await red_ballItem.save()

        const black_ball = {
            name: 'black ball',
            uri: require('../test_images/black_ball.png'),
            cost: 10,
            category: 'toys'
        }

        const black_ballItem = new MarketItem(black_ball)
        await black_ballItem.save()

        const black_shoes = {
            name: 'black shoes',
            uri: require('../test_images/black_shoes.png'),
            cost: 12,
            category: 'clothes'
        }

        const black_shoesItem = new MarketItem(black_shoes)
        await black_shoesItem.save()

    }, [])
}


