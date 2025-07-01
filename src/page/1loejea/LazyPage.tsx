import React, { lazy, Suspense } from 'react';

const Page1loejea = lazy(() => import('./Page'));

const LazyPage1loejea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loejea />
  </Suspense>
);

export { LazyPage1loejea };
