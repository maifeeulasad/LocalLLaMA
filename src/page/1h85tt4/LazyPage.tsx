import React, { lazy, Suspense } from 'react';

const Page1h85tt4 = lazy(() => import('./Page'));

const LazyPage1h85tt4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1h85tt4 />
  </Suspense>
);

export { LazyPage1h85tt4 };
