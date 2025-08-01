import React, { lazy, Suspense } from 'react';

const Page1metf4h = lazy(() => import('./Page'));

const LazyPage1metf4h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1metf4h />
  </Suspense>
);

export { LazyPage1metf4h };
