import { registerUser } from "@/services/userServices";
import { RegisterUser } from "@/types/User";
import { ApiResponse } from "@/utils/ApiResponse";
import { handleApiError } from "@/utils/handleApiError";
import { z } from "zod";
import { NextResponse } from "next/server";

const registerUserSchema = z.object({
  fullName: z.string().min(1),
  phoneNumber: z.string().min(10),
  email: z.string().email(),
  address: z.string().min(1),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = registerUserSchema.parse(body);

    const user = await registerUser(parsedBody);

    const response: ApiResponse<typeof user> = {
      success: true,
      message: "User registered successfully",
      data: user,
    };
    return NextResponse.json<ApiResponse<typeof user>>(response, {
      status: 201,
    });
  } catch (err) {
    return handleApiError(err);
  }
}
