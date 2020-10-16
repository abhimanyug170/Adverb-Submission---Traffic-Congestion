# Link to deployed servers
Client - [https://traffic-congestion-adverb.netlify.app/](https://traffic-congestion-adverb.netlify.app/)
Server - https://traffic-congestion.herokuapp.com/

# Traffomatic

Traffomatic aims to provide an easy and efficient solution to the ever-prevalent problem of increasing traffic. Through this application, it is possible to regulate and co-ordinate different traffic signals at crossroads. This automaton provides the best combination of traffic signals at a user-selected location to facilitate least congestion among vehicles. 

# Algorithm

The algorithm used calculates the time for which each signal remains green for each traffic right at the crossroad.

Let the four paths be A, B, C and D.  

To calculate the required time, the algorithm takes as input, the respective time it takes to travel in the current traffic conditions on each path towards the intersection.

1. It calculates the mean of all the four travel times.
2. It finds the deviation of each travel time from the mean i.e (travel_time - mean).
3. It takes a fixed start time (50 sec) and adds the respective deviations to this fixed start time. This gives the green times for the respective signals.

However, some restrictions have been respected by the algorithm.
1. The time for the green signal should be in the range of [20, 70].
2. If we get a green time less than 20, it is uplifted to 20.
3. If we get a green time greater than 70,  it is downgraded to 70.

# Technologies Used
## Frontend

 - React JS (with Semantic UI)
 - [react-google-maps](https://tomchentw.github.io/react-google-maps/)

## Backend

 - Flask
 - Mongo DB

# Directory Structure

```
app
├── client
│   ├── public
│   │   └── index.html
│   └── src
│       ├── api
│       |    └── index.js
│       ├── components
│       |    ├── App.js
│       |    ├── Home.js
│       |    ├── Result.js
│       |    ├── Map.js
│       |    ├── TrafficLight.js
│       |    ├── Home.css
│       |    ├── Result.css
│       |    └── TrafficLight.css
│       ├── index.js
│       └── variables.js
├── server
│   ├── app.py
│   └── congestion.py
```
# Instructions to clone the app

``` git clone https://github.com/Sourabhtripathi/Adverb-Submission---Traffic-Congestion.git ```
 ```cd Adverb-Submission---Traffic-Congestion```
# Client
To run the react server: 
1. Get in the client directory.
	```cd client```
2. Install the dependencies.
	```npm install```
3. Start the react server.
	```npm start```
## Screenshots
![alt text](https://imgur.com/kwg4Wo7)
# Server
1. Get in the server directory.
`cd Traffic-Congestion-api/server`
2. Install the dependencies.
`pip install requirements.txt`
3. Start the server.
`flask run`

**Generate Authentication Key for Distance Matrix API.**
Refer to this link - <https://distancematrix.ai>
**Generate MongoDB database URI.**
Refer to this link - <https://www.mongodb.com/cloud/atlas>
**Create a .env file and add the mentioned details in it.**
```
# specify flask app's python file
FLASK_APP = app.py

# specify MongoDB database URI
MONGODB_URI = URI TO CONNECT TO DATABASE

# specify Distance Matrix API key
API_KEY = API KEY
```
## API Endpoints

1. To get list of all junction's data.
```"/junctions" [GET]```
2.  To insert a junction data.
```"/junctions" [POST]```
```
Params = {
name: String
coordinate: {lat: double, long: double}
roads: [{lat: double, long: double}]
}
```
3. To get current values of green time of lights.
```"/get-timer" [GET]```
```
Params = {
_id: mongodb id,
index: unique index for the signal which is already green(-1, if every signal is red)
}
```
