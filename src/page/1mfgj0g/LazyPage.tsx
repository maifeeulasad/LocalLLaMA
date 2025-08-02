import React, { lazy, Suspense } from 'react';

const Page1mfgj0g = lazy(() => import('./Page'));

const LazyPage1mfgj0g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfgj0g />
  </Suspense>
);

export { LazyPage1mfgj0g };
