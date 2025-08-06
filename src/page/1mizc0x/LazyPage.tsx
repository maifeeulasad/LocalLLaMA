import React, { lazy, Suspense } from 'react';

const Page1mizc0x = lazy(() => import('./Page'));

const LazyPage1mizc0x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizc0x />
  </Suspense>
);

export { LazyPage1mizc0x };
