import Header from "./components/Header.jsx";

export default function MainLayout({title, children}) {
  return (
    <>
      <Header title={title} handleMobileMenuToggle={() => {}} />
      {children}
    </>
  );
}
