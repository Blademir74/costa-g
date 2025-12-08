import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@costag.com" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        // Hardcoded for demonstration/development purposes.
        // In production, connect to `prisma.user` and use bcrypt.
        const user = { 
          id: "1", 
          name: "Admin Costa G", 
          email: "admin@costag.com",
          role: "admin"
        };

        // Simulated validation
        if (credentials?.email === "admin@costag.com" && credentials?.password === "admin123") {
          return user;
        }
        
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  }
};