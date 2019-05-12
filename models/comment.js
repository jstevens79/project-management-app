module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Comment.associate = models => {
    Comment.belongsTo(models.Task);
    Comment.belongsTo(models.User);
  };

  return Comment;
};
