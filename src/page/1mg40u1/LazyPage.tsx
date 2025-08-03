import React, { lazy, Suspense } from 'react';

const Page1mg40u1 = lazy(() => import('./Page'));

const LazyPage1mg40u1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg40u1 />
  </Suspense>
);

export { LazyPage1mg40u1 };
