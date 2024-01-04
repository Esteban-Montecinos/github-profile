import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import InputSearch from "./components/input-search";
import { redirect } from "next/navigation";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Buscador de prefiles de GitHub",
  description: "Buscador de prefiles de GitHub creado por Esteban Montecinos",
  metadataBase: new URL('https://buscador-perfil-github.vercel.app/'),
  openGraph: {
    images: '/og-image.png',
  },
};

export default function RootLayout({ children }) {
  async function handleSumbit(formData) {
    "use server";
    const user = formData.get("user");
    redirect(`/${user}`);
  }
  return (
    <html lang="es" className='dark'>
      <body
        className={`${beVietnamPro.className} text-gris-claro bg-celeste-oscuro min-h-screen`}
      >
        <Providers>
          <main>
            <header
              className="flex justify-center h-64 pt-10"
              style={{
                backgroundImage: "url(/hero-image-github-profile.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <form action={handleSumbit} className="w-full max-w-lg px-16">
                <InputSearch />
              </form>
            </header>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
