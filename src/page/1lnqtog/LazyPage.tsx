import React, { lazy, Suspense } from 'react';

const Page1lnqtog = lazy(() => import('./Page'));

const LazyPage1lnqtog = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnqtog />
  </Suspense>
);

export { LazyPage1lnqtog };
