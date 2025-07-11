import React, { lazy, Suspense } from 'react';

const Page1lwcixn = lazy(() => import('./Page'));

const LazyPage1lwcixn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwcixn />
  </Suspense>
);

export { LazyPage1lwcixn };
