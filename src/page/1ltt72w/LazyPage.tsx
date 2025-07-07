import React, { lazy, Suspense } from 'react';

const Page1ltt72w = lazy(() => import('./Page'));

const LazyPage1ltt72w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltt72w />
  </Suspense>
);

export { LazyPage1ltt72w };
