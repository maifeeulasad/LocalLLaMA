import React, { lazy, Suspense } from 'react';

const Page1lovqjc = lazy(() => import('./Page'));

const LazyPage1lovqjc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lovqjc />
  </Suspense>
);

export { LazyPage1lovqjc };
