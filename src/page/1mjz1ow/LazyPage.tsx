import React, { lazy, Suspense } from 'react';

const Page1mjz1ow = lazy(() => import('./Page'));

const LazyPage1mjz1ow = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjz1ow />
  </Suspense>
);

export { LazyPage1mjz1ow };
