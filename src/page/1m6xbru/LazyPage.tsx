import React, { lazy, Suspense } from 'react';

const Page1m6xbru = lazy(() => import('./Page'));

const LazyPage1m6xbru = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6xbru />
  </Suspense>
);

export { LazyPage1m6xbru };
