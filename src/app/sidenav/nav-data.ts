import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
      routeLink: 'home',
      icon: 'fa fa-home',
      label: 'Home', 
    },
    {
        routeLink: 'messages',
        icon: 'fa fa-commenting',
        label: 'Message Settings', 
    },
    {
        routeLink: 'purchases',
        icon: 'fa-solid fa-cart-shopping',
        label: 'Purchases', 
    },
    {
        routeLink: 'wallets',
        icon: 'fa-solid fa-wallet',
        label: 'Wallets', 
    },
    {
        routeLink: 'redemption',
        icon: 'fa-solid fa-gift',
        label: 'Redemption', 
    },
    {
        routeLink: 'share',
        icon: 'fa-sharp fa-solid fa-share-nodes',
        label: 'Share Gifts', 
    },
    {
        routeLink: 'balance',
        icon: 'fa-solid fa-credit-card',
        label: 'Balance', 
    },
    {
        routeLink: 'summary',
        icon: 'fa-solid fa-book',
        label: 'Summary', 
    },
    {
        routeLink: 'contacts',
        icon: 'fa-solid fa-address-card',
        label: 'Contacts', 
    },
    {
        routeLink: 'sessions',
        icon: 'fa-solid fa-table',
        label: 'Sessions', 
    },
    {
        routeLink: 'settings',
        icon: 'fa-solid fa-gear',
        label: 'Other Settings',
        expanded: true,
        items: [
            {
                routeLink: 'settings/users',
                icon: 'fa-solid fa-user',
                label: 'Users',
            },
            {
                routeLink: 'settings/access',
                icon: 'fa-solid fa-user',
                label: 'Access Control',
                items:[
                    {
                        routeLink: 'settings/roles',
                        icon: 'fa-solid fa-gear',
                        label: 'Roles',
                    },
                    {
                        routeLink: 'settings/permissions',
                        icon: 'fa-solid fa-gear',
                        label: 'Permissions',
                    }
                ]
            }

        ] 
    },
    
];