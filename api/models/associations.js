const User = require('./user')
const Favorite = require('./favorites')

User.belongsToMany(Favorite, { through: 'User_favorites' })
Favorite.belongsToMany(User, { through: 'User_favorites' })