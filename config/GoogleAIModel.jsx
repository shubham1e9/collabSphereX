const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Reference to: {\n   \"time\": 1550476186479,\n   \"blocks\": [\n      {\n         \"id\": \"oUq2g_tl8y\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Editor.js\",\n            \"level\": 2\n         }\n      },\n      {\n         \"id\": \"zbGZFPM-iI\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.\"\n         }\n      },\n      {\n         \"id\": \"qYIGsjS5rt\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Key features\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"XV87kJS_H1\",\n         \"type\": \"list\",\n         \"data\": {\n            \"style\": \"unordered\",\n            \"items\": [\n               \"It is a block-styled editor\",\n               \"It returns clean data output in JSON\",\n               \"Designed to be extendable and pluggable with a simple API\"\n            ]\n         }\n      },\n      {\n         \"id\": \"AOulAjL8XM\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"What does it mean «block-styled editor»\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"cyZjplMOZ0\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\\"cdx-marker\\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.\"\n         }\n      }\n   ],\n   \"version\": \"2.8.1\"\n}\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"time\": 1686520567434,\n  \"blocks\": [\n    {\n      \"id\": \"054a539c-c0a4-4449-8251-76731b119936\",\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Grocery Todo List\",\n        \"level\": 1\n      }\n    },\n    {\n      \"id\": \"87d5b0ab-e89c-4c0b-ba8c-8b300b0d204c\",\n      \"type\": \"paragraph\",\n      \"data\": {\n        \"text\": \"This is your grocery todo list. Add items and check them off as you shop!\"\n      }\n    },\n    {\n      \"id\": \"2936e07f-5916-4942-a881-64c2b2e9357a\",\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"Milk\",\n          \"Eggs\",\n          \"Bread\",\n          \"Cheese\",\n          \"Apples\"\n        ]\n      }\n    }\n  ],\n  \"version\": \"2.8.1\"\n}\n```\n\n**Explanation:**\n\n* **\"time\"**: Timestamp of the content's creation or last modification.\n* **\"blocks\"**: Array of blocks that represent the content of the Editor.js instance.\n* **\"version\"**: Version of the Editor.js library used to generate this data.\n\n**Blocks:**\n\n* **Header:**\n    * **\"id\"**: Unique identifier for the block.\n    * **\"type\"**: \"header\" indicates that this is a heading block.\n    * **\"data\"**: Contains information about the heading.\n        * **\"text\"**: The text of the heading (\"Grocery Todo List\").\n        * **\"level\"**: The level of the heading (1 for a top-level heading).\n* **Paragraph:**\n    * **\"id\"**: Unique identifier for the block.\n    * **\"type\"**: \"paragraph\" indicates that this is a paragraph block.\n    * **\"data\"**: Contains the text content of the paragraph.\n* **List:**\n    * **\"id\"**: Unique identifier for the block.\n    * **\"type\"**: \"list\" indicates that this is a list block.\n    * **\"data\"**: Contains information about the list.\n        * **\"style\"**: \"unordered\" for a bulleted list.\n        * **\"items\"**: Array of strings representing each list item.\n\n**How to use this JSON:**\n\nThis JSON structure can be used with the Editor.js library to load the grocery todo list into an Editor.js instance. You can then edit the content, add new items, and save the changes to the JSON. \n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
