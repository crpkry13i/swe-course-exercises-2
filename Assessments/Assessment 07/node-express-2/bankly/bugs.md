# BUGS

BUG #1: This is a bug in the SQL library. Arguments username and password in getAll() need to be removed.

BUG #2: require('dotenv") is missing config function

BUG #3: module.exports = app is written twice

BUG #4: Express is listening for a PORT which has been configured in the config.js file but not used in the server.js file.

BUG #5: Removed "requireAdmin" this allows for any authenticated user to make changes to their own profile. Added conditional to allow admin to make changes.

BUG #6: This is a bug in the JWT library. The token wasn't being verified with the secret key.