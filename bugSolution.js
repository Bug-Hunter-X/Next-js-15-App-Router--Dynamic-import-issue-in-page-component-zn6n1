```javascript
// pages/index.js

import { Suspense } from 'react';

export default async function Home() {
  const Component = await import('./MyComponent');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component/>
    </Suspense>
  );
}

// pages/MyComponent.js

export default function MyComponent() {
  return (
    <div>My Component</div>
  );
}
```