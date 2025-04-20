import http from 'http';
import { routeHandler } from './route';
import { exceptionHandler } from './utils';
import { port } from './config';

const server = http.createServer(exceptionHandler(routeHandler));

server.listen(port);