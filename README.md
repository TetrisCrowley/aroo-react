## User Stories
User can search a city or zip code
User can find dog parks on a map within a certain radius, sorted by distance

**Stretch goals**
User can register/login
User can save favorite locations
User can visit show pages of individual parks
User can upload pictures of locations to show pages

*****Streeeetch goals*****
User can create a profile for their dog
Users can make playdates for their dogs with other users


## Wireframes
See wireframe jpeg


## Data Structures
const parkSchema = new mongoose.Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  pictures: []
})

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorites: []
})