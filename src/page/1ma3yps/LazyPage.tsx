import React, { lazy, Suspense } from 'react';

const Page1ma3yps = lazy(() => import('./Page'));

const LazyPage1ma3yps = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma3yps />
  </Suspense>
);

export { LazyPage1ma3yps };
