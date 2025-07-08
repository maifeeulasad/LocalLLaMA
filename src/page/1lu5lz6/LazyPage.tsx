import React, { lazy, Suspense } from 'react';

const Page1lu5lz6 = lazy(() => import('./Page'));

const LazyPage1lu5lz6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu5lz6 />
  </Suspense>
);

export { LazyPage1lu5lz6 };
