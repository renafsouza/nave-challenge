module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        unique:true
      },
      author: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      text: {
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
    
    Post.associate = (models) => {
      Post.hasMany(models.Comment, {
        foreignKey: `post_id`
      });
    };
    return Post;
  };
  