module.exports = function(sequelize, DataTypes) {
  var TaskStatus = sequelize.define("TaskStatus", {
    task_status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  TaskStatus.associate = models => {
    TaskStatus.hasMany(models.Task);
  };

  return TaskStatus;
};
