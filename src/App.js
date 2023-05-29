import ToursList from "./components/ToursList";

function App() {
  return (
    <main id="app">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <ToursList />
    </main>
  );
}

export default App;
