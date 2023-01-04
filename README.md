# ecommerce-back-end

# 13 Object-Relational Mapping (ORM): E-Commerce Back End

# employee-tracker

![MIT](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Screencastify Link](#screencastify)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia

## Installation

create env file with personal mysql pw information
get on right database `use ecommerce_db`
seed DB with `npm run seed`
connect to server with `npm i`
use insomnia to test
disconnect from server with `^c`

## Screencastify

`CHANGE THIS LINK!!`

https://drive.google.com/file/d/1_aeI5nOpC8oFLCUPsXRdS-YI-oWHfK26/view

## License

License used for this project: [MIT LICENSE](https://opensource.org/licenses/MIT)
Please refer to the license section of my REPO if additional information is needed

## Contributing

n/a

## Testing

n/a

## Questions

Questions? Feel free to get in touch:

GitHub: https://github.com/sely1724

Email: sylvianne9417@gmail.com

- The walkthrough video must demonstrate how to create the schema from the MySQL shell.

- The walkthrough video must demonstrate how to seed the database from the command line.

- The walkthrough video must demonstrate how to start the application’s server.

- The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.

- The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.

- The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.

### Technical Acceptance Criteria: 40%

- Satisfies all of the preceding acceptance criteria plus the following:

  - Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  - Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  - Syncs Sequelize models to a MySQL database on the server start.

  - Includes column definitions for all four models outlined in the Challenge instructions.

  - Includes model associations outlined in the Challenge instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality readme with description and a link to a walkthrough video.

## Review

You are required to submit BOTH of the following for review:

- A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

- The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
