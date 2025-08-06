import React, { lazy, Suspense } from 'react';

const Page1mij25y = lazy(() => import('./Page'));

const LazyPage1mij25y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mij25y />
  </Suspense>
);

export { LazyPage1mij25y };
