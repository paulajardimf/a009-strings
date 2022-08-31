const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a)
console.log(minhaString.trim());

// b)
console.log(minhaString.trim().length);
console.log(minhaString.length);

// c)
const novaString = minhaString.replace("________","sticioso");
console.log(novaString);