import React, { lazy, Suspense } from 'react';

const Page1mcrx23 = lazy(() => import('./Page'));

const LazyPage1mcrx23 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcrx23 />
  </Suspense>
);

export { LazyPage1mcrx23 };
