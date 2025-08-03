import React, { lazy, Suspense } from 'react';

const Page1mfqzc8 = lazy(() => import('./Page'));

const LazyPage1mfqzc8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfqzc8 />
  </Suspense>
);

export { LazyPage1mfqzc8 };
