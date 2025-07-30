import React, { lazy, Suspense } from 'react';

const Page1mce7wo = lazy(() => import('./Page'));

const LazyPage1mce7wo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mce7wo />
  </Suspense>
);

export { LazyPage1mce7wo };
