import React, { lazy, Suspense } from 'react';

const Page1mbowe3 = lazy(() => import('./Page'));

const LazyPage1mbowe3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbowe3 />
  </Suspense>
);

export { LazyPage1mbowe3 };
