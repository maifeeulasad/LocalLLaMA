import React, { lazy, Suspense } from 'react';

const Page1mic8kf = lazy(() => import('./Page'));

const LazyPage1mic8kf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mic8kf />
  </Suspense>
);

export { LazyPage1mic8kf };
