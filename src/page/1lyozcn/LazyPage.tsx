import React, { lazy, Suspense } from 'react';

const Page1lyozcn = lazy(() => import('./Page'));

const LazyPage1lyozcn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyozcn />
  </Suspense>
);

export { LazyPage1lyozcn };
