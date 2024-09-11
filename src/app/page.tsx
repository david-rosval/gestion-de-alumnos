import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-5xl font-semibold">Gestión de alumnos</h1>
      <Link
        href="/auth/login"
      >Iniciar sesión</Link>
    </>
  );
}
