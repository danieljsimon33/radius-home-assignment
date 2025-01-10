import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export async function fetchLLMData(subject, age, description) {
  const router = useRouter();

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

  if (!response.ok) {
    return;
  }

  const newUuid = uuidv4();

  const responseData = await response.json();

  localStorage.setItem(newUuid, responseData.choices[0].message.content);

  router.push(`/lesson/${newUuid}`);

  //put data into local storage
  //redirect to the next page
}
