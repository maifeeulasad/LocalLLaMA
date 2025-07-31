import React, { lazy, Suspense } from 'react';

const Page1mda326 = lazy(() => import('./Page'));

const LazyPage1mda326 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mda326 />
  </Suspense>
);

export { LazyPage1mda326 };
