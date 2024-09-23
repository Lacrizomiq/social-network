db.createCollection("users");

db.users.insertMany([
  {
    id: 1,
    username: "Nib",
    email: "nibleplusbeau@gmail.com",
    password: "$2y$10$qMyKf9zyaWdrT80DnXkfqO7IvARkXEKtHzqlxwndYAXsgOdfuMkPW",
    bio: "Le plus beau des profs",
    profile_picture: "https://placehold.co/600x400",
  },
  {
    id: 2,
    username: "Tudor",
    email: "tudor@gmail.com",
    password: "$2y$10$ypR2IyzfIzGE6Q30MjPwvOxf/UAoZ104R3qNAFM7vh98DtQPqutay",
    bio: "Le plus beau des roumains",
    profile_picture: "https://placehold.co/600x400",
  },
  {
    id: 3,
    username: "Redouane",
    email: "redouane@gmail.com",
    password: "$2y$10$/LZVoPUB4bbyoy2lDhecJexSEocZsQB7v7Q5jZ6RN6jpqlaLT.de2",
    bio: "Le plus beau des marocains",
    profile_picture: "https://placehold.co/600x400",
  },
]);
