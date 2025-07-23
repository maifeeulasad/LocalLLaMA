import React, { lazy, Suspense } from 'react';

const Page1m6xhgg = lazy(() => import('./Page'));

const LazyPage1m6xhgg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6xhgg />
  </Suspense>
);

export { LazyPage1m6xhgg };
