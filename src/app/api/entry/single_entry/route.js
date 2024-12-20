import { NextResponse } from "next/server";
import { Entries } from "../../../../../models/entries";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const entryId = searchParams.get("entryId");
  try {
    const data = await Entries.findOne({
      where: {
        entryId: entryId,
      },
    });

    return NextResponse.json(
      { data: response, message: "Entry retrived" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 400 });
  }
}
// export async function POST(request) {
//   const body = await request.json();

//   try {
//     const response = await Entries.create({ ...body });

//     return NextResponse.json(
//       { data: response, message: "Entry succefully created" },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json({ message: "error" }, { status: 400 });
//   }
// }
