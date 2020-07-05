import express,{ Request, Response } from 'express';
import next from 'next';

const PORT = 5000;

// Environment
const dev = true;

// Default `dev` property becomes true if environment variable NODE_ENV !== 'production'
const app = next({dev, dir: '/'});


// Request handler instance created with the help of `routes.js` instance
const handler = app.getRequestHandler();

// Prepare the server
app.prepare().then(() => {
    // Take the server instance
    const server = express();
    // server.get('/a', (req: any, res: any) => {
    //     return app.render(req, res, '/a', req.query)
    // });
    //
    // server.get('/b', (req: any, res: any) => {
    //     return app.render(req, res, '/b', req.query)
    // });
    //
    // server.get('/posts/:id', (req: any, res: any) => {
    //     return app.render(req, res, '/posts', { id: req.params.id })
    // });

    // Get anything whatever URL we are having.
    server.all('*', (req: Request, res: Response) => {
        return handler(req, res);
    });

    // Listen for the sever
    server.listen(PORT, (err: any) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
