import {createTRPCRouter} from "./trpc";
import {authRouter} from "./routers/auth";
import {profileRouter} from "./routers/profille";
import {feedbackRouter} from "./routers/feedback";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
	feedback: feedbackRouter,
	profile: profileRouter,
	auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
