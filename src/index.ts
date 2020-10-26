import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 2 });

user.events.on('change!', () => {
  console.log('Change #');
});

user.events.trigger('change!');

// axios.get('http://localhost:3000/users/2');

// const user = new User({name: "myName", age: 20});

// user.on('change',() => {
//   console.log("Change #1");
// });
// user.on("change",()=>{
//   console.log("Change#2");
// });
// user.on("save",()=>{
//   console.log("Save");
// });

// user.trigger('change');
// user.trigger('save');

// user.set({name:'newname'});
// console.log(user.get('name'));
// console.log(user.get('age'));
