import React, { lazy, Suspense } from 'react';

const Page1m74b87 = lazy(() => import('./Page'));

const LazyPage1m74b87 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m74b87 />
  </Suspense>
);

export { LazyPage1m74b87 };
