import { Property, Address, Area, City, User } from "../../models";

export const areas = {
  downtown: new Area({
    id: "downtown",
    name: "downtown"
  })
};

export const city = {
  "new york": new City({
    id: "new york",
    name: "new york"
  })
};

export const properties = {
  "downtown house": new Property({
    id: "downtown house",
    address: new Address({
      area: areas.downtown,
      city: city["new york"],
      coordinates: "40.7128,74.0060",
      street: "My street 123"
    }),
    description: "A new pretty house",
    petsAllowed: false,
    smokingAllowed: false
  })
};

export const users = {
  molly: new User({
    id: "molly",
    name: "molly",
    email: "molly@example.com",
    password: "molly123"
  })
};
