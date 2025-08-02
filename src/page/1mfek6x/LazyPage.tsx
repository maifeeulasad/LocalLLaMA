import React, { lazy, Suspense } from 'react';

const Page1mfek6x = lazy(() => import('./Page'));

const LazyPage1mfek6x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfek6x />
  </Suspense>
);

export { LazyPage1mfek6x };
