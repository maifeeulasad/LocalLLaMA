import React, { lazy, Suspense } from 'react';

const Page1m7k50u = lazy(() => import('./Page'));

const LazyPage1m7k50u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7k50u />
  </Suspense>
);

export { LazyPage1m7k50u };
