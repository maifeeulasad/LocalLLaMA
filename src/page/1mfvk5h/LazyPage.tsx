import React, { lazy, Suspense } from 'react';

const Page1mfvk5h = lazy(() => import('./Page'));

const LazyPage1mfvk5h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfvk5h />
  </Suspense>
);

export { LazyPage1mfvk5h };
