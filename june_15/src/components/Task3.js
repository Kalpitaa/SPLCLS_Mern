const movies = [
    { id: 1, name: "Leo", ticketPrice: 150 },
    { id: 2, name: "Avengers", ticketPrice: 200 },
    { id: 3, name: "Titanic", ticketPrice: 180 }
];

console.log("Available Movies:");
movies.forEach(movie => {
    console.log(
        `${movie.id}.${movie.name} - ₹${movie.ticketPrice}`

    );
});

const selectedMovieID = 2;

const selectMovie = movies.find(
    movie => movie.id === selectedMovieID
);

const selectedSeats = ["A1", "A2", "A3"];

const seatCount = selectedSeats.length;

const totalAmount = seatCount * selectMovie.ticketPrice;

console.log("\nBooking Summary:");
console.log("------------------");
console.log("Movie:", selectMovie.name);
console.log("Seats:", selectedSeats.join(", "));
console.log("Number of Tickets:", seatCount);
console.log("Price per Ticket: ₹" + selectMovie.ticketPrice);
console.log("Total Amount: ₹" + totalAmount);