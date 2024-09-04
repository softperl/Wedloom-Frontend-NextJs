import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TUser } from "./lib/hooks/useAuth";
import { jwtDecode } from "jwt-decode";

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const requestHeaders = new Headers(req.headers);

  let user = null;
  const accessToken = req.cookies.get("accessToken")?.value;

  if (accessToken) {
    try {
      const decodedUser: TUser & { exp: number } = jwtDecode(`${accessToken}`);
      user = decodedUser;
    } catch (error) {
      console.log(error);
    }
  }

  const roles = { user: "user", vendor: "vendor", admin: "admin" };
  const authRoutes = ["/signin", "/signup", "/vendor-signup"];
  const sensitiveRoutes = ["/vendor", "/user", "/setup-wedding"];
  const publicRoutes = ["/vendors"];

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (!user) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (sensitiveRoutes.some((route) => pathname.startsWith(route))) {
    if (!user) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (user) {
      if (
        user.role.toLowerCase() === roles.vendor &&
        pathname.startsWith("/vendor")
      ) {
        return NextResponse.next();
      } else if (
        user.role.toLowerCase() === roles.user &&
        pathname.startsWith("/user")
      ) {
        return NextResponse.next();
      } else if (
        user.role.toLowerCase() === roles.user &&
        pathname.startsWith("/setup-wedding")
      ) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
