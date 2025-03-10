import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const signupSuccess = request.cookies.get("signupSuccess")?.value;
  const url = request.nextUrl.clone();

  // Rutas protegidas que requieren autenticación
  const protectedRoutes = url.pathname.startsWith("/dashboard");

  // Verifica si la ruta /signup/success es accesible solo después de un registro exitoso
  if (!signupSuccess && url.pathname === "/signup/success") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirigir a usuarios no autenticados que intentan acceder a rutas protegidas
  if (!authToken && protectedRoutes) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Permitir el acceso a la ruta solicitada
  return NextResponse.next();
}

// Definimos los patrones de rutas que activarán el middleware
export const config = {
  matcher: ["/dashboard/:path*", "/signup/success"],
};
