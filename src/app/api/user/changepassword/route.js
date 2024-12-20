import { NextResponse } from "next/server";
import { User } from "../../../../../models/user";

const { Op } = require("sequelize");

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const id = searchParams.get("id");

  try {
    const data = await User.findOne({
      where: {
        id: +id,
      },
    });

    if (!data) {
      return NextResponse.json(
        { type: "user", message: `User does not exist` },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        data,
        message: `Admin retrieved successfully`,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
