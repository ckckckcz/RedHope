import type { Card } from "../../lib/ts/Admin/cards";

export const cards: Card[] = [
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 487.858 487.858" xml:space="preserve"><g><g><g><g><path d="M243.979,487.858c-94.7,0-171.7-77-171.7-171.7c0-87.4,139.4-286.1,155-307.9c12.7-14.7,28.8-6.6,33.3,0c15.6,21.8,155,219.5,155,307.9C415.679,410.858,338.679,487.858,243.979,487.858z M243.979,55.058c-47.9,69.7-131.1,204.9-131.1,261.1c0,72.8,59.3,131.1,131.1,131.1s131.1-59.3,131.1-131.1C375.079,259.958,291.879,124.758,243.979,55.058z"/></g><path d="M296.479,303.658h-41.1v-41.1c0-6-4.9-10.9-10.9-10.9h-1c-6,0-10.9,4.9-10.9,10.9v41.1h-41.1c-6,0-10.9,4.9-10.9,10.9l0,0c0,6,4.9,10.9,10.9,10.9h41.1v42.1c0,6,4.9,10.9,10.9,10.9h1c6,0,10.9-4.9,10.9-10.9v-42.1h41.1c6,0,10.9-4.9,10.9-10.9l0,0C307.479,308.558,302.579,303.658,296.479,303.658z"/></g></g></g></svg>`,
        label: "Donor",
        value: '1200',
        file : "dashboard",
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.901 489.901" xml:space="preserve"><g><g><path d="M469.2,88.9h-99.9V21.3c0-11.4-9.4-20.8-20.8-20.8H140.4c-11.4,0-20.8,9.4-20.8,20.8v67.6H20.8C9.4,88.9,0,98.3,0,109.7v358.9c0,11.4,9.4,20.8,20.8,20.8h447.3c11.4,0,20.8-9.4,21.8-20.8V109.8C490,98.3,480.6,88.9,469.2,88.9z M160.2,41.1h168.5V89H160.2V41.1z M448.4,448.9H40.6V130.6h407.8V448.9z"/><path d="M164.4,309.5h59.3v60.3c0,11.4,9.4,20.8,20.8,20.8c11.4,0,20.8-9.4,20.8-20.8v-60.3h59.3c11.4,0,21.8-9.4,21.8-20.8s-9.4-20.8-20.8-20.8h-60.3v-59.3c0-11.4-9.4-20.8-20.8-20.8c-11.4,0-20.8,9.4-20.8,20.8v59.3h-59.3c-11.4,0-20.8,9.4-20.8,20.8S152.9,309.5,164.4,309.5z"/></g></g></svg>`,
        label: "Recipient",
        value: '1200',
        file : "dashboard",
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g><g><g><g><path d="M468.2,489.5H20.8C9.4,489.5,0,480.1,0,468.7V21.3C0,9.9,9.4,0.5,20.8,0.5h448.4c11.4,0,20.8,9.4,20.8,20.8v448.4C489,480.1,479.6,489.5,468.2,489.5z M40.6,448.9h407.8V41.1H40.6V448.9z"/></g><path d="M343.8,92.1L343.8,92.1c-11.2,0-20.3,9.1-20.3,20.3V218H164.4V112.4c0-11.2-9.1-20.3-20.3-20.3l0,0c-11.2,0-20.3,9.1-20.3,20.3v265.3c0,11.2,9.1,20.3,20.3,20.3l0,0c11.2,0,20.3-9.1,20.3-20.3V253.3h159.2v125.4c0,11.2,9.1,20.3,20.3,20.3c11.2,0,20.3-9.1,20.3-20.3V112.4C364.1,101.2,355,92.1,343.8,92.1z"/></g></g></g></svg>`,
        label: "Checkpoint",
        value: '1200',
        file : "dashboard",
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/></svg>`,
        label: "Admin",
        value: '1200',
        file : "userManagement",
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/></svg>`,
        label: "User",
        value: '1200',
        file : "userManagement",
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"/></svg>`,
        label: "Stock",
        value: '1200',
        file : "bloodManagement",
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/></svg> `,
        label: "Total",
        value: '5000',
        file : "checkpointManagement"
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/></svg> `,
        label: "Active",
        value: '3000',
        file : "checkpointManagement"
    },
    {
        icon: `<svg class="lg:w-8 lg:h-8 w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" fill="#9ca3af" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/></svg> `,
        label: "Inactive",
        value: '2000',
        file : "checkpointManagement"
    },
];