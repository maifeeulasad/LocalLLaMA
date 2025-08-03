import React, { lazy, Suspense } from 'react';

const Page1mg7qpa = lazy(() => import('./Page'));

const LazyPage1mg7qpa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg7qpa />
  </Suspense>
);

export { LazyPage1mg7qpa };
