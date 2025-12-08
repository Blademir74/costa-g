import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Credenciales del administrador
const ADMIN_USERNAME = 'vladimir'
const ADMIN_PASSWORD = '1723Yf74'

const SESSION_COOKIE_NAME = 'costa_g_admin_session'
const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 días

function generateToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  for (let i = 0; i < 64; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validar credenciales
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      )
    }

    // Crear token de sesión
    const token = generateToken()

    // Crear respuesta con cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login exitoso',
      user: {
        username: ADMIN_USERNAME,
        name: 'Vladimir',
        role: 'admin',
      },
    })

    // Establecer cookie de sesión
    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_MAX_AGE,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Error en login:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
