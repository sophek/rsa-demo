// Get the csv data and parse it into an array of objects
// You can use any number of csv converter libraries to parse the csv data or online
// Or you can write your own parser, which is out of scope of this assignment

// I converted the csv data into an array of objects
import { users } from "./users.js";

const get2FAEnabledUsers = (user) => {
  // Email should be from the domain @example.com
  const isExampleEmail = user.email.includes("@example.com");

  //Filter out users that have 2FA enabled
  const is2FAEnabled = user.twoFactor;

  // Ip address should be from the ip range 192.168.x.x
  const ipAddressRange = user.ipAddress.includes("192.168.");

  // Email must be from the @example.com and must have 2FA enabled or must be connected from an internal company IP address (192.168.X.X) to be granted access.
  if (!isExampleEmail) {
    return false;
  }

  // If the ip range or the 2FA is enabled, return true
  if (ipAddressRange || is2FAEnabled) {
    return true;
  }

  return false;
};

// Some simple tests

// Should be true, email and ip address are from the example domain
get2FAEnabledUsers({
  email: "john@example.com",
  twoFactor: false,
  ipAddress: "192.168.1.3",
});

// Should be true, email is from example.com, but ip address is from the example domain
get2FAEnabledUsers({
  email: "sean@example.com",
  twoFactor: true,
  ipAddress: "192.168.4.3",
});

// Should be false, email is not from domain example.com, even though ip address is from the example domain and 2FA is enabled
get2FAEnabledUsers({
  email: "jane@sample.com",
  twoFactor: true,
  ipAddress: "192.168.1.3",
});

// Mapped through the users array and filtered out the users that passes the get2FAEnabledUsers function
const grantedUsers = users.map((employee) => {
  let isGranted = get2FAEnabledUsers(employee);
  return { ...employee, accessGranted: isGranted };
});

console.log(grantedUsers);
