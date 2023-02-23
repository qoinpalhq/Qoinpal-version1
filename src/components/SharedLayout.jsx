import Header from "./Header/Header";

export default function SharedLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
