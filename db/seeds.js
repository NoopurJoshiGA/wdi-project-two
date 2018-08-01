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
          image: 'https://images.pexels.com/photos/878352/pexels-photo-878352.jpeg?cs=srgb&dl=clouds-crater-lake-daylight-878352.jpg&fm=jpg',
          location: 'Thailand',
          description: 'I love diving!',
          comments: [],
          likes: 107,
          createdBy: users[0].id
        },
        {
          image: 'https://images.pexels.com/photos/734725/pexels-photo-734725.jpeg?cs=srgb&dl=divers-diving-enjoyment-734725.jpg&fm=jpg',
          location: 'Thailand',
          description: 'Diving is life',
          comments: [],
          likes: 53,
          createdBy: users[0].id
        },
        {
          image: 'https://images.pexels.com/photos/163313/diving-zakynthos-holidays-summer-holiday-163313.jpeg?cs=srgb&dl=diver-diving-exploration-163313.jpg&fm=jpg',
          location: 'Thailand',
          description: 'My 10m dive',
          comments: [],
          likes: 53,
          createdBy: users[0].id
        },
        {
          image: 'https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg?cs=srgb&dl=deep-diver-diving-suit-37530.jpg&fm=jpg',
          location: 'Thailand',
          description: 'Diving is life',
          comments: [],
          likes: 53,
          createdBy: users[0].id
        },
        {
          image: 'https://images.pexels.com/photos/10467/pexels-photo-10467.jpeg?cs=srgb&dl=animal-diving-reptile-10467.jpg&fm=jpg',
          location: 'Thailand',
          description: 'Diving is life',
          comments: [],
          likes: 53,
          createdBy: users[0].id
        },
        {
          image: 'https://images.pexels.com/photos/734725/pexels-photo-734725.jpeg?cs=srgb&dl=divers-diving-enjoyment-734725.jpg&fm=jpg',
          location: 'Thailand',
          description: 'Diving is life',
          comments: [],
          likes: 53,
          createdBy: users[0].id
        }
      ]);
  })
  .then(images => console.log(`Created ${images.length} images`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
