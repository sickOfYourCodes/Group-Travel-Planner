USE groupvacations_db;

INSERT INTO users(first_name, last_name, user_name, email, password)
VALUES ("Henry", "Liang", "mxr", "mxr@gmail.com", "password12345"), ("Jeannie", "Lee", "potastic", "potastic@gmail.com", "password12345"), ("Panda", "Po", "panda", "panda@gmail.com", "password12345");

USE groupvacations_db;

INSERT INTO trips(trip_name, location, description, companions, budget)
VALUE ("Kardasian Trip", "New York City", "Trip with friends to see a braodway show", true, 800), ("Japan Solo Trip", "Japan", "Solo trip to see the cherry blossoms", false, 2000), ("Taiwan Trip", "Taiwan", "A trip to see family.", true, 2500)