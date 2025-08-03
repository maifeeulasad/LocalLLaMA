import React, { lazy, Suspense } from 'react';

const Page1mfzzt4 = lazy(() => import('./Page'));

const LazyPage1mfzzt4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfzzt4 />
  </Suspense>
);

export { LazyPage1mfzzt4 };
