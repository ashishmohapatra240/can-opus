export interface IndustryData {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  challenges: string[];
  supports: {
    category: string;
    items: string[];
  }[];
  keyOfferings: {
    title: string;
    description: string;
  }[];
  valueDelivered: {
    metric: string;
    description: string;
  }[];
}

export const industriesData: IndustryData[] = [
  {
    id: 1,
    slug: 'steel',
    title: 'Steel Industry',
    image: '/images/industries/Steel Industry.png',
    description: 'The steel industry operates under extreme temperatures and heavy particulate loads. CanOpus delivers engineered solutions that improve reliability, safety and environmental performance across the entire steel manufacturing chain.',
    challenges: [
      'High-concentration dust emissions',
      'Frequent equipment wear',
      'High maintenance downtime',
      'Stringent emission norms'
    ],
    supports: [
      {
        category: 'Baghouses & Dust Collection',
        items: ['High-efficiency baghouses for sinter/BOF/EAF', 'Retrofit & upgrades', 'Filter bag optimization']
      },
      {
        category: 'Reliability Engineering',
        items: ['FMEA / RCA', 'Reliability improvement plans']
      },
      {
        category: 'Condition Monitoring',
        items: ['Real-time monitoring', 'Predictive maintenance']
      },
      {
        category: 'AMCs & Field Service',
        items: ['Spare planning', 'On-site maintenance']
      }
    ],
    keyOfferings: [
      {
        title: 'Sinter Plant Baghouse',
        description: 'Short explanation about sinter plant baghouse.'
      },
      {
        title: 'Pulse Jet Bag Filters',
        description: 'Short explanation about pulse jet bag filters.'
      },
      {
        title: 'Fan Balancing & Alignment',
        description: 'Short explanation about fan balancing & alignment.'
      },
      {
        title: 'Material Conveying Audits',
        description: 'Short explanation about material conveying audits.'
      },
      {
        title: 'Emission Control Upgrades',
        description: 'Short explanation about emission control upgrades.'
      }
    ],
    valueDelivered: [
      {
        metric: '20–40%',
        description: 'Increase in equipment uptime'
      },
      {
        metric: '30–60%',
        description: 'Filter life improvement'
      },
      {
        metric: '38%',
        description: 'Emission reduction (example case)'
      }
    ]
  },
  {
    id: 2,
    slug: 'paper',
    title: 'Paper & Pulp Industry',
    image: '/images/industries/Paper Industry.png',
    description: 'The paper & pulp industry demands clean environments, reliable machinery and precise controls. CanOpus ensures seamless performance across paper machines, finishing sections and material handling areas.',
    challenges: [
      'Fine fiber dust accumulation',
      'Humidity effects',
      'High-speed roll failures',
      'Quality contamination'
    ],
    supports: [
      {
        category: 'Dust Collection',
        items: ['Baghouse for cutting & shredders', 'Cyclone-baghouse combinations']
      },
      {
        category: 'Reliability Engineering',
        items: ['RCA for machine failures', 'Spare strategy']
      },
      {
        category: 'Condition Monitoring',
        items: ['Vibration monitoring of rolls', 'Analytics for shutdown prevention']
      },
      {
        category: 'AMCs',
        items: ['Full dust system AMC', 'On-site troubleshooting']
      }
    ],
    keyOfferings: [
      {
        title: 'Centralized Extraction Systems',
        description: 'Short explanation about centralized extraction systems.'
      },
      {
        title: 'Fine Dust Filters',
        description: 'Short explanation about fine dust filters.'
      },
      {
        title: 'Dryer Reliability Audits',
        description: 'Short explanation about dryer reliability audits.'
      },
      {
        title: 'Fan Optimization',
        description: 'Short explanation about fan optimization.'
      }
    ],
    valueDelivered: [
      {
        metric: '45%',
        description: 'Reduction in machine stoppages (example)'
      },
      {
        metric: 'Improved',
        description: 'Indoor air quality & product quality'
      }
    ]
  },
  {
    id: 3,
    slug: 'power',
    title: 'Power Industry',
    image: '/images/industries/Power Industry.png',
    description: 'Power plants require continuous operation and strong pollution-control systems. CanOpus provides baghouse & ESP support, reliability engineering and condition monitoring for power generation assets.',
    challenges: [
      'High-temperature boiler dust',
      'Large-scale ash handling',
      'ID/FD fan failures',
      'Regulatory compliance'
    ],
    supports: [
      {
        category: 'Baghouse & ESP Support',
        items: ['High-temp filter selection', 'ESP optimization']
      },
      {
        category: 'Reliability Engineering',
        items: ['Failure analysis for fans', 'Maintenance strategy']
      },
      {
        category: 'Condition Monitoring',
        items: ['Turbine auxiliary monitoring', 'Motor health checks']
      },
      {
        category: 'AMCs & Audits',
        items: ['Energy efficiency audits', 'Pollution control audits']
      }
    ],
    keyOfferings: [
      {
        title: 'Boiler Baghouse',
        description: 'Short explanation about boiler baghouse.'
      },
      {
        title: 'ESP Retrofit',
        description: 'Short explanation about esp retrofit.'
      },
      {
        title: 'Fan Performance Audit',
        description: 'Short explanation about fan performance audit.'
      },
      {
        title: 'Predictive Maintenance',
        description: 'Short explanation about predictive maintenance.'
      }
    ],
    valueDelivered: [
      {
        metric: '52%',
        description: 'Breakdown reduction (example)'
      },
      {
        metric: 'Lower',
        description: 'Maintenance costs & unplanned outages'
      }
    ]
  },
  {
    id: 4,
    slug: 'fertilizer',
    title: 'Fertilizer & Chemical Industry',
    image: '/images/industries/Fertilizer Industry.png',
    description: 'Fertilizer plants handle powders and corrosive dust. CanOpus delivers corrosion-resistant baghouses, safety-oriented designs and reliability programs for continuous operation.',
    challenges: [
      'Corrosive dust',
      'Wear & tear of conveyors',
      'Explosion & safety concerns',
      'Emission norms'
    ],
    supports: [
      {
        category: 'Dust Collection',
        items: ['Prilling tower baghouses', 'Corrosion-resistant designs']
      },
      {
        category: 'Reliability Engineering',
        items: ['Conveyor & blower failure analysis', 'Improvement roadmaps']
      },
      {
        category: 'Condition Monitoring',
        items: ['Pump & motor health', 'Early failure detection']
      },
      {
        category: 'AMCs & Safety',
        items: ['Explosion-safe ducting', 'Packing area filtration']
      }
    ],
    keyOfferings: [
      {
        title: 'Prilling Tower Filters',
        description: 'Short explanation about prilling tower filters.'
      },
      {
        title: 'Explosion-safe Designs',
        description: 'Short explanation about explosion-safe designs.'
      },
      {
        title: 'Corrosion-resistant Components',
        description: 'Short explanation about corrosion-resistant components.'
      },
      {
        title: 'Pollution Compliance Support',
        description: 'Short explanation about pollution compliance support.'
      }
    ],
    valueDelivered: [
      {
        metric: '30%',
        description: 'Maintenance reduction (example)'
      },
      {
        metric: 'Improved',
        description: 'Worker safety & uptime'
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find(industry => industry.slug === slug);
}
