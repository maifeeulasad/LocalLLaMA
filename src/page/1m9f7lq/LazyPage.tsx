import React, { lazy, Suspense } from 'react';

const Page1m9f7lq = lazy(() => import('./Page'));

const LazyPage1m9f7lq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9f7lq />
  </Suspense>
);

export { LazyPage1m9f7lq };
