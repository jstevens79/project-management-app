module.exports = function(sequelize, DataTypes) {
  var UserRole = sequelize.define("UserRole", {
    user_role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  UserRole.associate = models => {
    UserRole.hasMany(models.RolePermissions);
  };

  return UserRole;
};
