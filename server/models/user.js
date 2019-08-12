'use strict';
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    strName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your Name'
      }
    },
    strEmail: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your valid Email'
      }
    },
    strRole: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your Role'
      }
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};