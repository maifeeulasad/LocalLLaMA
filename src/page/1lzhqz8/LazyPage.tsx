import React, { lazy, Suspense } from 'react';

const Page1lzhqz8 = lazy(() => import('./Page'));

const LazyPage1lzhqz8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzhqz8 />
  </Suspense>
);

export { LazyPage1lzhqz8 };
