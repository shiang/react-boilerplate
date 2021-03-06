import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <main>
      <h1>Hello World!!!</h1>
      <h2 data-testid='count' className={count > 10 ? 'warning' : null}>
        {count}
      </h2>
      <button type='button' onClick={increment}>
        +
      </button>
      <button type='button' onClick={decrement}>
        -
      </button>
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </main>
  )
}

export default hot(module)(App)
