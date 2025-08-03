import React, { lazy, Suspense } from 'react';

const Page1mg26g0 = lazy(() => import('./Page'));

const LazyPage1mg26g0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg26g0 />
  </Suspense>
);

export { LazyPage1mg26g0 };
