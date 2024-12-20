import { NextResponse } from "next/server";
import { EXEMPTED_ROUTES, LOGIN, PUBLIC_ROUTES, ROOT } from "./routes";
import { auth } from "./auth";

// This function can be marked `async` if using `await` inside

export async function middleware(request) {
  const { nextUrl } = request;

  //setting information into headers
  const headers = new Headers(request.headers);
  headers.set("origin", nextUrl.origin);

  //Chek if user is autheticated
  const session = await auth();

  const isAuthenticated = !!session?.user;
  // const isAuthenticated = true;

  const isPublicRoute = PUBLIC_ROUTES.find(
    (route) => nextUrl.pathname.startsWith(route) || nextUrl.pathname === ROOT
  );

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && nextUrl.pathname === LOGIN) {
    return NextResponse.redirect(new URL("/dashboard/entries", request.url));
  }

  if (isAuthenticated && nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/entries", request.url));
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
