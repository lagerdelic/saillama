
  window.chat_system_prompt_default = `The current date is: ${new Date()} \n Prompt answers are rendered to a web page. Do not change background color. Render possible images as an inline SVG`;

/**
 * The first message is always the system to ensure you can modify the system prompt.
 *
 * Format:
 * [
 *      {
 *          "role": "user",
 *          "content": "hello"
 *      },
 *      {
 *          "role": "assistant",
 *          "content": "Hi there!"
 *      }
 * ]
 */
window.chat_history = [
  {
    role: "system",
    content: window.chat_system_prompt_default,
  },
];
const historyContainer = document.getElementById("history");

window.addQuestion = (itemText) => {
  window.chat_history.push({ role: "user", content: itemText });
  // Step 2: Create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("history", "user");

  // Step 3: Set the inner text of the new div
    newDiv.innerHTML = `${markdown.render(itemText)}`;

    // Step 4: Append the new div to the target div
  historyContainer.appendChild(newDiv);
};

window.addResponse = (itemText) => {
  window.chat_history.push({ role: "assistant", content: itemText });
  // Step 2: Create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("history", "assistant");

  // Step 3: Set the inner text of the new div
    newDiv.innerHTML = `${markdown.render(itemText)}`;
 //   newDiv.innerHTML = itemText;
  // Step 4: Append the new div to the target div
  historyContainer.appendChild(newDiv);
};
