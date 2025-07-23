import React, { lazy, Suspense } from 'react';

const Page1m6hxnt = lazy(() => import('./Page'));

const LazyPage1m6hxnt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6hxnt />
  </Suspense>
);

export { LazyPage1m6hxnt };
