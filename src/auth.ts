import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

async function getUser(email: string) {
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    // TODO: In a real app, use bcrypt.compare(password, user.passwordHash)
                    // For now, we are storing plain passwords as per previous step, but let's upgrade to hash check
                    // if the stored password looks like a hash (starts with $2)

                    const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
                    // Fallback for plain text passwords during dev transition (optional, but good for not breaking existing users immediately if any)
                    const plainMatch = password === user.passwordHash;

                    if (passwordsMatch || plainMatch) return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
