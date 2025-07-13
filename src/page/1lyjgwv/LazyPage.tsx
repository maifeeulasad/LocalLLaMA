import React, { lazy, Suspense } from 'react';

const Page1lyjgwv = lazy(() => import('./Page'));

const LazyPage1lyjgwv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyjgwv />
  </Suspense>
);

export { LazyPage1lyjgwv };
