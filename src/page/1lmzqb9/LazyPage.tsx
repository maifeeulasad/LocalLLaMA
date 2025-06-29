import React, { lazy, Suspense } from 'react';

const Page1lmzqb9 = lazy(() => import('./Page'));

const LazyPage1lmzqb9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmzqb9 />
  </Suspense>
);

export { LazyPage1lmzqb9 };
