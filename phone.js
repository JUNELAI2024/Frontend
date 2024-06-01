function displayQuotes() {
    const quotes = [
      "You become responsible, forever, for what you have tamed.",
      "But the conceited man did not hear him. Conceited people never hear anything but praise.",
      "Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
      "Where are the people?" resumed the little prince at last. "It's a little lonely in the desert…" "It is lonely when you're among people, too," said the snake.",
      "A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.",
      "When someone blushes, doesn't that mean 'yes'?",
      "I have lived a great deal among grown-ups. I have seen them intimately, close at hand. And that hasn't much improved my opinion of them.",
      "Only the children know what they are looking for.",
      "But the eyes are blind. One must look with the heart.",
      "All men have stars, but they are not the same things for different people. For some, who are travelers, the stars are guides. For others they are no more than little lights in the sky. For others, who are scholars, they are problems... But all these stars are silent. You-You alone will have stars as no one else has them.",
      "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
      "It is much more difficult to judge oneself than to judge others. If you succeed in judging yourself rightly, then you are indeed a man of true wisdom.",
      "All grown-ups were once children... but only few of them remember it.",
      "It is the time you have wasted for your rose that makes your rose so important.",
      "I am who I am and I have the need to be."
    ];a
  
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = "";
  
    quotes.forEach((quote) => {
      const quoteElement = document.createElement("div");
      quoteElement.classList.add("quote");
      quoteElement.textContent = quote;
      quoteContainer.appendChild(quoteElement);
    });
  }
  
  // Call the function to display the quotes
  displayQuotes();