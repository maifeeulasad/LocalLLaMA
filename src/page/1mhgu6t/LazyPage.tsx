import React, { lazy, Suspense } from 'react';

const Page1mhgu6t = lazy(() => import('./Page'));

const LazyPage1mhgu6t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhgu6t />
  </Suspense>
);

export { LazyPage1mhgu6t };
