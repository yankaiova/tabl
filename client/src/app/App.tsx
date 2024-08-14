import { store } from "../model/store";
import { Provider } from "react-redux";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <ErrorBoundary fallback={<div>Ууупс...</div>}>
          <RouterProvider router={routes} />
        </ErrorBoundary>
      </Suspense>
    </Provider>
  );
}

export default App;
