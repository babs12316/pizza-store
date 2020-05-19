### How To run project
1. Use 'git clone https://github.com/babs12316/pizza-store.git' to create project directory
2. Go to project directoy and use 'npm install' to install all node dependencies
3. Run 'npm start' to start project,Open (http://localhost:3000) to view it in the browser.
4. For unit testing run 'npm test', for e2e testing run 'npx cypress open'

### Project Information
- Project gets pizzas from local json file & displays in store 
- User can add pizzas to cart 
- In Cart view user can increase,decrease or delete the pizzas

### Technical details
- Pizza-store app is implemented in React using React Hooks
- useContext hook is used to share global variable (cart) information 
- Fetch Api is used to get data and error is handled using try 
- Routing is used to navigate between store and cart view
- Unit testing is done using React Test Library and e2e testing is done using cypress

### Project Structure
- All component are stored in components folder
- For each component a serprate folder is created in components
- This folder contains all files related to component such as js,css,test
