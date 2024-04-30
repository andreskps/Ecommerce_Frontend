

export interface NavItem {
   title: string
   href: string
   external?: boolean

}


interface DocsConfig {
   mainNav: NavItem[]
   sidebarNav: NavItem[]
   privateNav?: NavItem[]
}

export const docsConfig: DocsConfig = {
   mainNav: [
      {
         title: 'Perros',
         href: '/pet/perro',
      },

      {
         title: 'Gatos',
         href: '/pet/gato',
      },
      {
         title: 'Ofertas',
         href: '/products',
      }
   ],
   sidebarNav: [
      {
         title: 'Products',
         href: '/products',
      },
      {
         title: 'Blog',
         href: '/blog',
      },
      {
         title: 'Orders',
         href: '/profile/orders',
      },
      {
         title: 'Payments',
         href: '/profile/payments',
      },
      {
         title: 'Contact',
         href: '/contact',
      },
      {
         title: 'About',
         href: '/about',
      },
   ],
   privateNav: [
      {
         title: 'Mi cuenta',
         href: '/profile',
      },{
         title: 'Mis pedidos',
         href: '/profile/orders',
      },
   ]
   
}