import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import Customer from "../models/customer.model";
import Manager from "../models/manager.model";
import Restaurant from "../models/restaurant.model";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/minkDB");
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
  }
};

connectDB();

// ! Declarations of variables have to be same as variable declarations in corresponding model
// ! __v in mongoDB is set as version number
// Customers
const generateCustomers = (num: number) => {
  const customers = [];

  for (let customer = 0; customer < num; customer++) {
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const address = faker.location.streetAddress();
    const phone = faker.phone.number();

    customers.push({ fullName, email, password, address, phone });
  }

  return customers;
};

const customers = generateCustomers(50);

Customer.insertMany(customers)
  .then((docs) =>
    console.log(`${docs.length} users have been inserted into database`)
  )
  .catch((err) => {
    console.log(err);
  });

// Managers
const generateManagers = (num: number) => {
  const managers = [];

  for (let manager = 0; manager < num; manager++) {
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const address = faker.location.streetAddress();
    const phone = faker.phone.number();

    managers.push({ fullName, email, password, address, phone });
  }

  return managers;
};

const managers = generateManagers(10);

Manager.insertMany(managers)
  .then((docs) =>
    console.log(`${docs.length} users have been inserted into database`)
  )
  .catch((err) => {
    console.log(err);
  });

const generateRestaurants = (num: number) => {
  const restaurant = [];

  for (let Restaurant = 0; Restaurant < num; Restaurant++) {
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const address = faker.location.streetAddress();
    const phone = faker.phone.number();

    restaurant.push({ fullName, email, password, address, phone });
  }

  return restaurant;
};

const restaurants = generateRestaurants(10);

Restaurant.insertMany(restaurants)
  .then((docs) =>
    console.log(`${docs.length} users have been inserted into database`)
  )
  .catch((err) => {
    console.log(err);
  });
