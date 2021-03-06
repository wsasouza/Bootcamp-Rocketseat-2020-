import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Walter',
    email: 'wsasouza@hotmail.com',
    password: '123',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 100 },      
    ],
    
  });

  return response.json({ user: user});
}