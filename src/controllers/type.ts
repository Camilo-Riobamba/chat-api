import { RequestHandler } from 'express';

type Route = Record<string, RequestHandler>;

export default Route;
