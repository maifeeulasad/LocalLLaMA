import React, { lazy, Suspense } from 'react';

const Page1ltgq4i = lazy(() => import('./Page'));

const LazyPage1ltgq4i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltgq4i />
  </Suspense>
);

export { LazyPage1ltgq4i };
