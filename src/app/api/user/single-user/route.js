import { NextResponse } from "next/server";
import { User } from "../../../../../models/user";
const { Op } = require("sequelize");

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const email = searchParams.get("email");

  try {
    const data = await User.findOne({
      where: {
        [Op.or]: [{ username: email }, { email: email }],
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

export async function PUT(request) {
  const searchParams = request.nextUrl.searchParams;
  const body = await request.json();
  const adminId = searchParams.get("id");

  try {
    const updateResponse = await User.update(
      { password: body.password },
      {
        where: {
          id: adminId,
        },
      }
    );

    if (!updateResponse) {
      return NextResponse.json(
        {
          message: `Unable to update admin with id ${adminId}`,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        data: updateResponse,
        message: `admin with id ${adminId} has been updated successfully`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
