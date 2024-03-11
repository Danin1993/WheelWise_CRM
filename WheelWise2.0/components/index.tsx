// --------------------------------
// Provider
// --------------------------------

import { ClerkProvider } from '@clerk/nextjs'
import { Theme as Radix } from '@radix-ui/themes'

export const Provider = { Clerk: ClerkProvider, Radix }

// --------------------------------
// Auth
// --------------------------------
import { default as Signin } from '@/components/auth/signin'
import { default as Signup } from '@/components/auth/signup'
import { default as UserProfile } from '@/components/auth/userProfile'

export const Auth = { Signin, Signup, UserProfile }

// --------------------------------
// UI
// --------------------------------

import { default as Flex } from '@/components/ui/flex'
import { default as Scroll } from '@/components/ui/scroll'
import { default as Icon } from '@/components/ui/icon'
import { default as Font } from '@/components/ui/font'
import { default as Logo } from '@/components/ui/logo'

export const Ui = { Flex, Scroll, Icon, Font, Logo }

// --------------------------------
// Do
// --------------------------------

import { default as Other } from '@/components/Util/other'
import { default as Clerk } from '@/components/Util/clerk'

export const Util = { Other, Clerk }

// --------------------------------
// IMPORT Component
// --------------------------------

// Private
import { default as Nav } from '@/components/private/navigation'
import { default as Footer } from '@/components/private/footer'
import { default as Leads } from '@/components/private/lead/table'
// Public
import { default as Navigation_Pub } from '@/components/public/navigation'
import { default as Intro_Pub } from '@/components/public/intro'
import { default as Footer_Pub } from '@/components/public/footer'

export const Comp = {
   Public: {
      Nav: Navigation_Pub,
      Intro: Intro_Pub,
      Footer: Footer_Pub,
   },
   Private: {
      Nav,
      Footer,
      Leads,
   },
}
