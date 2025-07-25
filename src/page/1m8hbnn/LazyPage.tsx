import React, { lazy, Suspense } from 'react';

const Page1m8hbnn = lazy(() => import('./Page'));

const LazyPage1m8hbnn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8hbnn />
  </Suspense>
);

export { LazyPage1m8hbnn };
