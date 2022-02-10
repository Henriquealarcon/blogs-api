const Category = (sequelize, DataTypes) => {
  const categoria = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, { timestamps: false, tableName: 'Categories' });

  return categoria;
};

module.exports = Category;