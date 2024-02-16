import { url } from "inspector";
import Navigation from "./components/navigation";
import "./globals.css";

export const metadata = {
  title: "Vicki Victoria",
  description: "Actress Vicki Victoria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-gradient-to-b from-slate-950 from-60% to-indigo-950"
      // style={{ 
      //   backgroundImage: `url("images/bokeh.jpg")`
      // }}
      >
        <Navigation />
        <div className="container mx-auto md:px-4">
          <div className="w-full min-h-screen md:my-24 p-10	bg-white md:rounded-lg	shadow-2xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
