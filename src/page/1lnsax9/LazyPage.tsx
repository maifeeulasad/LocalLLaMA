import React, { lazy, Suspense } from 'react';

const Page1lnsax9 = lazy(() => import('./Page'));

const LazyPage1lnsax9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnsax9 />
  </Suspense>
);

export { LazyPage1lnsax9 };
