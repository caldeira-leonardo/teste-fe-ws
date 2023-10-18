import Vehicle from "./components/vehicle/containers/vehicle";
import { BaseLayout } from "./layout/layout";
import MainProvider from "./providers";

function App() {
  return (
    <MainProvider>
      <BaseLayout>
        <Vehicle />
      </BaseLayout>
    </MainProvider>
  );
}

export default App;
