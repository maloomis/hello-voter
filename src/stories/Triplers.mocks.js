export const TRIPLERS_UNCONFIRMED = [
  {
    id: "1",
    status: "unconfirmed",
    first_name: "Lauren",
    last_name: "R",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_PENDING = [
  {
    id: "2",
    status: "pending",
    first_name: "Michael",
    last_name: "Marsh",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_CONFIRMED = [
  {
    id: "3",
    status: "confirmed",
    first_name: "Mike",
    last_name: "Marsher",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_FULL = [
  ...TRIPLERS_UNCONFIRMED,
  {
    id: "4",
    status: "unconfirmed",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
  ...TRIPLERS_PENDING,
  {
    id: "5",
    status: "pending",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
  {
    id: "6",
    status: "pending",
    first_name: "Lauren",
    last_name: "Ralph",
    address: { address1: "1 Road Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
  ...TRIPLERS_CONFIRMED,
  {
    id: "7",
    status: "confirmed",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: false,
    is_ambassador_and_has_confirmed: false,
  },
]

export const TRIPLERS_FULL_WITH_AMBASSADOR = [
  ...TRIPLERS_UNCONFIRMED,
  ...TRIPLERS_PENDING,
  ...TRIPLERS_CONFIRMED,
  {
    id: "8",
    status: "pending",
    first_name: "Michael",
    last_name: "Marsh",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: true
  },
  {
    id: "9",
    status: "pending",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: false
  },
  {
    id: "10",
    status: "pending",
    first_name: "Lauren",
    last_name: "Ralph",
    address: { address1: "1 Road Rd", city: "Denver", state: "CO" },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: true
  },
  {
    id: "11",
    status: "confirmed",
    first_name: "Michael",
    last_name: "Marsh",
    address: {
      address1: "200 Address lane",
      city: "Denver",
      state: "CO",
    },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: false
  },
  {
    id: "12",
    status: "confirmed",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
    is_ambassador: true,
    is_ambassador_and_has_confirmed: true
  },
]

export const TRIPLERS_TO_ADD = [
  {
    id: "a",
    first_name: "Judy",
    last_name: "Blume",
    address: { address1: "1 Really Long Address Ln Lorem Ipsum Lorem Ipsum", city: "Denver", state: "CO" }
  },
  {
    id: "b",
    first_name: "Edison",
    last_name: "Shepherd",
    address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" }
  },
  {
    id: "c",
    first_name: "Lauren",
    last_name: "Ralph",
    address: { address1: "1 Road Rd", city: "Denver", state: "CO" }
  },
  {
    id: "d",
    first_name: "Pamela",
    last_name: "Jones",
    address: { address1: "1 Jones Road Rd", city: "Denver", state: "CO" }
  },
  {
    id: "e",
    first_name: "Torr",
    last_name: "Carbin",
    address: { address1: "31 Autumn Leaf Avenue", city: "Denver", state: "CO" }
  },
  {
    id: "f",
    first_name: "Stepha",
    last_name: "Gleadhell",
    address: { address1: "1716 Warner Drive", city: "Denver", state: "CO" }
  },
  {
    id: "g",
    first_name: "Charmaine",
    last_name: "Kilalea",
    address: { address1: "378 Carey Alley", city: "Denver", state: "CO" }
  },
  {
    id: "h",
    first_name: "Janeczka",
    last_name: "Pauletto",
    address: { address1: "16 Lukken Trail", city: "Denver", state: "CO" }
  },
  {
    id: "i",
    first_name: "Guthry",
    last_name: "Ondrich",
    address: { address1: "7673 Moose Parkway", city: "Denver", state: "CO" }
  },
  {
    id: "j",
    first_name: "Nils",
    last_name: "Aspinall",
    address: { address1: "4 Mendota Plaza", city: "Denver", state: "CO" }
  },
  {
    id: "k",
    first_name: "Vaclav",
    last_name: "Comolli",
    address: { address1: "186 Dryden Pass", city: "Denver", state: "CO" }
  },
  {
    id: "l",
    first_name: "Xylina",
    last_name: "Blakey",
    address: { address1: "23824 Toban Lane", city: "Denver", state: "CO" }
  },
  {
    id: "m",
    first_name: "Tann",
    last_name: "Robrow",
    address: { address1: "49337 Waywood Circle", city: "Denver", state: "CO" }
  },
  {
    id: "n",
    first_name: "Gretchen",
    last_name: "Kenningham",
    address: { address1: "3599 Declaration Center", city: "Denver", state: "CO" }
  },
  {
    id: "o",
    first_name: "Karel",
    last_name: "Colledge",
    address: { address1: "23602 Myrtle Circle", city: "Denver", state: "CO" }
  },
  {
    id: "p",
    first_name: "Tremain",
    last_name: "Greenhouse",
    address: { address1: "3 Leroy Plaza", city: "Denver", state: "CO" }
  },
  {
    id: "q",
    first_name: "Venita",
    last_name: "Perryn",
    address: { address1: "5 Judy Pass", city: "Denver", state: "CO" }
  },
  {
    id: "r",
    first_name: "Neal",
    last_name: "Cherrett",
    address: { address1: "6 Merrick Road", city: "Denver", state: "CO" }
  },
  {
    id: "s",
    first_name: "Abagail",
    last_name: "Kershaw",
    address: { address1: "2 Merrick Park", city: "Denver", state: "CO" }
  },
  {
    id: "t",
    first_name: "Vidovik",
    last_name: "Michelotti",
    address: { address1: "7899 David Junction", city: "Denver", state: "CO" }
  },
  {
    id: "u",
    first_name: "Clyve",
    last_name: "Tirrell",
    address: { address1: "21357 Brentwood Crossing", city: "Denver", state: "CO" }
  },
  {
    id: "v",
    first_name: "Jeannine",
    last_name: "O'Loinn",
    address: { address1: "86170 Mifflin Terrace", city: "Denver", state: "CO" }
  },
  {
    id: "w",
    first_name: "Alaric",
    last_name: "Musselwhite",
    address: { address1: "05 Weeping Birch Drive", city: "Denver", state: "CO" }
  },
  {
    id: "x",
    first_name: "Trefor",
    last_name: "Merit",
    address: { address1: "1 Surrey Road", city: "Denver", state: "CO" }
  },
  {
    id: "y",
    first_name: "Ramon",
    last_name: "Breed",
    address: { address1: "85 Kipling Terrace", city: "Denver", state: "CO" }
  },
  {
    id: "z",
    first_name: "Joann",
    last_name: "Pawden",
    address: { address1: "2 Hollow Ridge Parkway", city: "Denver", state: "CO" }
  },
]
