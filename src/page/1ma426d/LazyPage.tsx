import React, { lazy, Suspense } from 'react';

const Page1ma426d = lazy(() => import('./Page'));

const LazyPage1ma426d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma426d />
  </Suspense>
);

export { LazyPage1ma426d };
