import React, { lazy, Suspense } from 'react';

const Page1lx9pny = lazy(() => import('./Page'));

const LazyPage1lx9pny = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx9pny />
  </Suspense>
);

export { LazyPage1lx9pny };
