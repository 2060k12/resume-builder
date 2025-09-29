import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const requestForResume = async (userJson: object, jobJson: object) => {
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
  "summary": "",
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
      "bodyRight": "",
      "bulletPoints": []
    }
  ],
  "experience": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": "",
      "bulletPoints": []
    }
  ],
  "projects": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": "",
      "bulletPoints": []
    }
  ],
  "technicalSkills": [
    {
      "titleLeft": "",
      "titleRight": "",
      "bodyLeft": "",
      "bodyRight": "",
      "bulletPoints": []
    }
  ]
}
\`\`\`

Instructions:
- Only return **valid JSON**. No explanations, notes, or extra text.
- Ensure all objects match the exact field names above.
- \`bulletPoints\` must always be present as an array (can be empty).
- Highlight skills and achievements most relevant to the job.
- All strings must use double quotes, and no trailing commas.
`;

  console.log("abcp", prompt);

  try {
    const res = await openAi.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });
    const parsed = res.output_text;
    console.log(parsed);
    return parsed;
  } catch (err) {
    console.error("Failed to parse AI output:", err);
    return {};
  }
};
