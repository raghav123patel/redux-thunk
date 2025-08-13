import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './App.css'
import GetData from './pages/getData';
import PostData from './pages/postData';

const queryClient = new QueryClient();
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetData></GetData>
        <PostData/>
      </QueryClientProvider>
    </>
  )
}

export default App
