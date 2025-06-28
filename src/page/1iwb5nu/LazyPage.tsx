import React, { lazy, Suspense } from 'react';

const Page1iwb5nu = lazy(() => import('./Page'));

const LazyPage1iwb5nu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iwb5nu />
  </Suspense>
);

export { LazyPage1iwb5nu };
