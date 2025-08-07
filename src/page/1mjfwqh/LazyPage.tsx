import React, { lazy, Suspense } from 'react';

const Page1mjfwqh = lazy(() => import('./Page'));

const LazyPage1mjfwqh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjfwqh />
  </Suspense>
);

export { LazyPage1mjfwqh };
