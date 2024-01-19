/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

const root = document.getElementById('root')
const queryClient = new QueryClient()

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!
)
