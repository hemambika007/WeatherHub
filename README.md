# Weather Application

This is a weather application built using React and Material-UI. It displays the current weather and weather forecast for a given location using data fetched from a weather API.

(PS. The App goes to dark mode at night)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```shell
   npm install
4. After the installation is complete, you can run the application using the following command:
   ```shell
   npm start
  This will start the development server, and the application will be accessible at http://localhost:3000.

## Usage

1. Upon opening the application, it will request your permission to access your current location. Allow the access to fetch the weather data for your location automatically. If permission is denied, the default location may be used.
2. Once the weather data is fetched, the application will display the current weather information and a weather forecast for the upcoming days.
3. The top section of the page displays general information about the location and weather conditions such as humidity, pressure, wind speed, and air quality index (AQI).
4. The left section shows the current weather with the temperature, condition, and cloud coverage.
5. The right section displays the weather forecast for the upcoming days, including the date, weather icon, maximum and minimum temperature, and maximum wind speed.

## Dependencies

The application relies on the following dependencies:
* React
* React Router
* Material-UI
* react-typed
* Redux (for state management)
* Axios (for making HTTP requests)

These dependencies are automatically installed when running npm install.

## API

* The weather application uses the WeatherAPI.com and LocationIQ APIs to fetch weather and location data.
* The WeatherAPI.com API provides access to current weather conditions and forecasts, while the LocationIQ API is used for reverse geocoding to retrieve location information based on latitude and longitude coordinates.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## View
![WhatsApp Image 2023-07-12 at 00 10 27](https://github.com/CodeMongerrr/WeatherHub/assets/99281767/cf0fb3cb-3640-44bf-af22-81d643e0a58a)


![WhatsApp Image 2023-07-11 at 23 52 25](https://github.com/CodeMongerrr/WeatherHub/assets/99281767/4469a965-2fa3-455e-a9fd-1261f9e91a51)

