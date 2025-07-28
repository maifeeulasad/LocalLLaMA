import React, { lazy, Suspense } from 'react';

const Page1maxquu = lazy(() => import('./Page'));

const LazyPage1maxquu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maxquu />
  </Suspense>
);

export { LazyPage1maxquu };
