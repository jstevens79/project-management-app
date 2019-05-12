var register = function(Handlebars) {
  var helpers = {
    getFirstLetter: function(val) {
      if (val !== undefined) {
        return val.charAt(0);
      }
    },

    getStatusClass: function(id) {
      switch (parseInt(id)) {
        case 1:
          return "notStarted";

        case 2:
          return "inProgress";

        case 3:
          return "complete";

        default:
          return "notStarted";
      }
    },

    isActive: function(val1, val2) {
      if (val1 !== undefined) {
        if (parseInt(val1) === parseInt(val2)) {
          return "active";
        } else {
          return "";
        }
      } else {
        return "";
      }
    },

    getStatus: function(id) {
      switch (parseInt(id)) {
        case 1:
          return "Not Started";

        case 2:
          return "In Progress";

        case 3:
          return "Complete";
      }
    },

    progressBar: function(tasks) {
      var totalTasks = 0;
      var completedTasks = 0;
      for (let task of tasks) {
        totalTasks += 1;
        if (parseInt(task.dataValues.TaskStatusId) === 3) {
          completedTasks += 1;
        }
      }

      var perc = (completedTasks / totalTasks) * 100;
      perc = perc > 0 ? perc : 5;
      return perc;
    },

    getStatusSelect: function(taskId, statusId) {
      if (parseInt(taskId) === parseInt(statusId)) {
        return "selected";
      } else {
        return null;
      }
    },

    getUserName: function(users, id) {
      for (let user of users) {
        if (parseInt(user.dataValues.id) === parseInt(id)) {
          return (
            user.dataValues.user_first_name +
            " " +
            user.dataValues.user_last_name
          );
        }
      }
    },

    formatEmail: function(email) {
      return email;
    }
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    // just return helpers object if we can't register helpers here
    return helpers;
  }
};

module.exports.register = register;
module.exports.helpers = register(null);
