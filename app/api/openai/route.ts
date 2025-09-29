import { requestForResume } from "@/services/openAiServices";
import { handleApiError } from "@/utils/handleApiError";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();

    const { user, jobs } = requestBody;
    const res = await requestForResume(user, jobs);

    console.log("------------------------------");
    console.log(res);
    console.log("------------------------------");

    return NextResponse.json({
      success: true,
      message: "POST request received",
      data: res,
    });
  } catch (error) {
    return handleApiError(error, 400);
  }
}
