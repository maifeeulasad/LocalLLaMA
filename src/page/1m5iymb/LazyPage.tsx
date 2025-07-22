import React, { lazy, Suspense } from 'react';

const Page1m5iymb = lazy(() => import('./Page'));

const LazyPage1m5iymb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5iymb />
  </Suspense>
);

export { LazyPage1m5iymb };
