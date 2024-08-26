The Easy Ramen Map is a web application built with React and FastAPI that helps users find ramen shops in Taipei based on taste, region, and MRT station. 
It integrates Google Maps to display the locations of these shops.

Project Structure:
1. Frontend: Built with React, it integrates the Google Maps API to display the map and markers for ramen shop locations. Users can filter ramen shops based on multiple criteria.
2. Backend: Built with FastAPI, it provides API services, stores and retrieves ramen shop information from a MySQL database, and responds to frontend requests.

Features:
1. Filter ramen shops based on taste, region, and MRT station
2. Real-time display of filtered ramen shops using Google Maps API
3. Simple and intuitive user interface

Installation Guide:
1. Frontend Installation:
(1)Please make sure you have Node.js and npm installed.

(2)Navigate to the frontend directory and install dependencies:
(Run on the terminal)
cd ramen-app
npm install

(3)Start the frontend development server:
npm start
(By default, the application will run at http://localhost:3000.)

2. Backend Installation
(1)Ensure you have Python 3.7+ and MySQL installed.

(2)Create a virtual environment and install backend dependencies:
(run on terminal)
python -m venv env
source env/bin/activate  # On Windows: `env\Scripts\activate`
pip install -r requirements.txt

(3)Set up the MySQL database:
Create a MySQL database named ramen_db.
Update the database connection information in the backend db_config.

(4)Start the backend server:
uvicorn main:app --reload

Usage:
1.Open your browser and visit http://localhost:3000.
2.Use the filter options (taste, region, MRT station) to search for ramen shops in Taipei.
3.The ramen shops that match the criteria will be displayed on Google Maps.

API Endpoints:
1.GET /api/ramen
(2)Retrieve ramen shop information, supporting filter options taste, region, and mrt_station.
Example request:
GET http://localhost:8000/api/ramen?taste=Tonkotsu&region=Zhongshan District, Taipei City&mrt_station=R11

Dependencies
1. Frontend:
(1)React Frame
(2)Google Maps API
(3)Axios
2. Backend:
(1)FastAPI
(2)MySQL Connector
(3)Uvicorn
(4)CORS Middleware

Contributing:
If you'd like to contribute to this project, feel free to submit a pull request or report issues.
