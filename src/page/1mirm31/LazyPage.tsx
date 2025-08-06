import React, { lazy, Suspense } from 'react';

const Page1mirm31 = lazy(() => import('./Page'));

const LazyPage1mirm31 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mirm31 />
  </Suspense>
);

export { LazyPage1mirm31 };
