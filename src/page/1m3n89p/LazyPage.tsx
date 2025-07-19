import React, { lazy, Suspense } from 'react';

const Page1m3n89p = lazy(() => import('./Page'));

const LazyPage1m3n89p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3n89p />
  </Suspense>
);

export { LazyPage1m3n89p };
