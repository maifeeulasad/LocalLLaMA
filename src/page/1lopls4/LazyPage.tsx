import React, { lazy, Suspense } from 'react';

const Page1lopls4 = lazy(() => import('./Page'));

const LazyPage1lopls4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lopls4 />
  </Suspense>
);

export { LazyPage1lopls4 };
