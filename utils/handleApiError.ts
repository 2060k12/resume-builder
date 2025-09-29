import { NextResponse } from "next/server";
import { ApiError } from "./ApiError";
import { ApiResponse } from "./ApiResponse";
import { ZodError } from "zod";
export function handleApiError(err: unknown, defaultStatus = 400) {
  console.log(err);
  if (err instanceof ApiError) {
    const response: ApiResponse<null> = {
      message: err.message,
      success: false,
      details: err.details,
      error: err.code,
    };

    return NextResponse.json<ApiResponse<null>>(response, {
      status: defaultStatus,
    });
  }

  if (err instanceof ZodError) {
    const response: ApiResponse<null> = {
      message: err.issues.map((issue) => issue.message).toLocaleString(),
      success: false,
      error: err.issues,
    };

    return NextResponse.json<ApiResponse<null>>(response, {
      status: defaultStatus,
    });
  }

  const response: ApiResponse<null> = {
    message: "Internal Server Error",
    success: false,
    error: "INTERNAL_ERROR",
  };
  return NextResponse.json<ApiResponse<null>>(response, { status: 500 });
}
