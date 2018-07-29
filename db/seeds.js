const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/instagramUsers');

// Models
const Image = require('../models/image');

Image.collection.drop();

Image
  .create([
    {
      image: 'https://images.pexels.com/photos/371393/pexels-photo-371393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/371393/pexels-photo-371393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/371393/pexels-photo-371393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/371393/pexels-photo-371393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    }
  ])
  .then(images => console.log(`Created ${images.length} images`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
