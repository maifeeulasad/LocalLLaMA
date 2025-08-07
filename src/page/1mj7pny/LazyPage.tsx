import React, { lazy, Suspense } from 'react';

const Page1mj7pny = lazy(() => import('./Page'));

const LazyPage1mj7pny = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7pny />
  </Suspense>
);

export { LazyPage1mj7pny };
