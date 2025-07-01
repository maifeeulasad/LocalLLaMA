import React, { lazy, Suspense } from 'react';

const Page1lozri7 = lazy(() => import('./Page'));

const LazyPage1lozri7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lozri7 />
  </Suspense>
);

export { LazyPage1lozri7 };
