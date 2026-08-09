import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "@/app/src/index";

export const auth = betterAuth({
  database: drizzleAdapter(db, { 
    provider: "pg",
  }), 
  emailAndPassword: { 
    enabled: true,
  }, 
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
  }, 
});