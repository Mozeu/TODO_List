const taskService = require('../services/taskService');
const logger = require ('../utils/logger');

module.exports = {
    TaskService: {
       TaskServicePort : {
        GetTask(args, callback){
            const tasks = taskService.getAllTask();
            logger.info("Lista de tareas enviada por soap");
            callback({
                task: tasks
            });
        },
        AddTask(args, callback){
            const task = taskService.createTask(args.title);
            logger.info("Tarea creada en soap");
            callback({ task });
        }
       }
    }
}