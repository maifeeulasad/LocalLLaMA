import React, { lazy, Suspense } from 'react';

const Page1loal9v = lazy(() => import('./Page'));

const LazyPage1loal9v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loal9v />
  </Suspense>
);

export { LazyPage1loal9v };
