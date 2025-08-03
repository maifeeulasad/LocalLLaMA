import React, { lazy, Suspense } from 'react';

const Page1mg7abc = lazy(() => import('./Page'));

const LazyPage1mg7abc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg7abc />
  </Suspense>
);

export { LazyPage1mg7abc };
