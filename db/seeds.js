const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/instagramUsers');

// Models
const Image = require('../models/image');
const User = require('../models/user');

Image.collection.drop();
User.collection.drop();




User
  .create([
    {
      fullName: 'Tristan Hall',
      username: 'tristanhall',
      email: 'tristanhall@gmail.com',
      password: 'pass',
      passwordConfirmation: 'pass',
      imageUrl: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/15676026_10157838887790456_8613327823845991799_o.jpg?_nc_cat=0&oh=c6fdff734a99057535dc9a17cc1b5ef3&oe=5BD382CF',
      description: 'Professional diver living the dream in Thailand!'
    },
    {
      fullName: 'Sean Rennie',
      username: 'seanrennie',
      email: 'seanrennie@gmail.com',
      password: 'pass',
      passwordConfirmation: 'pass',
      imageUrl: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-1/c3.0.1074.1074/21457389_10155156894943843_7171273076038616705_o.jpg?_nc_cat=0&oh=00dd44462abda85645edc9bf7a6ba99a&oe=5C11F816',
      description: 'I love rocks!'
    },
    {
      fullName: 'Matt Hunter-King',
      username: 'matthunterking',
      email: 'matthunterking@gmail.com',
      password: 'pass',
      passwordConfirmation: 'pass',
      imageUrl: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/1004095_10153074360120061_574080834_n.jpg?_nc_cat=0&oh=aee565d2d462fb773bfb3c59e40f0364&oe=5BCC69C3',
      description: 'I love Guinea Pigs!'
    },
    {
      fullName: 'Noopur Joshi',
      username: 'noopurjoshi',
      email: 'noopurjoshi@gmail.com',
      password: 'pass',
      passwordConfirmation: 'pass',
      imageUrl: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/29793548_10214077925773601_8940020665162962062_n.jpg?_nc_cat=0&oh=ab3532b80a2648b811d1951ed3ea39c6&oe=5C067E17',
      description: 'I love Matcha!'
    }
  ])
  .then(users => {
    console.log(`Created ${users.length} users`);
    // We now have the users with the MongoDb IDs!
    return Image
      .create([
        {
          image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          location: 'Japan',
          description: 'Sakura Season',
          comments: [
            { name: 'Rob', content: 'Wow! This is ❤️!!'}
          ],
          likes: 1000,
          createdBy: users[0].id
        },
        {
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?cs=srgb&dl=art-blur-cappuccino-302899.jpg&fm=jpg',
          location: 'Watford',
          description: 'Sakura Season',
          comments: [
            { name: 'Rob', content: 'Wow! This is ❤️!!'}
          ],
          likes: 1000,
          createdBy: users[1].id
        }
      ]);
  })
  .then(images => console.log(`Created ${images.length} images`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
