import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";
const PUBLIC_FILE = /\.(.*)$/;

// had to make this again here as the other one is in a file with bcrypt which is not supported on edge runtimes
const verifyJWT = async (jwt: any) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

export default async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/about") ||
    pathname === "/" ||
    pathname.startsWith("/doodles") ||
    pathname.startsWith("/doodle") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (!process.env.COOKIE_NAME) return;
  const jwt = req.cookies.get(process.env.COOKIE_NAME);

  if (!jwt) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    console.error(e);
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }
}
