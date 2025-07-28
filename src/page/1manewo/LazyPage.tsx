import React, { lazy, Suspense } from 'react';

const Page1manewo = lazy(() => import('./Page'));

const LazyPage1manewo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1manewo />
  </Suspense>
);

export { LazyPage1manewo };
