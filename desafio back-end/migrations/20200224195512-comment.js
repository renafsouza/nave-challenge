module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Comments', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    post_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Posts', key: 'id' },
      onDelete: 'cascade',
    },
    message: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    author: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Comments'),
};
