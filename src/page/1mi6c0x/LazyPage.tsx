import React, { lazy, Suspense } from 'react';

const Page1mi6c0x = lazy(() => import('./Page'));

const LazyPage1mi6c0x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi6c0x />
  </Suspense>
);

export { LazyPage1mi6c0x };
