import React, { lazy, Suspense } from 'react';

const Page1mf0i54 = lazy(() => import('./Page'));

const LazyPage1mf0i54 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf0i54 />
  </Suspense>
);

export { LazyPage1mf0i54 };
