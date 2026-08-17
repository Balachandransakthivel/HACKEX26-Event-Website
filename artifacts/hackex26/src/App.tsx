import { useEffect, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { People } from '@/components/sections/People';
import { Prizes } from '@/components/sections/Prizes';
import { Process } from '@/components/sections/Process';
import { Registration } from '@/components/sections/Registration';
import { Rules } from '@/components/sections/Rules';
import { Themes } from '@/components/sections/Themes';
import { Timeline } from '@/components/sections/Timeline';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Themes />
        <Process />
        <Timeline />
        <Prizes />
        <Rules />
        <FAQ />
        <People />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  useEffect(() => {
    document.title = 'HACKEX’26 — A National Level Hackathon';
    const description = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'HACKEX’26 is a 36-hour national-level hackathon at Excel Engineering College on 25–26 September 2026.');
    document.head.appendChild(description);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;