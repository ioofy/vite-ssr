import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContext } from "./context/AppContext";
import Navigation from "./routes/Navigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App = () => {
  return (
    <AppContext>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </AppContext>
  );
};

export default App;
