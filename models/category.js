'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    type: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : true,
      },
    },
    sold_product_amount: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : true,
        isInt : true,
      }
    },
  },
  {
    hooks : {
      beforeCreate(instance){
        instance.sold_product_amount = 0;
      }
    },
    sequelize,
    modelName: 'Category',
  });
  Category.associate = (models) => {
    Category.hasMany(models.Product)
  }
  return Category;
};