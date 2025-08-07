import React, { lazy, Suspense } from 'react';

const Page1mjfbk7 = lazy(() => import('./Page'));

const LazyPage1mjfbk7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjfbk7 />
  </Suspense>
);

export { LazyPage1mjfbk7 };
