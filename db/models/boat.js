'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define('Boat', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    dayPrice: DataTypes.INTEGER,
    boatType: DataTypes.STRING,
    boatLength: DataTypes.INTEGER,
    peopleCapacity: DataTypes.INTEGER
  }, {});

  return Boat;
};
