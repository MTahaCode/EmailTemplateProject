import logo from './logo.svg';
import './main.css';
import { useEffect, useState } from 'react';
import TemplateGeneration from './Pages/TemplateGeneration';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TemplateGeneration />
    </QueryClientProvider>
  );
}

export default App;
