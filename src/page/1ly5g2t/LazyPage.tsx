import React, { lazy, Suspense } from 'react';

const Page1ly5g2t = lazy(() => import('./Page'));

const LazyPage1ly5g2t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly5g2t />
  </Suspense>
);

export { LazyPage1ly5g2t };
