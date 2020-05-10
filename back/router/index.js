const Router = require('koa-router');
const router = new Router();

const Task = require('../api/tasks');

router
    //test
    .post('/addtask', async (ctx) => {
        try {
            const result = await Task.addTask({ ...ctx.request.body });
            ctx.body = result;
        }
        catch (error) {
            console.log('Error: ', error);
            ctx.statur = 500;
            ctx.body = 'Iternal Server Error';
        }
    })
    //Users
    .post('/api/auth', async (ctx) => {
        try {
            const result = await Task.login({ ...ctx.request.body });
            ctx.body = result;
        }
        catch (error) {
            console.log('Error:', error);
            ctx.status = 403;
            ctx.body = { "error": "Login into system please" };
        }
    })

    .get('/api/auth/out', async (ctx) => {
        const result = await Task.logout({ ...ctx.request.body });
        ctx.body = result;
    })

    .post('/api/user/add', async (ctx) => {
        const result = await Task.register({ ...ctx.request.body });
        ctx.body = result;
    })

    //Tasks

    .get('/api/tasks', async (ctx) => {
        const result = await Task.getTasks({ ...ctx.request.body });
        ctx.body = result;
    })

    .post('/api/tasks', async (ctx) => {
        try {
            const result = await Task.postTask({ ...ctx.request.body });
            ctx.body = result;
        }
        catch (error) {
            console.log('Error: ', error);
            ctx.statur = 403;
            ctx.body = {
                "messgae": "Login into system please"
            }
        }
    })

    .delete('/api/tasks/delete', async (ctx) => {
        const result = await Task.deleteTask({ ...ctx.request.body });
        ctx.body = result;
    })

    .get('/api/users', async (ctx) => {
        const result = await Task.getUsers({ ...ctx.request.body });
        ctx.body = result;
    })

module.exports = router;