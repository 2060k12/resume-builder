import { getUserDetail, uploadUserDetails } from "@/services/userServices";
import { ApiResponse } from "@/utils/ApiResponse";
import { handleApiError } from "@/utils/handleApiError";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const user = await uploadUserDetails(body);

    const response: ApiResponse<typeof user> = {
      success: true,
      message: "User registered successfully",
      data: user,
    };
    return NextResponse.json<ApiResponse<typeof user>>(response, {
      status: 201,
    });
  } catch (err) {
    return handleApiError(err, 400);
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log(id);
    const userDetails = await getUserDetail(id);
    return NextResponse.json(
      { success: true, data: userDetails },
      { status: 200 }
    );
  } catch (err) {
    return handleApiError(err, 400);
  }
}
