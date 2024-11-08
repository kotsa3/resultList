## Project Setup

1. Run `npm install` to install dependencies.
2. Start the development server with `npm run dev`.
3. Run tests with `npm run test`.

## Notes and Recommendations:

1. I decided to manage the state using the Context API as it suits the requirements for this project better.
2. Folder structure: Major functional components should be placed in the _modules_ folder. The _components_ folder should only contain shared or common components.
3. Interface placement: If an interface is specific to a component, it should be defined within the component file. If an interface is used across multiple files, it should be moved to the _interfaces_ folder.
4. The project uses the latest version of React, which is not yet fully compatible with the most recent Airbnb linting rules. Therefore, I’ve configured a more flexible linter setup.
5. Components are styled using SCSS modules, as per the project requirements.
6. I used index for component file names, but this is not a strict rule and can be adjusted according to the project's internal guidelines.
7. I've moved the sorting logic to API to show that this functionality should be done on the backend side.
8. MUI and related libraries were installed solely for the icons. I understand that it's not ideal to install multiple libraries just for two icons, but I did it to save time searching for the necessary icons online.
