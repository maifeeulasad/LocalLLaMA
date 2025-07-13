import React, { lazy, Suspense } from 'react';

const Page1lyv750 = lazy(() => import('./Page'));

const LazyPage1lyv750 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyv750 />
  </Suspense>
);

export { LazyPage1lyv750 };
