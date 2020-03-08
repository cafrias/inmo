const users = {
  "1": {
    id: "1",
    name: "Andrew",
    email: "andrew@example.com",
    password: "12345678",
    phone: "123"
  },
  "2": {
    id: "2",
    name: "Ashley",
    email: "ashley@example.com",
    password: "12345678"
  }
};

const areas = {
  "1": {
    id: "1",
    name: "Barrio pirindonga"
  }
};

const cities = {
  "1": {
    id: "1",
    name: "Rio Grande"
  }
};

const properties = {
  "1": {
    id: "1",
    address: {
      street: "Av. Belgrano 123",
      area: areas["1"],
      city: cities["1"]
    },
    smokingAllowed: true,
    petsAllowed: false,
    description: "Un departamento viejito pero power"
  },
  "2": {
    id: "2",
    address: {
      street: "Av. Santa Fe 425",
      area: areas["1"],
      city: cities["1"]
    },
    smokingAllowed: true,
    petsAllowed: true,
    description: "Casa amoblada a estrenar"
  }
};

const rentOffers = {
  r1: {
    id: "r1",
    type: "RENT",
    property: properties["1"],
    period: "MONTHLY",
    cost: {
      amount: 15000,
      currency: "ARS"
    },
    user: users["1"]
  }
};

const sellingOffers = {
  s1: {
    id: "s1",
    type: "SELLING",
    property: properties["2"],
    user: users["2"],
    cost: {
      amount: 4500000,
      currency: "ARS"
    }
  }
};

const offers = {
  ...sellingOffers,
  ...rentOffers
};

const fixture = {
  users,
  rentOffers,
  sellingOffers,
  offers,
  properties
};

export default fixture;
