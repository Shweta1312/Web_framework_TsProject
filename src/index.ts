import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 2 });

//This is a hassle --> user.events.on()
// user.events.on('newSeason',()=>{
//   console.log('New season has arrived!');
// });

// user.events.trigger('newSeason');

//Coordinating set with trigger
user.on('change', () => {
  console.log(user);
});
// user.set({name:'Naruto', age:15});

// user.save();
user.fetch();
