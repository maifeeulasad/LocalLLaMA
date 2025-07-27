import React, { lazy, Suspense } from 'react';

const Page1ma6igb = lazy(() => import('./Page'));

const LazyPage1ma6igb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma6igb />
  </Suspense>
);

export { LazyPage1ma6igb };
