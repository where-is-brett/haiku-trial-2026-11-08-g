// tests/categories.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { categorize, CATEGORIES, SHOPS } from '../src/lib/categories.js';

test('a shop name matches regardless of case', () => {
  assert.equal(categorize('EFTPOS GREENBARROW FRESH 0412'), 'groceries');
  assert.equal(categorize('kestrel coffee bar'), 'eating_out');
});

test('a shop name inside a longer description still matches', () => {
  assert.equal(categorize('CARD 4417 Waverly Fuel Stop Sydney NSW'), 'transport');
});

test('a shop name with punctuation matches', () => {
  assert.equal(categorize('POS Pasta, Pizza & Co 0091'), 'eating_out');
});

test('a description with no shop is other', () => {
  assert.equal(categorize('TRANSFER TO SAVINGS 2291'), 'other');
});

test('every shop is in its listed category', () => {
  const expected = {
    'Greenbarrow Fresh': 'groceries',
    'Pennywhistle Market': 'groceries',
    'Lowtide Grocers': 'groceries',
    'Harvest Lane Foods': 'groceries',
    'Pasta, Pizza & Co': 'eating_out',
    'Kestrel Coffee Bar': 'eating_out',
    'Saltbush Noodle House': 'eating_out',
    'Ember Grill': 'eating_out',
    'Waverly Fuel Stop': 'transport',
    'Tramline Fares': 'transport',
    'Lantern Rideshare': 'transport',
    'Northgate Parking': 'transport',
    'Brightfield Power': 'bills',
    'Clearwater Utilities': 'bills',
    'Skyline Broadband': 'bills',
    'Hollis Insurance': 'bills',
    'Marlowe Homewares': 'shopping',
    'Quillon Books': 'shopping',
    'Fernhill Outfitters': 'shopping',
    'Pixel Parade Tech': 'shopping',
    'Larkspur Pharmacy': 'health',
    'Elmgrove Physio': 'health',
    'Cobalt Dental': 'health',
    'Sunnyvale Optical': 'health',
    'Brightwave Payroll': 'income',
    'Tidepool Interest': 'income',
    'Oakridge Dividends': 'income',
  };
  assert.deepEqual(
    SHOPS.map((shop) => [shop.name, shop.category]),
    Object.entries(expected),
  );
  for (const [name, category] of Object.entries(expected)) {
    assert.equal(categorize(name), category, name);
  }
});

test('the category keys and labels are as listed', () => {
  assert.deepEqual(CATEGORIES, {
    groceries: 'Groceries',
    eating_out: 'Eating out',
    transport: 'Transport',
    bills: 'Bills',
    shopping: 'Shopping',
    health: 'Health',
    income: 'Income',
    other: 'Other',
  });
});
