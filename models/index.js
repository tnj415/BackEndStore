// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Product,
    unique: true
  },
  foreignKey: 'category_id'
});

// Categories have many Products
Category.belongsTo(Product,{
  through: {
    model: Product,
    unique: true
  },
  as: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag,{
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
