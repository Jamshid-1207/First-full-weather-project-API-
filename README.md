# Weather App

Weather app built on the [OpenWeatherMap API](https://openweathermap.org/api). On load it detects your location and shows the current weather; you can also search for any city.

🔗 **Live demo:** https://first-full-weather-project-api.vercel.app

## Features

- Weather for your current location via the Geolocation API
- Search by city name, with a message when the city is not found
- Temperature, weather description and country code
- 3D weather icons matched to OpenWeatherMap condition codes, with separate day and night variants

## Tech stack

HTML · CSS · JavaScript (no frameworks) · Fetch API · OpenWeatherMap API

## Getting started

There is no build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

The OpenWeatherMap key lives in `index.js` (`API_KEY`). To use your own, get a free key at [openweathermap.org](https://openweathermap.org/api) and replace it.

## About

This was my first complete project working with a real API.

**Author:** Jamshidbek Samandarov · [GitHub](https://github.com/Jamshid-1207) · [Telegram](https://t.me/Samandarov_2804)
