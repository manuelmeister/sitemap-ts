import { join, parse } from 'path'
import { slash } from '@antfu/utils'
import glob from 'fast-glob'

import type { ResolvedOptions } from './types'

export function getRoutes(options: ResolvedOptions) {
  return [
    ...glob.sync('**/*.html', { cwd: options.outDir }).map((route) => {
      const parsedRoute = parse(route.replace(/index\.html/g, ''))
      return slash(join('/', parsedRoute.dir, parsedRoute.name))
    }),
    ...options.dynamicRoutes.map(route => slash(join('/', join(parse(route).dir, parse(route).name)))),
  ].filter(route => !options.exclude.includes(route))
}

export function getFormattedSitemap(options: ResolvedOptions, routes: string[]) {
  return routes.map(route => ({
    url: new URL(options.pathPrefix + route, options.hostname).href,
    changefreq: options.changefreq instanceof Function ? options.changefreq(route) : options.changefreq,
    priority: options.priority instanceof Function ? options.priority(route) : options.priority,
    lastmod: options.lastmod instanceof Function ? options.lastmod(route) : options.lastmod,
  }))
}
