import React, { lazy, Suspense } from 'react';

const Page1mjdzo4 = lazy(() => import('./Page'));

const LazyPage1mjdzo4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjdzo4 />
  </Suspense>
);

export { LazyPage1mjdzo4 };
