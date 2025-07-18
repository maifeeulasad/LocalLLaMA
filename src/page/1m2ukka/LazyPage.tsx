import React, { lazy, Suspense } from 'react';

const Page1m2ukka = lazy(() => import('./Page'));

const LazyPage1m2ukka = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2ukka />
  </Suspense>
);

export { LazyPage1m2ukka };
