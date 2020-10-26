import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 2 });

//This is a hassle --> user.events.on()
// user.events.on('newSeason',()=>{
//   console.log('New season has arrived!');
// });

// user.events.trigger('newSeason');

user.on("CHange",()=>{
  console.log('Thats a new change');
  
})

user.trigger('CHange');