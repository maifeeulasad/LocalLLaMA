import React, { lazy, Suspense } from 'react';

const Page1mhctvk = lazy(() => import('./Page'));

const LazyPage1mhctvk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhctvk />
  </Suspense>
);

export { LazyPage1mhctvk };
