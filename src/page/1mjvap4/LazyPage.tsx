import React, { lazy, Suspense } from 'react';

const Page1mjvap4 = lazy(() => import('./Page'));

const LazyPage1mjvap4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjvap4 />
  </Suspense>
);

export { LazyPage1mjvap4 };
