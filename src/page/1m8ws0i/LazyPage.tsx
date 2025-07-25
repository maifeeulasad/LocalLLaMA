import React, { lazy, Suspense } from 'react';

const Page1m8ws0i = lazy(() => import('./Page'));

const LazyPage1m8ws0i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8ws0i />
  </Suspense>
);

export { LazyPage1m8ws0i };
