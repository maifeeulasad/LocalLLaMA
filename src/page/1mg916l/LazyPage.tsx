import React, { lazy, Suspense } from 'react';

const Page1mg916l = lazy(() => import('./Page'));

const LazyPage1mg916l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg916l />
  </Suspense>
);

export { LazyPage1mg916l };
