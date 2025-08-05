import React, { lazy, Suspense } from 'react';

const Page1mhhdig = lazy(() => import('./Page'));

const LazyPage1mhhdig = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhdig />
  </Suspense>
);

export { LazyPage1mhhdig };
