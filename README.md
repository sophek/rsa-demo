# rsa-demo

Background: You have a spreadsheet (CSV) of users that includes their username, their email address, their IP address and whether they have two-factor authentication (2FA) enabled. This data must be parsed to determine who can be granted access to the restricted section of a website based on the following logic:

• Only employees (who all have @example.com email addresses) should have access.

• Employees must have 2FA enabled or must be connected from an internal company IP address (192.168.X.X) to be granted access.

**Task:** Develop a function that accepts the data for one user at a time and returns a Boolean value stating whether they should be granted access to the restricted resource.

**The solution** should then loop through the data in the spreadsheet to feed each user into the function.

**Deliverable:** The final deliverable should be a new data set that has the existing data with a new value indicating if they have access to the resource. The data set can be in any format, such as a CSV, a dictionary/hash/map, a JSON object, etc.

**Instructions:**
Clone this repo and run in a node terminal
https://github.com/sophek/rsa-demo.git
cd into directory rsa-demo
run node index.js from terminal window
