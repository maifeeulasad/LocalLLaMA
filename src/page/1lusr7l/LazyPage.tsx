import React, { lazy, Suspense } from 'react';

const Page1lusr7l = lazy(() => import('./Page'));

const LazyPage1lusr7l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lusr7l />
  </Suspense>
);

export { LazyPage1lusr7l };
