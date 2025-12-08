import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE_NAME = 'costa_g_admin_session'

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logout exitoso',
    })

    // Eliminar cookie de sesión
    response.cookies.delete(SESSION_COOKIE_NAME)

    return response
  } catch (error) {
    console.error('Error en logout:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
