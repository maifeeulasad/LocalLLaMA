import React, { lazy, Suspense } from 'react';

const Page1miqfi7 = lazy(() => import('./Page'));

const LazyPage1miqfi7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqfi7 />
  </Suspense>
);

export { LazyPage1miqfi7 };
