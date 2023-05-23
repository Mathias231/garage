import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

if (!process.env.GITHUB_ID) throw new Error('GITHUB_ID Missing');
if (!process.env.GITHUB_SECRET) throw new Error('GITHUB_SECRET Missing');
if (!process.env.GOOGLE_CLIENT_ID) throw new Error('GOOGLE_CLIENT_ID Missing');
if (!process.env.GOOGLE_CLIENT_SECRET)
  throw new Error('GOOGLE_CLIENT_SECRET Missing');

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // Adding whiteListed & userId to session
  callbacks: {
    // Updating session on client with columns from database. Right now its only "WhiteListed" (true or false)
    async session({ session }) {
      // Finds user by email
      const userData = await prisma.user.findFirst({
        where: {
          email: session.user?.email,
        },
      });
      // Updates session by adding whiteListed - boolean
      const updatedSession = {
        ...session,
        user: {
          ...session.user,
          whiteListed: userData?.whiteListed,
          userId: userData?.id,
        },
      };

      // DefaultSession (just in case)
      const defaultSession = {
        user: {
          name: '',
          email: '',
          image: '',
        },
        expires: '',
      };
      // Sets result as updatedSession. Sets defaultSession if something goes wrong
      const result = updatedSession || defaultSession;
      return result;
    },
  },
});
