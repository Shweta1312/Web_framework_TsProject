import { User } from './models/User';

const user = User.buildUser({ id: 2 });

//This is a hassle --> user.events.on()
// user.events.on('newSeason',()=>{
//   console.log('New season has arrived!');
// });

// user.events.trigger('newSeason');

//Coordinating set with trigger
user.on('change', () => {
  console.log(user);
});

user.fetch();
