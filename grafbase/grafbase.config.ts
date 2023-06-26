import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min:2, max:20}),
  email: g.email().unique(),
  avatarUrl: g.url(),
  descrition: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(),
})

const Projects = g.model('Projects', {
  title: g.string().length({min:3, max:20}),
  descrition: g.string(),
})

export default config({
  schema: g
})
