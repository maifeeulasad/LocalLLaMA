import React, { lazy, Suspense } from 'react';

const Page1lyqwil = lazy(() => import('./Page'));

const LazyPage1lyqwil = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyqwil />
  </Suspense>
);

export { LazyPage1lyqwil };
