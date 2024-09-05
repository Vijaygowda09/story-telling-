document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-container');

    // Define story segments
    const storyData = {
        start: {
            text: "Welcome to your adventure! Choose a story to begin:",
            options: [
                { text: "The Mysterious Forest", next: 'forest_start' },
                { text: "The Haunted Castle", next: 'castle_start' },
                { text: "The Space Odyssey", next: 'space_start' },
                { text: "The Hidden Treasure", next: 'treasure_start' },
                { text: "The Time Travel Adventure", next: 'time_start' },
                { text: "The Secret Lab", next: 'lab_start' },
                { text: "The Lost City", next: 'city_start' },
                { text: "The Dragon's Lair", next: 'dragon_start' },
                { text: "The Underwater Quest", next: 'underwater_start' },
                { text: "The Desert Mirage", next: 'desert_start' }
            ]
        },
        // Story 1: The Mysterious Forest
        forest_start: {
            text: "You are standing at the edge of a mysterious forest. Do you want to enter or go back?",
            options: [
                { text: "Enter the forest", next: 'forest_path' },
                { text: "Go back", next: 'start' }
            ]
        },
        forest_path: {
            text: "As you walk deeper into the forest, you find a fork in the path. Do you take the left path or the right path?",
            options: [
                { text: "Take the left path", next: 'forest_left' },
                { text: "Take the right path", next: 'forest_right' }
            ]
        },
        forest_left: {
            text: "You encounter a magical creature. It offers you a choice: accept its help or continue on your own.",
            options: [
                { text: "Accept its help", next: 'forest_magic' },
                { text: "Continue on your own", next: 'forest_alone' }
            ]
        },
        forest_right: {
            text: "You discover an ancient tree with a hidden message. Do you try to decode the message or ignore it?",
            options: [
                { text: "Decode the message", next: 'forest_message' },
                { text: "Ignore it", next: 'forest_ignore' }
            ]
        },
        // Story 2: The Haunted Castle
        castle_start: {
            text: "You arrive at a haunted castle. Do you enter or run away?",
            options: [
                { text: "Enter the castle", next: 'castle_entrance' },
                { text: "Run away", next: 'start' }
            ]
        },
        castle_entrance: {
            text: "Inside the castle, you find two doors. One leads to the dungeons, and the other leads to the tower. Which one do you choose?",
            options: [
                { text: "Dungeons", next: 'castle_dungeons' },
                { text: "Tower", next: 'castle_tower' }
            ]
        },
        castle_dungeons: {
            text: "In the dungeons, you encounter a ghostly figure. Do you approach it or hide?",
            options: [
                { text: "Approach the figure", next: 'castle_ghost' },
                { text: "Hide", next: 'castle_hide' }
            ]
        },
        castle_tower: {
            text: "At the top of the tower, you find a mysterious artifact. Do you take it or leave it?",
            options: [
                { text: "Take the artifact", next: 'castle_artifact' },
                { text: "Leave it", next: 'castle_leave' }
            ]
        },
        // Add stories for space, treasure, time, lab, city, dragon, underwater, desert
        // Example for one more story
        space_start: {
            text: "You are in a spaceship orbiting a distant planet. Do you land on the planet or explore the space station?",
            options: [
                { text: "Land on the planet", next: 'space_planet' },
                { text: "Explore the space station", next: 'space_station' }
            ]
        },
        space_planet: {
            text: "On the planet's surface, you discover an alien civilization. Do you make contact or return to your ship?",
            options: [
                { text: "Make contact", next: 'space_alien' },
                { text: "Return to your ship", next: 'space_ship' }
            ]
        },
        space_station: {
            text: "In the space station, you find an advanced technology. Do you study it or leave it alone?",
            options: [
                { text: "Study the technology", next: 'space_technology' },
                { text: "Leave it alone", next: 'space_leave' }
            ]
        },
        // Complete other stories similarly
        end: {
            text: "The end of your adventure. Thank you for playing!",
            options: [
                { text: "Start over", next: 'start' }
            ]
        }
    };

    // Function to render a story segment
    function renderStory(part) {
        const story = storyData[part];
        if (!story) return;

        storyContainer.classList.add('fade-out');

        setTimeout(() => {
            storyContainer.innerHTML = `
                <div class="story-text">${story.text}</div>
                <div class="story-options">
                    ${story.options.map(option => `<button onclick="goTo('${option.next}')">${option.text}</button>`).join('')}
                </div>
            `;
            storyContainer.classList.remove('fade-out');
            storyContainer.classList.add('fade-in');
        }, 500); // Duration of fade-out transition
    }

    // Function to navigate to a different story segment
    window.goTo = function(part) {
        renderStory(part);
    };

    // Start the story
    renderStory('start');
});
