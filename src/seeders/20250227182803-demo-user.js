'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // email: DataTypes.STRING,
  //   firstName: DataTypes.STRING,
  //   lastName: DataTypes.STRING,
  //   address: DataTypes.STRING,
  //   gender: DataTypes.BOOLEAN,
  //   roleid: DataTypes.STRING
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email:"admin@gmail.com",
        firstName:"Tran",
        lastName:"Dong",
        address: "USA",
        phone:"0353287471",
        gender: 1,
        roleid: "Admin",


        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
