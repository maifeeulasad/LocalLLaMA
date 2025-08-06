import React, { lazy, Suspense } from 'react';

const Page1minsd6 = lazy(() => import('./Page'));

const LazyPage1minsd6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minsd6 />
  </Suspense>
);

export { LazyPage1minsd6 };
