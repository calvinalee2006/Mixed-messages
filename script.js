const message = [
    "Intellectual growth should commence at birth and ease only at death - Albert Einstein",
    "The capacity to lean is a gift; the ability to learn is a skill; the willingness to learn is a choice -Brian Herbert",
    "Never stop learning; for when we stop learning, we stop growing. -Loyal 'Jack' Lewman",
    "I am still learning. -Michelangelo (age 87!)",
    "The expert in anything was once a beginner"
    ]
    
function learnMessage() {
    const randomNumber = Math.floor(Math.random() * (message.length));
    document.getElementById('hereMessage').innerHTML = message[randomNumber];
    };
    