import React, { lazy, Suspense } from 'react';

const Page1mcl17g = lazy(() => import('./Page'));

const LazyPage1mcl17g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcl17g />
  </Suspense>
);

export { LazyPage1mcl17g };
