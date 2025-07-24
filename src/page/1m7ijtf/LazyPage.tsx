import React, { lazy, Suspense } from 'react';

const Page1m7ijtf = lazy(() => import('./Page'));

const LazyPage1m7ijtf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ijtf />
  </Suspense>
);

export { LazyPage1m7ijtf };
