import { authMiddleware } from "@clerk/nextjs";
import { routes } from "./lib/routes";

export default authMiddleware({
  publicRoutes: [routes.home],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
