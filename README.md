# Movies4U

Movies4U is a React-based movie browsing website that lets users search for movies, view movie information, and sort search results. I built this project to get more comfortable working with React, APIs, routing, and managing data in a frontend application.

## Features

* Search for movies using the OMDb API
* Browse movie search results
* Sort movies by:

  * A-Z
  * Z-A
  * Oldest to Newest
  * Newest to Oldest
* View individual movie details
* Display movie posters and fallback text when a poster isn't available
* React Router navigation between the movie list and individual movie pages
* Responsive layout for different screen sizes

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* Axios
* React Router
* OMDb API
* Git & GitHub


## How It Works

The movie list is populated using the OMDb API. When a user searches for a movie, the search term is sent to the API and the returned results are displayed on the page.

Each movie can be selected to open a dedicated movie page. The movie's IMDb ID is passed through the URL, which is then used to request more detailed information from the OMDb API.

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/your-username/Movies4U.git
```

Navigate into the project:

```bash
cd Movies4U
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the root of the project and add your OMDb API key:

```env
REACT_APP_OMDB_API_URL=https://www.omdbapi.com/?apikey=YOUR_API_KEY
```

Then start the development server:

```bash
npm start
```

The application should open at:

```text
http://localhost:3000
```

## Project Status

This project was created as a learning project while I continue developing my React and frontend development skills.

## Author

**Nathan Cader**

GitHub: [@DeadpriZma](https://github.com/DeadpriZma)
