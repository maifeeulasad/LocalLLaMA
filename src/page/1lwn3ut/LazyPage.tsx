import React, { lazy, Suspense } from 'react';

const Page1lwn3ut = lazy(() => import('./Page'));

const LazyPage1lwn3ut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwn3ut />
  </Suspense>
);

export { LazyPage1lwn3ut };
