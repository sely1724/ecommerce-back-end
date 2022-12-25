// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
//https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany
Product.belongsToMany(Tag, {
  through: ProductTag,
  // do i need a fk?
  foreignKey: "product_id",
  // onDelete??
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // onDelete??
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
