import React, { lazy, Suspense } from 'react';

const Page1mdruc9 = lazy(() => import('./Page'));

const LazyPage1mdruc9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdruc9 />
  </Suspense>
);

export { LazyPage1mdruc9 };
