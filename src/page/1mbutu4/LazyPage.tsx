import React, { lazy, Suspense } from 'react';

const Page1mbutu4 = lazy(() => import('./Page'));

const LazyPage1mbutu4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbutu4 />
  </Suspense>
);

export { LazyPage1mbutu4 };
