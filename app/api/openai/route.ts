import { requestForResume } from "@/services/openAiServices";
import { handleApiError } from "@/utils/handleApiError";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    console.log("1... working");

    const body = await req.json();
    console.log("22... working");

    const res = await requestForResume(body);

    return NextResponse.json({
      success: true,
      message: "POST request received",
      data: res,
    });
  } catch (error) {
    return handleApiError(error, 400);
  }
}
