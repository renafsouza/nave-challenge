module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      id: {
        type: DataTypes.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    }, {});


  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: {
            name: `postId`,
            type: DataTypes.INTEGER,
            field:`post_id`
        }
    });
  };

    return Comment;
  };
  