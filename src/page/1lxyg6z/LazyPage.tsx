import React, { lazy, Suspense } from 'react';

const Page1lxyg6z = lazy(() => import('./Page'));

const LazyPage1lxyg6z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxyg6z />
  </Suspense>
);

export { LazyPage1lxyg6z };
