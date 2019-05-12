module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_first_name: {
      type: DataTypes.STRING,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    user_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = models => {
    User.belongsTo(models.UserRole);
    User.hasMany(models.Project);
  };

  return User;
};
