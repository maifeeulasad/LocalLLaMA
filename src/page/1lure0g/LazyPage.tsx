import React, { lazy, Suspense } from 'react';

const Page1lure0g = lazy(() => import('./Page'));

const LazyPage1lure0g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lure0g />
  </Suspense>
);

export { LazyPage1lure0g };
