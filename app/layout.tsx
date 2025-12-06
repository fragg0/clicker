import ClientWrapper from "../components/ClientWrapper";

export const metadata = {
  title: "Mini Clicker",
  description: "Mini App Clicker"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
