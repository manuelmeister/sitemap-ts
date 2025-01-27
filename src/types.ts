export interface RobotOption {
  /**
   * User-agent value.
   * Example: Googlebot
   */
  userAgent: string
  /**
   * Allowed routes for corresponding User-agent.
   * Example: '/'
   */
  allow?: string | string[]
  /**
   * Disallowed routes for corresponding User-agent.
   * Example: ['/admin', '/confidential']
   */
  disallow?: string | string[]
  /**
   * Crawl-delay option for robot.
   * Example: 2
   */
  crawlDelay?: number
  /**
   * Clean-param option for robot.
   * Example: 'ref /articles/'
   */
  cleanParam?: string
}

/**
 * Plugin options.
 */
interface Options {
  /**
   * Base URI
   * @default 'http://localhost/'
   */
  hostname: string
  /**
   * Path prefix between host and route
   * Example: 'docs'
   * @default ''
   */
  pathPrefix: string
  /**
   * Array of strings with dynamic routes.
   * Example: ['/routes1', '/route2/sub-route']
   * @default []
   */
  dynamicRoutes: string[]
  /**
   * Array of strings with excluded routes.
   * Example: ['/routes1', '/route2/sub-route']
   * @default []
   */
  exclude: string[]
  /**
   * Output directory
   * @default 'dist'
   */
  outDir: string
  /**
   * Change frequency option for sitemap
   * @default 'daily'
   */
  changefreq: string | ((route: string) => string)
  /**
   * Priority option for sitemap
   * @default 1
   */
  priority: number | ((route: string) => number)
  /**
   * Last modification option for sitemap
   * @default new Date()
   */
  lastmod: Date | ((route: string) => Date)
  /**
   * Converts XML into a human readable format
   * @default false
   */
  readable: boolean
  /**
   * Robots policy
   * @default [{ userAgent: '*', allow: '/' }]
   */
  robots: RobotOption[]
}

export type UserOptions = Partial<Options>

export interface ResolvedOptions extends Options {}
