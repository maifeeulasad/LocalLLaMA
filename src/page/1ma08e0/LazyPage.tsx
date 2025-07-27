import React, { lazy, Suspense } from 'react';

const Page1ma08e0 = lazy(() => import('./Page'));

const LazyPage1ma08e0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma08e0 />
  </Suspense>
);

export { LazyPage1ma08e0 };
