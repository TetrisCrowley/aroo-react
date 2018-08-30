## Description
A simple app that allows users to find dog parks. Ultimately, it will be able to provide information and show pictures to individual parks, as well as provide directions. More long term goals will allow for users to make profiles for their dogs, browse other users dogs, and schedule playdates. Kinda like okcupid, but for dogs.


## User Stories
User can search a city or zip code
User can find dog parks on a map within a certain radius, sorted by distance

**Stretch goals**
User can get directions to selected parks
User can click on a location and see an info window
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
## Express:
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

## Django:
class User
  user
  location

class Park
  location

class UserPark
  userId
  parkId