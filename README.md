# A Simple Memory Card Game

This project serves as a demonstration of my knowledge of React through the usage of hooks (useState and useEffect) to retain changes to components.
Below is a more in-depth explanation of the source code, alongside instructions on how to play the game.

## Game Instructions

- There are 12 cards displayed on the page, clicking on a card will trigger an event.
- This event either raises the counter by 1, or resets the counter to 0, depending on whether you have clicked on the card previously during the game session.
- The maximum high score for this game is twelve, due to the above events. A high score counter tracks this information.
- Reloading the page will reset the high score counter, since this data is not sent to a database.
- Keep in mind that the GIFs are sourced from Giphy's trending page, so the same cards may not show up the next day, or even within the next hour!

## How does the code work?

- There are twelve card components on the screen at any point in time. These components consist of GIF data sourced from the Giphy API.
- Due to the Giphy API taking time to return the GIF data for the 12 cards, the useEffect hook is utilized while running this asynchronous code to ensure that the GIFS do not change upon clicking a card. async and await are utilized here to return a Promise, and until that Promise is fulfilled, the program will not create the twelve card objects to prevent unintended side effects.
- Due to the nature of React components refreshing upon modification, the useState hook is utilized to maintain certain data upon clicking a card. 
- The component tree starts with the "App" as a whole being the root, with the counter and images components serving as children to this root. This design ensures that the Counter data can be accessed by the Images component so that the click listeners have data to compare to.

## If this project was expanded upon to be a full-stack application, how would this be achieved?

I would utilize a NodeJS/Express backend alongside a PostgreSQL database to store data. Data stored would include:
- User accounts (sign-up, log-in, and authentication via Passport included, with password encryption for security)
- High Score counter information
- A daily/weekly leaderboard (since this is designed to be small scale and the maximum possible high score is 12, a permanent leaderboard wouldn't add any value)
- The backend system would be deployed via Render, while the front-end would be deployed via Netlify.
