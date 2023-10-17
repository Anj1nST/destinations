### Description

- To accomplish this task, I utilized create-react-app with the --template typescript to quickly set up the project. I removed all the default files and recreated them from scratch to eliminate any unnecessary elements.

- I organized all the components into a dedicated "components" folder for better organization. The "App" component is responsible for managing the state of multiple components. I found this sufficient, so I opted not to include state management libraries like Redux.

- In the "utils" folder, you'll find essential functions, as well as a "fake-api.ts" file containing two functions that simulate server operations.

- I also chose to use SCSS because it offers more convenience compared to regular CSS.


### The Task

You are tasked with creating a React, TypeScript application for searching travel destinations. Users should be able to search for destinations and view details about them. Additionally, you will implement an algorithm to suggest nearby destinations based on the selected destination.

Requirements:

User Interface (UI):
Create a React application with two main parts:
Destination Search: Allow users to search for travel destinations by name (the data is provided).
Destination Details: Display detailed information about the selected destination, including its name, description, and top 5 nearby destinations.
Implement an asynchronous combobox for the destination search that fetches and displays matching destination names from a fake API.
The fake API must only return the destination based on the user query, which means you cannot fetch all destinations at once.
You can create a file called fake-api.ts and export the async functions as fake APIs. Please console.log the arguments of all fake API functions.
Clicking on the nearby destinations should show the details of the selected destination and its nearby destinations.
User Experience (UX):
Implement error handling for API requests. When the user enters ‘fail’, the front end should mimic a backend error case and show an error message near Combobox.
Add loading indicators during data fetching.
The Combobox should be keyboard-accessible.
Optional Bonus:
Implement client-side caching.
Debounce user input.
Make use of modern accessible UI libraries.
Deep link to the current state.
Submission Guidelines:

Deploy the application and share the link.
Make your repository publicly accessible and share the link.
Include a README.md file that explains the design decisions and technology choices.
Evaluation Criteria:

Candidates will be evaluated based on the following:

Code quality and organization.
TypeScript usage and type safety.
React component structure and state management.
Error handling and user experience.
API integration and data modeling.
Algorithm implementation (destination recommendation).
Complex component implementation (async combobox).
Bonus features (if implemented).