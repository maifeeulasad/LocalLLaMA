import React, { lazy, Suspense } from 'react';

const Page1lyv7s7 = lazy(() => import('./Page'));

const LazyPage1lyv7s7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyv7s7 />
  </Suspense>
);

export { LazyPage1lyv7s7 };
