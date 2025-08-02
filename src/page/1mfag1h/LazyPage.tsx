import React, { lazy, Suspense } from 'react';

const Page1mfag1h = lazy(() => import('./Page'));

const LazyPage1mfag1h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfag1h />
  </Suspense>
);

export { LazyPage1mfag1h };
