# 🚧 Experiemental Demo of UI as a function of AI 🚧

🧪 This demo explores how we can go beyond traditional chatbot interfaces by generating content and selecting the best UI components from your existing library. While AI can easily create UI, the results often don&apos;t align with your brand identity. This demo shows how LLMs, like OpenAI&apos;s, can not only generate content but also choose the most suitable components to present it effectively.

## TL;DR
The go to interface for AI has been the message thread. While this is a powerful UI model, it's also limiting. This demo shows how we can use AI to generate content and select the best UI components from your existing library. This allows you to create a more engaging and interactive experience for your users.

## FYI
This is a working demo to illustrate the idea. It's not a production-ready solution. Note:
1) The design sucks 🥴
2) The code quality is "prototype" level 🤪
3) The response times are arguable prohibitive low* (as of now, this will change) 🐢
4) The interface with OpenAI is simple. In a real world scenario, you would likely want a RAG system, and potenially make it agenic. 👾

## How it works
1. When a user clicks on a "QueryLink," it sends a query to the server, For example: "tell me about Obama."
2. The server packages this query and sends it to the OpenAI API, instructing it to generate a response. The response is based on the query, the system's context, and a specific schema provided by the client. This implimentation leverages OpenAI's new [Structured Output](https://openai.com/index/introducing-structured-outputs-in-the-api/) feature to ensure the response contains json in the correct format.
3. OpenAI processes the query and generates relevant content. It responds with both the appropriate UI component to display the information and the data itself in a structured format that matches the component's props.
4. The client updates its UI state with the new response, ensuring that the message history and the derived UI states are synchronized.
5. Finally, the client updates the UI using the Slot component to determine which component to render and where to place it.


## Dev
Add your OpenAI API key to a `.env` file in the root of the project:
```bash
mv .env.example .env.local
```

Install and run:
```bash
npm i
npm run dev
```

## Finally
Let me know what you think! 🤔

I'd love to hear feedback, and what your thoughts are on the future of UI as a function of AI. 🚀

Contact me on [LinkedIn](https://www.linkedin.com/in/christopherjmckenzie/)
