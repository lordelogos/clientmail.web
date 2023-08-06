import { authMiddleware } from "@clerk/nextjs";
import { routes } from "./lib/routes";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [routes.home, routes.auth],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      url.pathname = routes.auth;
      return NextResponse.redirect(url);
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
