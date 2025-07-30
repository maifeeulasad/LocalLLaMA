import React, { lazy, Suspense } from 'react';

const Page1mciotj = lazy(() => import('./Page'));

const LazyPage1mciotj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mciotj />
  </Suspense>
);

export { LazyPage1mciotj };
