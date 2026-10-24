"use client"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { useServerInsertedHTML } from "next/navigation"
import * as React from "react"

export function EmotionRegistry({ children }: React.PropsWithChildren) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache({ key: "chakra" })
    cache.compat = true

    let inserted: string[] = []
    const originalInsert = cache.insert
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return originalInsert(...args)
    }

    return {
      cache,
      flush: () => {
        const names = inserted
        inserted = []
        return names
      },
    }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null

    const styles = names.map((name) => cache.inserted[name]).join("")
    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
