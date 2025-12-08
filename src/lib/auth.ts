// ========================================
// COSTA G - UTILIDADES DE AUTENTICACIÓN
// ========================================

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Credenciales del administrador (en producción usar base de datos)
const ADMIN_CREDENTIALS = {
  username: 'vladimir',
  // Hash simple de la contraseña (en producción usar bcrypt)
  password: '1723Yf74',
}

const SESSION_COOKIE_NAME = 'costa_g_admin_session'
const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 días

// ========================================
// FUNCIONES DE AUTENTICACIÓN
// ========================================

export function generateSessionToken(): string {
  const array = new Uint8Array(32)
  if (typeof window !== 'undefined') {
    crypto.getRandomValues(array)
  } else {
    // Node.js
    const { randomBytes } = require('crypto')
    const bytes = randomBytes(32)
    for (let i = 0; i < 32; i++) {
      array[i] = bytes[i]
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export async function createSession(): Promise<string> {
  const token = generateSessionToken()
  const cookieStore = cookies()
  
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  })
  
  return token
}

export async function getSession(): Promise<string | null> {
  const cookieStore = cookies()
  const session = cookieStore.get(SESSION_COOKIE_NAME)
  return session?.value || null
}

export async function destroySession(): Promise<void> {
  const cookieStore = cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession()
  return !!session
}

export async function requireAuth(): Promise<void> {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    redirect('/admin')
  }
}

// ========================================
// TIPOS
// ========================================

export interface AuthUser {
  username: string
  name: string
  role: string
}

export function getCurrentUser(): AuthUser | null {
  // En una implementación real, esto obtendría el usuario de la sesión
  return {
    username: ADMIN_CREDENTIALS.username,
    name: 'Vladimir',
    role: 'admin',
  }
}
