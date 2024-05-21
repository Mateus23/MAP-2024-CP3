import express from 'express'
import { Router, Request, Response } from 'express';
import { changeIsUserActive, createUser, existUserWithId, getUserWithId } from '../users';
import { validateAge, validateString } from '../utils';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.get('/user/:id', (req: Request, res: Response) => {
  if (!existUserWithId(req.params.id)){
    res.status(400).send("Id errado parça");
  } else {
    res.json({ ...getUserWithId(req.params.id) })
  }
})

route.post('/user/:id', (req: Request, res: Response) => {
  if (existUserWithId(req.params.id)){
    return res.status(400).send("Id Já existe parça");
  }
  if(!validateString(req.body.email)){
    return res.status(400).send("Name deve existir e ser string");
  }
  if(!validateAge(req.body.age)){
    return res.status(400).send("Age deve existir e ser number entre 0 e 100");
  }
  if(req.body.id || req.body.name || req.body.phoneNumber){
    return res.status(400).send("Envie apenas os parâmetros necessários para criar o usuário");
  }
  res.status(200).send(createUser({...req.body, id: req.params.id}))
})

route.post('/user/:id/activate', (req: Request, res: Response) => {
  if (!existUserWithId(req.params.id)){
    res.status(400).send("Id errado parça");
  }
  changeIsUserActive(req.params.id, true);
  res.status(200).send(getUserWithId(req.params.id))
})


app.use(route)

app.listen(3000, () => 'server running on port 3333')