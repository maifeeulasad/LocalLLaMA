import React, { lazy, Suspense } from 'react';

const Page1lo35gq = lazy(() => import('./Page'));

const LazyPage1lo35gq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo35gq />
  </Suspense>
);

export { LazyPage1lo35gq };
