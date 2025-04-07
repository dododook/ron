const pageConfig = {
  // Title for your status page
  title: "RON's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/dododook', label: 'GitHub' },
    { link: 'https://128128.best/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    "🌐 Public (example group name)": ['google_monitor', 'bar_monitor', 'more monitor ids...'],
    "🔐 Private": ['ssh_monitor'],
  },
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
   // passwordProtection: 'username:password',
  monitors: [
    {
      id: 'google_monitor',
      name: 'My Google Monitor',
      method: 'GET',
      target: 'https://www.google.com'
    },
    {
      id: 'ssh_monitor',
      name: 'Example SSH Monitor',
      method: 'TCP_PING',
      target: '47.242.150.235:22'
    },
     {
      id: 'ssh_monitor',
      name: 'Example SSH Monitor',
      method: 'TCP_PING',
      target: '47.242.0.227:22'
    },
     {
      id: 'ssh_monitor',
      name: 'Example SSH Monitor',
      method: 'TCP_PING',
      target: '8.217.213.139:22'
    },
     {
      id: 'ssh_monitor',
      name: 'Example SSH Monitor',
      method: 'TCP_PING',
      target: '120.241.144.143:22'
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
