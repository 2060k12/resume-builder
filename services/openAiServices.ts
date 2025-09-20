import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const requestForResume = async (userJson: object) => {
  const inputString = JSON.stringify({ user: userJson });

  const prompt = `
You are a resume-tailoring AI. 
Input: A JSON object containing user details and a job description.

\`\`\`json
${inputString}
\`\`\`

Task: Generate a tailored resume JSON strictly matching this structure:

\`\`\`json
{
  "header": {
    "fullName": "",
    "phoneNumber": "",
    "email": "",
    "links": {
      "linkedin": "",
      "github": ""
    }
  },
  "education": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": ""
    }
  ],
  "experience": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": "",
      "bulletPoints": [""]
    }
  ],
  "projects": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": "",
      "bulletPoints": [""]
    }
  ],
  "technicalSkills": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": "",
      "bulletPoints": [""]
    }
  ]
}
\`\`\`

Instructions:
- Only return **valid JSON**. No explanations, notes, or extra text.
- Fill in all relevant fields using the user data and job description.
- Highlight skills and achievements most relevant to the job.
- Ensure all strings are double-quoted and no trailing commas exist.
`;

  console.log("abcp", prompt);

  try {
    const res = await openAi.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
      max_output_tokens: 1000,
    });

    const parsed = res.output_text;
    console.log(parsed);
    return parsed;
  } catch (err) {
    console.error("Failed to parse AI output:", err);
    return {};
  }
};
