import React, { lazy, Suspense } from 'react';

const Page1me7i6l = lazy(() => import('./Page'));

const LazyPage1me7i6l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7i6l />
  </Suspense>
);

export { LazyPage1me7i6l };
