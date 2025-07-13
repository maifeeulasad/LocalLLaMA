import React, { lazy, Suspense } from 'react';

const Page1lyhuuq = lazy(() => import('./Page'));

const LazyPage1lyhuuq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyhuuq />
  </Suspense>
);

export { LazyPage1lyhuuq };
