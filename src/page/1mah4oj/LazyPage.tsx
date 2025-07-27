import React, { lazy, Suspense } from 'react';

const Page1mah4oj = lazy(() => import('./Page'));

const LazyPage1mah4oj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mah4oj />
  </Suspense>
);

export { LazyPage1mah4oj };
