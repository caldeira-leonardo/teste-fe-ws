import Vehicle from "./components/vehicle/containers/vehicle";
import MainProvider from "./providers";

function App() {
  return (
    <MainProvider>
      <Vehicle />
    </MainProvider>
  );
}

export default App;
