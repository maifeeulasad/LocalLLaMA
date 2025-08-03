import React, { lazy, Suspense } from 'react';

const Page1mg3g2e = lazy(() => import('./Page'));

const LazyPage1mg3g2e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg3g2e />
  </Suspense>
);

export { LazyPage1mg3g2e };
