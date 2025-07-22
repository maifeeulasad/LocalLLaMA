import React, { lazy, Suspense } from 'react';

const Page1m5okz7 = lazy(() => import('./Page'));

const LazyPage1m5okz7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5okz7 />
  </Suspense>
);

export { LazyPage1m5okz7 };
