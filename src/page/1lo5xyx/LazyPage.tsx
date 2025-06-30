import React, { lazy, Suspense } from 'react';

const Page1lo5xyx = lazy(() => import('./Page'));

const LazyPage1lo5xyx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo5xyx />
  </Suspense>
);

export { LazyPage1lo5xyx };
