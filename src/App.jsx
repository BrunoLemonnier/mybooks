import MainLayout from "./layout/MainLayout";
import Books from "./components/books/Books";

function MainContent() {
  return (
    <>
      <Books />
    </>
  );
}

function App() {
  return (
    <MainLayout title="My Books Dashboard">
      <MainContent />
    </MainLayout>
  );
}

export default App;
