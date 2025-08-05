import React, { lazy, Suspense } from 'react';

const Page1mhz2sc = lazy(() => import('./Page'));

const LazyPage1mhz2sc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhz2sc />
  </Suspense>
);

export { LazyPage1mhz2sc };
