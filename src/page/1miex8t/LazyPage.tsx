import React, { lazy, Suspense } from 'react';

const Page1miex8t = lazy(() => import('./Page'));

const LazyPage1miex8t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miex8t />
  </Suspense>
);

export { LazyPage1miex8t };
