import React, { lazy, Suspense } from 'react';

const Page1lts8ai = lazy(() => import('./Page'));

const LazyPage1lts8ai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lts8ai />
  </Suspense>
);

export { LazyPage1lts8ai };
