import React, { lazy, Suspense } from 'react';

const Page1lx85jo = lazy(() => import('./Page'));

const LazyPage1lx85jo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx85jo />
  </Suspense>
);

export { LazyPage1lx85jo };
