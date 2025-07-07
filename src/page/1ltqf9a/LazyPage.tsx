import React, { lazy, Suspense } from 'react';

const Page1ltqf9a = lazy(() => import('./Page'));

const LazyPage1ltqf9a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltqf9a />
  </Suspense>
);

export { LazyPage1ltqf9a };
