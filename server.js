// Basic requirements
const express = require('express');
const app = express();
//const cors = require('cors');
//const { response, request } = require('express');
const PORT = 8000;

// Tells Express to use Cors if it needs it
//app.use(cors());

// Landmarks objects 
// This is our API
const landmarks = {
    'first avenue': {
        'landmarkName': 'First Avenue',
        'type': 'Nightclub',
        'location': 'Downtown MPLS across from Target Center',
        'interestingFact': 'Several scenes of "Purple Rain" were filmed inside the club',
        'image': "https://upload.wikimedia.org/wikipedia/commons/6/66/FirstAvenue.jpg"
    },
    'paisley park': {
        'landmarkName': 'Paisley Park',
        'type': 'Recording studio and home',
        'location': 'Chanhassen',
        'interestingFact': 'Take a tour!',
        'image': "https://comicvine.gamespot.com/a/uploads/scale_medium/1/15776/8524854-spock8.jpg"
    },
    'mural': {
        'landmarkName': 'Prince Mural',
        'type': 'Public art',
        'location': 'On the side of Chanhassen Cinema in Chanhassen',
        'interestingFact': 'painted by a guy from New Zealand',
        'image': "https://www.hollywoodreporter.com/wp-content/uploads/2013/08/worf.jpg"
    },
};

// Get is an Express method
// we want to GET an html page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// we want to GET JSON API data 
// Colon means 'hey Express, alienName is a parameter now'
app.get('/api/:landmarkName', (req, res) => {
const landmarkName = req.params.landmarkName.toLowerCase();

//checking to see if our alienName is inside our alien object from line 12
if (landmarks['type']) {

// if it's in the object, send the JSON API data thru
res.json()

// if it's not
} else {
res.json(landmarks['first avenue'])
}
})

app.listen(process.env.PORT || PORT, () => {
    console.log('the server is running')
})
