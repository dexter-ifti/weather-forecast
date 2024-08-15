To set up the weather app locally for other users, follow these instructions:

1. Clone the repository: 
    ```
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate to the project directory:
    ```
    cd weather-app
    ```

3. Install the required dependencies:
    ```
    npm install
    ```

4. Obtain an API key from a weather data provider ([Website](https://www.weatherapi.com/)).

5. Create a `.env` file in the root directory of the project and add the API key:
    ```
    VITE_API_KEY=your-api-key
    ```

6. Start the development server:
    ```
    npm start
    ```

7. Open a web browser and visit `http://localhost:5173` to access the weather app.
