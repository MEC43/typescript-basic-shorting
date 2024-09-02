import CharactersCollection from './CharactersCollection';
import { Customer } from './Customer';
import CustomerCollection from './CustomerCollection';
import NamooSorter from './NamooSorter';
import NumbersCollection from './NumbersCollection';

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);
let charCollection = new CharactersCollection('아정말어렵다흐엉엉');
let customerCollction = new CustomerCollection([
  new Customer('A111', 'Kim'),
  new Customer('A112', 'Chae'),
  new Customer('A113', 'Ha'),
]);

// let sorter = new NamooSorter(numCollection);
// let sorter = new NamooSorter(charCollection);
let sorter = new NamooSorter(customerCollction);
sorter.sort();

sorter.printCollection();
