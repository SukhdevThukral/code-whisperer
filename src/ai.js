export async function callAI(prompt) {
  const apiKey = import.meta.env.VITE_OPENROUTER_KEY;

  if (!apiKey) {
    console.error("Missing OpenRouter API key. Please set VITE_OPENROUTER_KEY in your .env file.");
    return { error: "Missing API key. Please check configuration." };
  }

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        max_tokens: 500,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("OpenRouter API Error:", err);
      return { error: err.message || JSON.stringify(err) };
    }

    const data = await res.json();
    const message = data.choices?.[0]?.message?.content || "No response";
    return { result: message };

  } catch (e) {
    console.error("AI call failed:", e);
    return { error: e.message };
  }
}