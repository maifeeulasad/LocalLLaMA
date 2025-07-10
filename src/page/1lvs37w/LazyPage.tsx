import React, { lazy, Suspense } from 'react';

const Page1lvs37w = lazy(() => import('./Page'));

const LazyPage1lvs37w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvs37w />
  </Suspense>
);

export { LazyPage1lvs37w };
