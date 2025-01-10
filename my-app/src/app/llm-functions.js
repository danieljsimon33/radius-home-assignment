export async function fetchLLMData(subject, age, description) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-thinking-exp:free",
        messages: [
          {
            role: "user",
            content: `Write me a ${subject} lesson plan for ${age}. Your response should not include any extra commentary from you, the chatbot. Further specifications:\n${description}`,
          },
        ],
        top_p: 1,
        temperature: 1.2,
        repetition_penalty: 1,
      }),
    }
  );
}
