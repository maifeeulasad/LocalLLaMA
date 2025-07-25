import React, { lazy, Suspense } from 'react';

const Page1m8c7ku = lazy(() => import('./Page'));

const LazyPage1m8c7ku = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8c7ku />
  </Suspense>
);

export { LazyPage1m8c7ku };
