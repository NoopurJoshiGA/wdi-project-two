const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/instagramUsers');

// Models
const Image = require('../models/image');

Image.collection.drop();

Image
  .create([
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'Japan',
      description: 'Sakura Season',
      comments: [
        { name: 'Rob', content: 'Wow! This is ❤️!!'}
      ],
      likes: 1000
    },
    {
      image: 'https://images.pexels.com/photos/572738/pexels-photo-572738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
