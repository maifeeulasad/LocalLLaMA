import React, { lazy, Suspense } from 'react';

const Page1m4swld = lazy(() => import('./Page'));

const LazyPage1m4swld = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4swld />
  </Suspense>
);

export { LazyPage1m4swld };
