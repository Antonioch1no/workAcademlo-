const express = require('express');
const db = require('./utils/database')
const initModels = require('./models/init.models');
const Users = require('./models/users.models');
const userRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const videoRoutes = require('./routes/videos.routes');
const categoriesRoutes = require('./routes/categories.routes');


const app = express();
app.use(express.json());

const PORT = 8000;

db.authenticate()
.then(() => console.log('autentocandfo'))
.catch((error) => console.log(error));

initModels();
db.sync({force: false})
.then(console.log('base de datos sincronixzada'))
.catch((error) => console.log(error));


app.get('/', (req, res) => {
    res.status(200).json({message:'ddgdgdgd'})
})
app.use('/api/v1', userRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', categoriesRoutes);



app.delete('/users/:id', (req, res) => {
    try {
    const {id} = req.params;
    const result = Users.destroy({
        where:{id}
    })
    res.status(200).json(result);
    } catch (error) {
        res.status(400);
    console.log(error);
    }
   
});

app.listen(PORT, () => {
    console.log(`serviodr escuchandi en el puerto ${PORT}`)
});