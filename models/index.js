// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: true
  },
  foreignKey: 'category_id'
});

// Categories have many Products
Category.belongsToMany(Product,{
  through: {
    model: Product,
  },
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag,{
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
