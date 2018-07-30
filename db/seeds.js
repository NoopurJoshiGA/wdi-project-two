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
    fullName: 'Rob',
    username: 'rob',
    email: 'robisbest@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: 'https://avatars2.githubusercontent.com/u/4764631?s=460&v=4'
  },
  {
    fullName: 'Noopur',
    username: 'noopurjoshi',
    email: 'noopur.joshi13@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: 'https://media.licdn.com/dms/image/C5603AQGIJqOsL95kdA/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=apJ52hiSt8PGNeH-hn_25nnEmuQxN7WgPYEIpNdCNTA'
  }])
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
    ])
  })
  .then(images => console.log(`Created ${images.length} images`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
