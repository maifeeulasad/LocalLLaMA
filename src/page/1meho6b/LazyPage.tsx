import React, { lazy, Suspense } from 'react';

const Page1meho6b = lazy(() => import('./Page'));

const LazyPage1meho6b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meho6b />
  </Suspense>
);

export { LazyPage1meho6b };
