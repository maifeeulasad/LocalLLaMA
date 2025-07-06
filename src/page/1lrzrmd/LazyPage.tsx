import React, { lazy, Suspense } from 'react';

const Page1lrzrmd = lazy(() => import('./Page'));

const LazyPage1lrzrmd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrzrmd />
  </Suspense>
);

export { LazyPage1lrzrmd };
