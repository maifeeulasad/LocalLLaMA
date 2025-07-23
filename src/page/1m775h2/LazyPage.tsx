import React, { lazy, Suspense } from 'react';

const Page1m775h2 = lazy(() => import('./Page'));

const LazyPage1m775h2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m775h2 />
  </Suspense>
);

export { LazyPage1m775h2 };
