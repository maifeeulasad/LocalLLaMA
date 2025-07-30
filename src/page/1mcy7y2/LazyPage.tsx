import React, { lazy, Suspense } from 'react';

const Page1mcy7y2 = lazy(() => import('./Page'));

const LazyPage1mcy7y2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcy7y2 />
  </Suspense>
);

export { LazyPage1mcy7y2 };
