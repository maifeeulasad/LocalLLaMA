import React, { lazy, Suspense } from 'react';

const Page1ma3vpa = lazy(() => import('./Page'));

const LazyPage1ma3vpa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma3vpa />
  </Suspense>
);

export { LazyPage1ma3vpa };
