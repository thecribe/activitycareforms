import { NextResponse } from "next/server";
import { User } from "../../../../models/user";
import { Op } from "sequelize";

export async function GET(request) {
  try {
    const data = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    if (!data) {
      return NextResponse.json(
        { message: "Unable to retrieve admin's profiles" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { data, message: "Admin's profiles retrieved successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.errors[0].message },
      { status: 400 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();

  try {
    const [user, created] = await User.findOrCreate({
      where: { [Op.or]: [{ username: body.username }, { email: body.email }] },
      defaults: { ...body },
    });

    if (!created) {
      return NextResponse.json(
        { message: `User with the ${body.email} already exists ` },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { data: user, message: "Admin's profile created successfully" },
      { status: 200 }
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
      { ...body },
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

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const adminId = searchParams.get("adminId");

  try {
    const deleteResponse = await User.destroy({
      where: {
        id: adminId,
      },
    });

    if (!deleteResponse) {
      return NextResponse.json(
        {
          message: `Unable to update deleted with id ${adminId}`,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: `Member with id ${adminId} has been deleted successfully`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.errors[0].message },
      { status: 400 }
    );
  }
}
