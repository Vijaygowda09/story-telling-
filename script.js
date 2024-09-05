document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-container');
    
    // Story data
    const storyData = {
        start: {
            text: "You find yourself in a dark forest. Do you wish to explore the forest or return to the village?",
            options: [
                { text: "Explore the forest", next: 'forest' },
                { text: "Return to the village", next: 'village' }
            ]
        },
        forest: {
            text: "As you explore the forest, you come across a mysterious cave. Do you enter the cave or continue exploring?",
            options: [
                { text: "Enter the cave", next: 'cave' },
                { text: "Continue exploring", next: 'deep_forest' }
            ]
        },
        village: {
            text: "Back in the village, you see a bustling marketplace. Do you visit the marketplace or go to the town hall?",
            options: [
                { text: "Visit the marketplace", next: 'marketplace' },
                { text: "Go to the town hall", next: 'town_hall' }
            ]
        },
        cave: {
            text: "Inside the cave, you find a hidden treasure chest. Do you open the chest or leave it alone?",
            options: [
                { text: "Open the chest", next: 'treasure' },
                { text: "Leave it alone", next: 'cave_exit' }
            ]
        },
        deep_forest: {
            text: "You wander deeper into the forest and get lost. The adventure ends here.",
            options: []
        },
        marketplace: {
            text: "At the marketplace, you find various goods and friendly merchants. Your adventure here is enjoyable.",
            options: []
        },
        town_hall: {
            text: "At the town hall, you meet the mayor who offers you a quest. Your adventure here is just beginning.",
            options: []
        },
        treasure: {
            text: "You find a treasure map inside the chest, leading to new adventures.",
            options: []
        },
        cave_exit: {
            text: "You leave the cave, having discovered nothing new.",
            options: []
        }
    };

    function renderStory(part) {
        const story = storyData[part];
        if (!story) return;

        storyContainer.innerHTML = `
            <div class="story-text">${story.text}</div>
            <div class="story-options">
                ${story.options.map(option => `<button onclick="goTo('${option.next}')">${option.text}</button>`).join('')}
            </div>
        `;
    }

    window.goTo = function(part) {
        renderStory(part);
    };

    // Start the story
    renderStory('start');
});
