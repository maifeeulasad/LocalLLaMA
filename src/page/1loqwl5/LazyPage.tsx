import React, { lazy, Suspense } from 'react';

const Page1loqwl5 = lazy(() => import('./Page'));

const LazyPage1loqwl5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loqwl5 />
  </Suspense>
);

export { LazyPage1loqwl5 };
