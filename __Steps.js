/**
 * -------------------------------
 * MongoDb Connection
 * -------------------------------
 * 1. Create an account
 * 2. Create an user with password
 * 3. Whitelist IP addresses
 * 4. Database > connect > driver > Node > View full code
 * 5. change the password in the URI
 * ---------------------------------
 *
 * 1. Create --- POST
 * 2. app.post('user'/async (req, res)={})
 * 3. Make the function async to use await inside it.
 * 4. Make sure you the express.json() middleware
 * 5. Access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 *
 * Client
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: { 'Content-Type': 'application/json}
 * 5. add body: JSON.stringify(user)
 * 
 * 
 * --------------------------------
 * READ MANY
 * --------------------------------
 * 1. create a cursor = userCollections.find()
 * 2. const result = await cursor.toArray();
 * 
 * 
 * --------------------------------
 * DELETE
 * --------------------------------
 * 1. create app.delete('/users/:id', async(req,res) => {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection .deleteOne(query);
 * 
 * 
 * Client
 * 1. create dynamic url with id
 * 2. mention the DELETE method  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 



 * */
