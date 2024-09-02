"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var Customer_1 = require("./Customer");
var CustomerCollection_1 = __importDefault(require("./CustomerCollection"));
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var numCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
var charCollection = new CharactersCollection_1.default('아정말어렵다흐엉엉');
var customerCollction = new CustomerCollection_1.default([
    new Customer_1.Customer('A111', 'Kim'),
    new Customer_1.Customer('A112', 'Chae'),
    new Customer_1.Customer('A113', 'Ha'),
]);
// let sorter = new NamooSorter(numCollection);
// let sorter = new NamooSorter(charCollection);
var sorter = new NamooSorter_1.default(customerCollction);
sorter.sort();
sorter.printCollection();
