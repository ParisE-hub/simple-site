import "./style.css";

export const metadata = {
  title: 'My First Webpage',
  description: 'Learning at IDEaL',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
