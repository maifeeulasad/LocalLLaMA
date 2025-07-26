import React, { lazy, Suspense } from 'react';

const Page1m903il = lazy(() => import('./Page'));

const LazyPage1m903il = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m903il />
  </Suspense>
);

export { LazyPage1m903il };
