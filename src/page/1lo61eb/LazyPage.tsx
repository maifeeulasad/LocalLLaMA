import React, { lazy, Suspense } from 'react';

const Page1lo61eb = lazy(() => import('./Page'));

const LazyPage1lo61eb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo61eb />
  </Suspense>
);

export { LazyPage1lo61eb };
