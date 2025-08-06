import React, { lazy, Suspense } from 'react';

const Page1mio3j9 = lazy(() => import('./Page'));

const LazyPage1mio3j9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mio3j9 />
  </Suspense>
);

export { LazyPage1mio3j9 };
