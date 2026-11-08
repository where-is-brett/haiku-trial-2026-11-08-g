// src/lib/categories.js

// Category keys and their labels, in the order they are listed.
export const CATEGORIES = {
  groceries: 'Groceries',
  eating_out: 'Eating out',
  transport: 'Transport',
  bills: 'Bills',
  shopping: 'Shopping',
  health: 'Health',
  income: 'Income',
  other: 'Other',
};

// Each shop name and its category. The first shop whose name appears in a description sets its category.
export const SHOPS = [
  { name: 'Greenbarrow Fresh', category: 'groceries' },
  { name: 'Pennywhistle Market', category: 'groceries' },
  { name: 'Lowtide Grocers', category: 'groceries' },
  { name: 'Harvest Lane Foods', category: 'groceries' },
  { name: 'Pasta, Pizza & Co', category: 'eating_out' },
  { name: 'Kestrel Coffee Bar', category: 'eating_out' },
  { name: 'Saltbush Noodle House', category: 'eating_out' },
  { name: 'Ember Grill', category: 'eating_out' },
  { name: 'Waverly Fuel Stop', category: 'transport' },
  { name: 'Tramline Fares', category: 'transport' },
  { name: 'Lantern Rideshare', category: 'transport' },
  { name: 'Northgate Parking', category: 'transport' },
  { name: 'Brightfield Power', category: 'bills' },
  { name: 'Clearwater Utilities', category: 'bills' },
  { name: 'Skyline Broadband', category: 'bills' },
  { name: 'Hollis Insurance', category: 'bills' },
  { name: 'Marlowe Homewares', category: 'shopping' },
  { name: 'Quillon Books', category: 'shopping' },
  { name: 'Fernhill Outfitters', category: 'shopping' },
  { name: 'Pixel Parade Tech', category: 'shopping' },
  { name: 'Larkspur Pharmacy', category: 'health' },
  { name: 'Elmgrove Physio', category: 'health' },
  { name: 'Cobalt Dental', category: 'health' },
  { name: 'Sunnyvale Optical', category: 'health' },
  { name: 'Brightwave Payroll', category: 'income' },
  { name: 'Tidepool Interest', category: 'income' },
  { name: 'Oakridge Dividends', category: 'income' },
];

// Returns the category key for a transaction description, or 'other' when no shop name appears in it.
export function categorize(description) {
  const text = String(description).toLowerCase();
  const shop = SHOPS.find((candidate) => text.includes(candidate.name.toLowerCase()));
  return shop ? shop.category : 'other';
}
