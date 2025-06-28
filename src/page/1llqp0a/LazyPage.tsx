import React, { lazy, Suspense } from 'react';

const Page1llqp0a = lazy(() => import('./Page'));

const LazyPage1llqp0a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llqp0a />
  </Suspense>
);

export { LazyPage1llqp0a };
