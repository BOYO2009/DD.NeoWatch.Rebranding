// Initialize watch scores
const watchScores = {
  Activ: 0,
  PFB56Nomad: 0,
  CosmosGrande: 0,
  CosmosUltra: 0,
  Vision: 0,
  RoyaleLegend: 0,
  CosmosVogue: 0,
};

function calculateResult() {
  console.log("calculateResult function called");
  const form = document.getElementById("watchQuizForm");

  // Reset scores
  for (const watch in watchScores) {
    watchScores[watch] = 0;
  }

  // Get all answers
  const answers = [];
  for (let i = 1; i <= 10; i++) {
    const answer = getRadioButtonAnswer(form[`answer${i}`]);
    if (!answer) {
      alert("Please answer all the questions.");
      return;
    }
    answers.push(answer);
  }

  // Apply scoring logic based on answers
  // Question 1: Budget
  switch (answers[0]) {
    case "Under $130":
      watchScores.Vision += 3;
      break;
    case "$130-$180":
      watchScores.Activ += 3;
      watchScores.CosmosGrande += 3;
      break;
    case "$180-$250":
      watchScores.PFB56Nomad += 3;
      break;
    case "$250-$300":
      watchScores.CosmosUltra += 3;
      watchScores.CosmosVogue += 3;
      break;
    case "Above $300":
      watchScores.RoyaleLegend += 3;
      break;
  }

  // Question 2: Shape
  if (answers[1] === "Square/Rectangular") {
    watchScores.Activ += 2;
    watchScores.PFB56Nomad += 2;
    watchScores.CosmosGrande += 2;
    watchScores.CosmosUltra += 2;
    watchScores.Vision += 2;
    watchScores.CosmosVogue += 2;
  } else {
    watchScores.RoyaleLegend += 3;
  }

  // Question 3: Band Material
  switch (answers[2]) {
    case "Silicone/Rubber":
      watchScores.Activ += 2;
      watchScores.CosmosGrande += 2;
      watchScores.CosmosUltra += 2;
      watchScores.Vision += 2;
      break;
    case "Leather":
      watchScores.RoyaleLegend += 3;
      break;
    case "Metal":
      watchScores.CosmosVogue += 3;
      break;
    case "Light-colored synthetic":
      watchScores.PFB56Nomad += 3;
      break;
  }

  // Question 4: Band Color
  switch (answers[3]) {
    case "Black":
      watchScores.Activ += 2;
      watchScores.CosmosUltra += 2;
      break;
    case "Blue":
      watchScores.CosmosGrande += 3;
      break;
    case "Teal/Green":
      watchScores.Vision += 3;
      break;
    case "Brown/Tan":
      watchScores.RoyaleLegend += 3;
      break;
    case "Silver/Metallic":
      watchScores.PFB56Nomad += 2;
      watchScores.CosmosVogue += 3;
      break;
  }

  // Question 5: Watch Face Style
  switch (answers[4]) {
    case "Minimalist digital":
      watchScores.Activ += 2;
      watchScores.PFB56Nomad += 2;
      break;
    case "Colorful and vibrant":
      watchScores.Vision += 2;
      watchScores.CosmosGrande += 2;
      break;
    case "Traditional analog":
      watchScores.RoyaleLegend += 3;
      break;
    case "Modern with bright accents":
      watchScores.CosmosUltra += 3;
      break;
    case "Tech-forward with data displays":
      watchScores.CosmosVogue += 3;
      break;
  }

  // Question 6: Premium Appearance
  switch (answers[5]) {
    case "Not important":
      watchScores.Activ += 2;
      watchScores.Vision += 2;
      break;
    case "Somewhat important":
      watchScores.PFB56Nomad += 2;
      watchScores.CosmosGrande += 2;
      break;
    case "Very important":
      watchScores.CosmosUltra += 3;
      watchScores.RoyaleLegend += 3;
      watchScores.CosmosVogue += 3;
      break;
  }

  // Question 7: Primary Use
  switch (answers[6]) {
    case "Fitness and activity tracking":
      watchScores.Activ += 2;
      watchScores.Vision += 2;
      break;
    case "Business and professional settings":
      watchScores.RoyaleLegend += 3;
      watchScores.CosmosVogue += 3;
      break;
    case "Everyday casual use":
      watchScores.PFB56Nomad += 2;
      watchScores.CosmosGrande += 2;
      break;
    case "Advanced tech features":
      watchScores.CosmosUltra += 3;
      break;
  }

  // Question 8: Aesthetic Preference
  switch (answers[7]) {
    case "Very modern":
      watchScores.Vision += 3;
      watchScores.CosmosVogue += 3;
      break;
    case "Somewhat modern":
      watchScores.Activ += 2;
      watchScores.PFB56Nomad += 2;
      watchScores.CosmosGrande += 2;
      watchScores.CosmosUltra += 2;
      break;
    case "Classic/traditional":
      watchScores.RoyaleLegend += 3;
      break;
  }

  // Question 9: Screen Size
  switch (answers[8]) {
    case "Large display":
      watchScores.PFB56Nomad += 2;
      watchScores.CosmosUltra += 2;
      watchScores.Vision += 2;
      break;
    case "Medium display":
      watchScores.Activ += 2;
      watchScores.CosmosGrande += 2;
      watchScores.CosmosVogue += 2;
      break;
    case "Compact display":
      watchScores.RoyaleLegend += 2;
      break;
  }

  // Question 10: Feature Importance
  switch (answers[9]) {
    case "Long battery life":
      watchScores.Activ += 3;
      break;
    case "Premium materials":
      watchScores.RoyaleLegend += 3;
      watchScores.CosmosVogue += 3;
      break;
    case "Vibrant display":
      watchScores.Vision += 3;
      watchScores.CosmosGrande += 3;
      break;
    case "Advanced health tracking":
      watchScores.CosmosUltra += 3;
      break;
    case "Versatile style":
      watchScores.PFB56Nomad += 3;
      break;
  }

  // Determine winner
  let maxScore = -1;
  let winningWatches = [];

  for (const [watch, score] of Object.entries(watchScores)) {
    if (score > maxScore) {
      maxScore = score;
      winningWatches = [watch];
    } else if (score === maxScore) {
      winningWatches.push(watch);
    }
  }

  // Display result
  const resultDiv = document.getElementById("theresult");
  if (winningWatches.length === 1) {
    resultDiv.innerHTML = `<h2>YOUR WATCH IS: ${formatWatchName(
      winningWatches[0]
    )}</h2>`;
  } else {
    resultDiv.innerHTML = `<h2>Top matches: ${winningWatches
      .map(formatWatchName)
      .join(" & ")}</h2>`;
  }
}

// Helper functions
function getRadioButtonAnswer(radioGroup) {
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) return radioGroup[i].value;
  }
  return undefined;
}

function formatWatchName(name) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/Nomad/, " Nomad")
    .replace(/Grande/, " Grande")
    .replace(/Ultra/, " Ultra")
    .replace(/Vogue/, " Vogue")
    .trim();
}

// Add form submission handler
document
  .getElementById("watchQuizForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    calculateResult();
  });
