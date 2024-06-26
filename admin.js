
// Load events from local storage or initialize an empty array
let events = JSON.parse(localStorage.getItem('hotelEvents')) || [];

// Function to display events
function displayEvents() {
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = '';

    events.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');

        const eventDetails = document.createElement('div');
        eventDetails.innerHTML = `
            <strong>${event.eventName}</strong><br>
            Date: ${event.date}<br>
            Time: ${event.time}<br>
            Location: ${event.location}<br>
            Capacity: ${event.capacity}<br>
            Description: ${event.description}
        `;
        eventItem.appendChild(eventDetails);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEvent(index);
        eventItem.appendChild(deleteButton);

        eventsContainer.appendChild(eventItem);
    });
}

// Function to add an event
function addEvent(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventCapacity = document.getElementById('eventCapacity').value;

    const newEvent = {
        eventName,
        date: eventDate,
        time: eventTime,
        description: eventDescription,
        location: eventLocation,
        capacity: eventCapacity
    };

    events.push(newEvent);
    localStorage.setItem('hotelEvents', JSON.stringify(events));
    displayEvents();

    document.getElementById('addEventForm').reset();
}

// Function to delete an event
function deleteEvent(index) {
    events.splice(index, 1);
    localStorage.setItem('hotelEvents', JSON.stringify(events));
    displayEvents();
}

// Event listener for form submission
document.getElementById('addEventForm').addEventListener('submit', addEvent);

// Initial display of events
document.addEventListener('DOMContentLoaded', displayEvents);


// BOOKINGS
document.addEventListener('DOMContentLoaded', function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingsContainer = document.getElementById('bookings');

    bookings.forEach(booking => {
        const bookingElement = document.createElement('div');
        bookingElement.classList.add('booking');
        bookingElement.style.border = '1px solid '

        bookingElement.innerHTML = `
            <h3>${booking.firstName} ${booking.lastName}</h3>
            <p>Email: ${booking.email}</p>
            <p>Room Type: ${booking.roomType}</p>
            <p>Number of Guests: ${booking.noOfGuest}</p>
            <p>Arrival: ${booking.arrivalDate} at ${booking.arrivalTime}</p>
            <p>Departure: ${booking.departureDate}</p>
            <p>Free Pickup: ${booking.freePickup}</p>
            <p>Special Request: ${booking.specialRequest}</p>
        `;

        bookingsContainer.appendChild(bookingElement);
    });
});

