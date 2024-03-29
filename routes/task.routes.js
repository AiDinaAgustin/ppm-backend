module.exports = app => {
    const tasks = require("../controllers/task.controller.js");
    var router = require("express").Router();
    // Create a new Task
    router.post("/", tasks.create);
    // Retrieve all tasks
    router.get("/", tasks.findAll);
    // Retrieve all published tasks
    router.get("/published", tasks.findAllPublished);
    // Retrieve a single Task with id
    router.get("/one", tasks.findOne);
    // Update a Task with id
    router.put("/update", tasks.update);
    // Delete a Task with id
    router.delete("/delete", tasks.delete);
    // Delete all tasks
    router.delete("/", tasks.deleteAll);
    app.use('/api/tasks', router);
  };