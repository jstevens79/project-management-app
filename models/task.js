module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        task_description: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        goal_start: {
            type: DataType.DATETIME,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        goal_end: {
            type: DataType.DATETIME,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        actual_start: {
            type: DataType.DATETIME,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        actual_end: {
            type: DataType.DATETIME,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
    });

    Task.associate = function (models) {
        Task.hasMany(models.Comment);
    };

    Task.associate = function (models) {
        Task.hasMany(models.TaskAssignment);
    };

    return Task;
};