import React, { lazy, Suspense } from 'react';

const Page1mk8j72 = lazy(() => import('./Page'));

const LazyPage1mk8j72 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk8j72 />
  </Suspense>
);

export { LazyPage1mk8j72 };
