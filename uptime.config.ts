const pageConfig = {
  // Title for your status page
  title: "lyc8503's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/dododook', label: 'GitHub' },
    { link: 'https://128128.best', label: 'Blog' },
    { link: 'mailto:yaoguangting@gmail.com1', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    "🌐 Public (example group name)": ['foo_monitor', 'bar_monitor', 'more monitor ids...'],
    "🔐 Private": ['test_tcp_monitor'],
  },
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'google_monitor',
      name: 'My Blog Monitor',
      method: 'GET',
      target: 'https://128128.best',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

 {
      id: 'google_monitor',
      name: 'My Nav Monitor',
      method: 'GET',
      target: 'https://vps.128128.best',
     tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

    {
      id: 'ssh_monitor',
      name: 'Oracle Monitor',
      method: 'TCP_PING',
      target: '47.242.150.235:22',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
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
