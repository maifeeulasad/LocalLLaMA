import React, { lazy, Suspense } from 'react';

const Page1mffa5a = lazy(() => import('./Page'));

const LazyPage1mffa5a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mffa5a />
  </Suspense>
);

export { LazyPage1mffa5a };
