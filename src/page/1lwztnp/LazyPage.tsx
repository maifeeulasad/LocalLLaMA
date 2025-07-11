import React, { lazy, Suspense } from 'react';

const Page1lwztnp = lazy(() => import('./Page'));

const LazyPage1lwztnp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwztnp />
  </Suspense>
);

export { LazyPage1lwztnp };
