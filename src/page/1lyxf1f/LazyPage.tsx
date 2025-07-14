import React, { lazy, Suspense } from 'react';

const Page1lyxf1f = lazy(() => import('./Page'));

const LazyPage1lyxf1f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyxf1f />
  </Suspense>
);

export { LazyPage1lyxf1f };
