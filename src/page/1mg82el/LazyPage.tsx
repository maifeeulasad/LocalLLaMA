import React, { lazy, Suspense } from 'react';

const Page1mg82el = lazy(() => import('./Page'));

const LazyPage1mg82el = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg82el />
  </Suspense>
);

export { LazyPage1mg82el };
