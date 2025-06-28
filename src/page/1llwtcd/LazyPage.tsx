import React, { lazy, Suspense } from 'react';

const Page1llwtcd = lazy(() => import('./Page'));

const LazyPage1llwtcd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llwtcd />
  </Suspense>
);

export { LazyPage1llwtcd };
