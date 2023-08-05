import { authMiddleware } from "@clerk/nextjs";
import { routes } from "./lib/routes";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [routes.home, routes.auth],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next();
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
