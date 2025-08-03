import React, { lazy, Suspense } from 'react';

const Page1mgbven = lazy(() => import('./Page'));

const LazyPage1mgbven = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgbven />
  </Suspense>
);

export { LazyPage1mgbven };
