import openai from "@/lib/openai";

interface LessonPlanRequest {
  completedLessons: string[];
  quizScores: Record<
    string,
    number
  >;
  weakAreas: string[];
  availableLessons: unknown[];
}

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as LessonPlanRequest;

    const {
      completedLessons,
      quizScores,
      weakAreas,
      availableLessons,
    } = body;

    const prompt = `
You are a personalized learning planner
for Internee.pk interns.

Completed lessons:
${JSON.stringify(
  completedLessons
)}

Quiz scores:
${JSON.stringify(
  quizScores
)}

Weak areas:
${JSON.stringify(
  weakAreas
)}

Available lessons:
${JSON.stringify(
  availableLessons
)}

Create a personalized learning plan.

Return:

1. Current learning level
2. Main weak areas
3. Recommended next lesson
4. Why this lesson is recommended
5. Three practical next steps

Keep the response concise and practical.
`;

    const response =
      await openai.responses.create({
        model: "gpt-5",
        input: prompt,
      });

    return Response.json({
      plan: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error:
          "Unable to generate lesson plan.",
      },
      {
        status: 500,
      }
    );
  }
}