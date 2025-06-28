import React, { lazy, Suspense } from 'react';

const Page1ij5yf2 = lazy(() => import('./Page'));

const LazyPage1ij5yf2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ij5yf2 />
  </Suspense>
);

export { LazyPage1ij5yf2 };
