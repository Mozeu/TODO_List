describe('taskService', ()=>{
    let taskService;

    beforeEach(()=>{
        jest.resetModules();
        taskService = require('../src/services/taskService');
    });

    test('crear una tarea', ()=>{
        const task = taskService.createTask("Estudiar node.js");
        
        expect(task).toMatchObject({
            title : "Estudiar node.js",
            completed : false
        });
        expect(task.id).toBeDefined();
    });

    test('consultar las tareas', ()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');
        //jest.resetModules();
        //taskService = require('../src/services/taskService');
        expect(taskService.getAllTask()).toHaveLength(2);
    });

    test('modificar una tarea', ()=>{
        const test = taskService.createTask('Sacar la basura');
        
        const updatedTask = taskService.updateTask(test.id, {completed: true});

        expect(updatedTask.completed).toBe(true);
    });
    test('eliminar una tarea', ()=>{
        const test = taskService.createTask('Sacar la basura');
        taskService.deleteTask(test.id);

        expect(taskService.getAllTask()).toHaveLength(0);
    });
});