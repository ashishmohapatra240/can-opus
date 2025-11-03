export interface ProductVariant {
  title: string;
  image: string;
}

export interface ProductVariantGroup {
  sectionTitle: string;
  variants: ProductVariant[];
}

export interface ProductDetailSection {
  title: string;
  content: string;
}

export interface Product {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  fullDescription?: string;
  heroDescription?: string;
  heroSubDescription?: string;
  features?: string[];
  applications?: string[];
  variants?: ProductVariant[];
  variantGroups?: ProductVariantGroup[];
  detailSections?: ProductDetailSection[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "industrial-dust-fume-mist",
    image: "/images/products/Industrial Dust, Fume and Mist.png",
    title: "Industrial Dust, Fume & Mist",
    description:
      "Complete range of dust collection equipment. Efficient & Energy Saving Dust Extraction Systems in Pneumatic & Centralized Solutions is our Specialty.",
    fullDescription:
      "Our Industrial Dust, Fume & Mist collection systems are designed to provide efficient and energy-saving dust extraction solutions. We specialize in both pneumatic and centralized systems that ensure clean air in your industrial facility while maintaining optimal energy efficiency.",
    heroDescription:
      "We are the well known and most trusted Industrial Dust Collector suppliers in India dealing with high-performance dust collectors.",
    heroSubDescription:
      "Our wide range of industrial dust collectors includes portable and compact dust extraction systems that cover a broad spectrum of dust particles that significantly improve the air quality and helps in enhancing efficiency and productivity.",
    detailSections: [
      {
        title: "Mist Collectors",
        content:
          "High performance mist collection is a must for manufacturers that generate coolant and machining oil mist in their applications. Uncollected mist leaves condensation and residue on floors, machines, walls and ceilings, creating a potentially unsafe and unclean manufacturing environment.",
      },
      {
        title: "Fume Collectors",
        content:
          "In welding operations, workers are in a daily contact with harmful weld fume particulate. Most of these particles are respirable (enter the lungs), which makes it critical to have reliable, high performance fume collectors, weld fume extraction and weld smoke filters that collect the fume before it reaches your welder's breathing zone.",
      },
    ],
    features: [
      "Energy-efficient dust extraction systems",
      "Pneumatic and centralized solutions",
      "Complete range of dust collection equipment",
      "Advanced filtration technology",
      "Low maintenance requirements",
      "Customizable configurations",
    ],
    applications: [
      "Manufacturing facilities",
      "Welding operations",
      "Metal fabrication",
      "Woodworking industries",
      "Chemical processing",
      "Food processing plants",
    ],
    variants: [
      {
        title: "Dalamatic® Collector",
        image:
          "/images/products-variants/industrial-dust-fume/industrial-1.jpg",
      },
      {
        title: "Downflo® Cartridge Dust Collectors",
        image:
          "/images/products-variants/industrial-dust-fume/industrial-2.jpg",
      },
      {
        title: "PowerCore® Dust Collectors",
        image:
          "/images/products-variants/industrial-dust-fume/industrial-3.jpg",
      },
      {
        title: "PowerCore® Filter Packs",
        image:
          "/images/products-variants/industrial-dust-fume/industrial-4.jpg",
      },
      {
        title: "Ultra-web® Media Technology",
        image:
          "/images/products-variants/industrial-dust-fume/industrial-5.jpg",
      },
      {
        title: "Dura-life™ Filter Media Technology",
        image:
          "/images/products-variants/industrial-dust-fume/industrial-6.jpg",
      },
    ],
  },
  // {
  //   id: 2,
  //   slug: "emission-monitoring",
  //   image: "/images/products/Emission Monitoring.png",
  //   title: "Emission Monitoring",
  //   description:
  //     "Continuous Monitoring Systems (CMS) enable to track the SO2, CO, NOX, Ammonia, or PM2.5 & PM10 Particles in the Industrial Air. Find Total Mercury or both Elemental and Ionic Mercury Systems designed & installed by CanOpus.",
  //   fullDescription:
  //     "Our Continuous Monitoring Systems (CMS) provide real-time tracking of various pollutants and particles in industrial air. These advanced systems help ensure compliance with environmental regulations while maintaining optimal operational efficiency.",
  //   heroDescription:
  //     "Advanced Continuous Monitoring Systems (CMS) designed to track SO2, CO, NOX, Ammonia, and particulate matter in industrial environments.",
  //   heroSubDescription:
  //     "Our comprehensive emission monitoring solutions help you maintain compliance with environmental regulations while ensuring the safety of your facility and workforce. From mercury detection to multi-gas analysis, we provide accurate and reliable monitoring systems.",
  //   features: [
  //     "Real-time continuous monitoring",
  //     "SO2, CO, NOX, and Ammonia tracking",
  //     "PM2.5 & PM10 particle detection",
  //     "Mercury measurement systems",
  //     "Data logging and reporting",
  //     "Remote monitoring capabilities",
  //   ],
  //   applications: [
  //     "Power plants",
  //     "Cement manufacturing",
  //     "Steel plants",
  //     "Chemical industries",
  //     "Waste incineration",
  //     "Oil and gas refineries",
  //   ],
  //   variants: [
  //     {
  //       title: "SO2 Monitoring Systems",
  //       image: "/images/products/Emission Monitoring.png",
  //     },
  //     {
  //       title: "NOX Analyzers",
  //       image: "/images/products/Emission Monitoring.png",
  //     },
  //     {
  //       title: "CO Emission Monitors",
  //       image: "/images/products/Emission Monitoring.png",
  //     },
  //     {
  //       title: "PM2.5 & PM10 Detectors",
  //       image: "/images/products/Emission Monitoring.png",
  //     },
  //     {
  //       title: "Mercury Monitoring Systems",
  //       image: "/images/products/Emission Monitoring.png",
  //     },
  //     {
  //       title: "Multi-Gas Analyzers",
  //       image: "/images/products/Emission Monitoring.png",
  //     },
  //   ],
  // },
  {
    id: 3,
    slug: "power-transmission-tech",
    image: "/images/products/Power Transmission Tech.png",
    title: "Power Transmission Technology",
    description:
      "Mechanical Power Transmission Technology through products that not only add to the machinery performance but also significantly improve its reliability with quality state-of-the-art technology for power products that help you energy efficiency.",
    fullDescription:
      "Our Power Transmission Technology solutions deliver state-of-the-art mechanical power transmission products that enhance machinery performance and reliability. We provide energy-efficient solutions that reduce operational costs while maintaining optimal performance.",
    heroDescription:
      "At CanOpus our focus has always been dealing with products that not only add to the machinery performance but also significantly improve its efficiency as a whole. With this objective, we deal with products that help in energy efficiency, power density, with ease of servicing and electronification. Our partnered manufacturer develops power transmission components for mechanical and plant engineering for more than 60+ years. Our wide range of product portfolio includes power transmission technology, brake systems, and cooling systems, and hydraulic components. These high-quality products help in power transmissions, avoid accidental overloads (if any), reduce stoppages & breakage, and reduce operation maintenance and repair.",
    features: [
      "State-of-the-art transmission technology",
      "Enhanced machinery performance",
      "Improved reliability and durability",
      "Energy-efficient solutions",
      "Reduced operational costs",
      "Extended equipment lifespan",
    ],
    applications: [
      "Manufacturing industries",
      "Mining operations",
      "Conveyor systems",
      "Heavy machinery",
      "Industrial automation",
      "Material handling",
    ],
    variants: [
      {
        title: "ROTEX GS-Jaw couplings",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-1.jpg",
      },
      {
        title: "ROTEX® ZS-DKM-H-Double cardanic jaw-type coupling",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-2.jpg",
      },
      {
        title: "ROTEX® SH-Flexible jaw couplings",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-3.jpg",
      },
      {
        title: "ROTEX® BTAN and SBAN",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-4.jpg",
      },
      {
        title: "GEARex® DA, DB and DAB-Steel gear couplings",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-5.jpg",
      },
      {
        title: "BoWex® M, I-Steel Sleeve Coupling",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-6.jpg",
      },
      {
        title: "RADEX®-N-Steel Lamina Coupling",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-7.jpg",
      },
      {
        title: "RADEX®-N NANA 3",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-8.jpg",
      },
      {
        title: "RIGIFLEX®-N-Steel lamina coupling",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-9.jpg",
      },
      {
        title: "RIGIFLEX®-HP",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-10.jpg",
      },
      {
        title: "TORQUE LIMITERS",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-11.jpg",
      },
      {
        title: "TOOLFLEX-Metal bellow-type coupling",
        image:
          "/images/products-variants/power-transmission-tech/power-transmission-12.jpg",
      },
    ],
  },
  {
    id: 4,
    slug: "gas-turbine-filtration",
    image: "/images/products/Gas turbine filtration.png",
    title: "Gas turbine filtration",
    description:
      "Gas Turbine systems are capable to upgrade performance efficiency & availability of any Gas Turbine (GT) or Air Compressor. CanOpus offer the best in Class Coalescer Sucker Web media for your GTs",
    fullDescription:
      "Our Gas Turbine Filtration systems are designed to upgrade the performance efficiency and availability of any Gas Turbine or Air Compressor. We offer best-in-class Coalescer Sucker Web media that ensures optimal filtration and extended equipment life.",
    heroDescription:
      "Inlet air quality is a major factor of the overall performance and durability of Gas Turbines. Our air filtration products and improved filter systems for gas turbines are best in class with latest technologies providing higher filtration efficiency. Our trained and skilled engineers and technicians have hands on experience on the installation, management and service of gas turbines. We greatly emphasize on the complete installation, inspection and the performance of the gas turbines.",
    heroSubDescription:
      "In the entire process we are very much particular about the safety and the on-time schedule.",
    features: [
      "Best-in-class filtration media",
      "Enhanced turbine efficiency",
      "Improved availability",
      "Coalescer technology",
      "Extended filter life",
      "Reduced maintenance costs",
    ],
    applications: [
      "Gas turbine power plants",
      "Air compressor systems",
      "Industrial gas turbines",
      "Power generation facilities",
      "Oil and gas operations",
      "Combined cycle plants",
    ],
    detailSections: [
      {
        title: "Purafil V-Bank",
        content:
          "Ideal for odor control where high levels of gas would overwhelm a traditional particulate filter. Uses a high-impact plastic frame with a built-in header for durable and lightweight housing that can hold over 20 pounds of media in a 24x24x12 filter.",
      },
      {
        title: "Purafilter Odor Pleat",
        content:
          "Our carbon enhanced pleated filter removes odors, gases and contaminants in intermittent use applications and has a low pressure drop for effective removal. 100% synthetic fibers do not support microbial growth. Available in Plus, a combined particulate and gas phase filter with 50% longer life than the standard Odor Pleat filter.",
      },
      {
        title: "Purafilter",
        content:
          "The Purafilter® is a combination chemical and particulate filter that integrates Purafil® patented dry-scrubbing media into a non-woven fiber matrix. Partnered with an HVAC system, Purafilters help meet building codes and regulations requiring outdoor air cleaning for PM-10, PM-2.5, and ozone. They replace existing particulate filters in retrofit or rework applications as well as being used in new construction. Also available in a high efficiency option.",
      },
      {
        title: "PuraGRID",
        content:
          "The PuraGRID® is a modern new filter design that supplies a large amount of chemical filtration with a minimal amount of pressure drop. This filter offers increased operational performance and energy savings for many indoor applications. The PuraGRID can be constructed with several different chemical medias to tailor the solution to specific needs.",
      },
      {
        title: "The Sachet",
        content:
          "Designed for the refrigerator, a sachet increases the shelf life of fruits and vegetables from days to weeks. It eradicates ethylene, a naturally occurring gas that causes fruits and vegetables to ripen prematurely. Food stays fresher, longer.",
      },
    ],
    variants: [
      {
        title: "Retrofit",
        image: "/images/products-variants/gas-turbine/gas-1.jpg",
      },
      {
        title: "Cartridge Filters",
        image: "/images/products-variants/gas-turbine/gas-2.jpg",
      },
      {
        title: "Panel Filters",
        image: "/images/products-variants/gas-turbine/gas-3.jpg",
      },
      {
        title: "Composite Filter",
        image: "/images/products-variants/gas-turbine/gas-4.jpg",
      },
      {
        title: "WAVE™ Panel Filters",
        image: "/images/products-variants/gas-turbine/gas-5.jpg",
      },
      {
        title: "PowerCore Filters",
        image: "/images/products-variants/gas-turbine/gas-6.jpg",
      },
      {
        title: "Pre-Filters",
        image: "/images/products-variants/gas-turbine/gas-7.jpg",
      },
    ],
  },
  {
    id: 5,
    slug: "gas-phase-filtration",
    image: "/images/products/Gas phase filtration.png",
    title: "Gas phase filtration",
    description:
      "CanOpus helps you eliminate Toxic & Hazardous Gases as well as bad Odors from the Industrial Air.",
    fullDescription:
      "Our Gas Phase Filtration solutions are specifically designed to eliminate toxic and hazardous gases as well as unpleasant odors from industrial air. We provide comprehensive solutions that ensure a safe and comfortable working environment.",
    heroDescription:
      "Gas phase filtration essentially covers the removal of harmful, nuisance, and toxic gases from the air making the environment cleaner and purer with specialized media and chemical substrate. Gas phase filtration technology is the optimum solution for the efficient removal of a board spectrum of air-borne contaminants. Our high-quality engineering and manufacturing air filtration solutions provide best-in-class solutions for our customers. We design build-to-order systems with unique filtration solutions for any environment that protects the people and the equipment critical at its best.",
    // heroSubDescription:
    //   "Protect your workforce and comply with air quality standards using our advanced chemical filtration systems. From activated carbon to molecular filtration, we provide comprehensive solutions for a safer workplace.",
    features: [
      "Toxic gas elimination",
      "Hazardous gas removal",
      "Odor control systems",
      "Advanced chemical filtration",
      "Safe working environment",
      "Compliance with air quality standards",
    ],
    applications: [
      "Chemical processing plants",
      "Pharmaceutical manufacturing",
      "Wastewater treatment facilities",
      "Food processing industries",
      "Semiconductor manufacturing",
      "Laboratory facilities",
    ],
    variants: [
      {
        title: "Activated Carbon Filters",
        image: "/images/products-variants/gas-phase/gas-phase-1.jpg",
      },
      {
        title: "Chemical Media Filters",
        image: "/images/products-variants/gas-phase/gas-phase-2.jpg",
      },
      {
        title: "Molecular Filtration Systems",
        image: "/images/products-variants/gas-phase/gas-phase-3.jpg",
      },
      {
        title: "Odor Control Units",
        image: "/images/products-variants/gas-phase/gas-phase-4.jpg",
      },
      {
        title: "VOC Removal Systems",
        image: "/images/products-variants/gas-phase/gas-phase-5.jpg",
      },
      {
        title: "Acid Gas Scrubbers",
        image: "/images/products-variants/gas-phase/gas-phase-6.jpg",
      },
    ],
    detailSections: [
      {
        title: "Face Mask - KN95 Healthcare Particulate Respirator",
        content:
          "The KN95 Healthcare Particulate Respirator mask is FDA Class 1 approved and individually wrapped. This mask is also available with Puraward fiber (PWF) technology.",
      },
      {
        title: "PuraShield® 500 Cabinet",
        content:
          "Destroys up to 99.98% of Target Viruses & Bacteria*. Uses a disposable 4-layer filter with an antimicrobial filter layer using PuraWard® technology that eliminates viruses and bacteria. Includes 11 lbs of Purafil patented antimicrobial dry chemical media blend that eliminates viruses and bacteria. Compact and mobile design.",
      },
      {
        title: "PuraShield® Mini",
        content:
          "Destroys up to 99.98% of Target Viruses & Bacteria*. Uses a disposable 3-layer filter that removes harmful viruses, bacteria, mold, and smoke from the air. Containing Purafil patented antimicrobial dry chemical media blend. Equipped with an antimicrobial final filter layer using PuraWard® technology. Filtration for harmful PM0.3, PM2.5 particulate matter. Also removes toxic and damaging gaseous pollutants.",
      },
    ],
  },
  {
    id: 6,
    slug: "flow-level-instrument",
    image: "/images/products/Flow & level instrument.png",
    title: "Flow & level instrument",
    description:
      "Experience the true Measure of Quality with our Higher Accuracies. CanOpus Supplies & Installs Flow Meters to check and sustain with accuracy to the Decade.",
    fullDescription:
      "Our Flow & Level Instruments provide the highest level of accuracy in measurement. We supply and install flow meters that maintain precision and reliability over extended periods, ensuring optimal process control.",
    heroDescription:
      "Industrial flow measurements include measuring the industrial fluids and gases covering water, natural gas, steam, mineral oil, chemicals, etc. Our flow and level instrumentations are custom engineered and built specifically with the latest technologies. Our products are best in class and are manufactured by the global leaders in pressure, level, and flow measurement technology. Our wide range of comprehensive solutions is based on high-quality metering systems for level measurement and flow measurement as well as application-oriented measurement systems.",
    heroSubDescription:
      "The flow and level instruments are used to measure the mass or volumetric flow rate of the fluid or gas including Coriolis mass flowmeters, Electromagnetic flowmeters, Ultrasonic flowmeters, Vortex flowmeters, Differential pressure measurement, Thermal mass flowmeters.",
    features: [
      "High accuracy measurements",
      "Long-term precision",
      "Advanced flow metering technology",
      "Level measurement solutions",
      "Easy installation and calibration",
      "Reliable performance",
    ],
    applications: [
      "Process industries",
      "Water treatment plants",
      "Oil and gas operations",
      "Chemical manufacturing",
      "Food and beverage industry",
      "Pharmaceutical production",
    ],
    variantGroups: [
      {
        sectionTitle: "FLOW MEASUREMENT SOLUTIONS",
        variants: [
          {
            title: "Coriolis Mass Flowmeters",
            image: "/images/products-variants/flow-level/flow-1.jpg",
          },
          {
            title: "Electromagnetic Flowmeters",
            image: "/images/products-variants/flow-level/flow-2.jpg",
          },
          {
            title: "Ultrasonic Flowmeters",
            image: "/images/products-variants/flow-level/flow-3.jpg",
          },
          {
            title: "Vortex Flowmeters",
            image: "/images/products-variants/flow-level/flow-4.jpg",
          },
          {
            title: "Differential Pressure Measurement",
            image: "/images/products-variants/flow-level/flow-5.jpg",
          },
          {
            title: "Thermal Mass Flowmeters",
            image: "/images/products-variants/flow-level/flow-6.jpg",
          },
        ],
      },
      {
        sectionTitle: "LEVEL MEASUREMENT SOLUTIONS",
        variants: [
          {
            title: "Guided Radar level Measurement",
            image: "/images/products-variants/flow-level/level-1.jpg",
          },
          {
            title: "Radar Level Measurement",
            image: "/images/products-variants/flow-level/level-2.jpg",
          },
          {
            title: "Hydrostatic Level Measurement",
            image: "/images/products-variants/flow-level/level-3.jpg",
          },
          {
            title: "Ultrasonic Level Measurement",
            image: "/images/products-variants/flow-level/level-4.jpg",
          },
          {
            title: "Vibronic Point Level Detection",
            image: "/images/products-variants/flow-level/level-5.jpg",
          },
          {
            title: "Capacitance Level Measurement",
            image: "/images/products-variants/flow-level/level-6.jpg",
          },
          {
            title: "Servo Level Measurement",
            image: "/images/products-variants/flow-level/level-7.jpg",
          },
          {
            title: "Conductive Level Measurement",
            image: "/images/products-variants/flow-level/level-8.jpg",
          },
          {
            title: "Radiometric Level Measurement",
            image: "/images/products-variants/flow-level/level-9.jpg",
          },
          {
            title: "Differential Pressure Measurement",
            image: "/images/products-variants/flow-level/level-10.jpg",
          },
          {
            title: "Electromechanical Level Measurement",
            image: "/images/products-variants/flow-level/level-11.jpg",
          },
          {
            title: "Float Switch Level Measurement",
            image: "/images/products-variants/flow-level/level-12.jpg",
          },
          {
            title: "Paddle Switch Level Measurement",
            image: "/images/products-variants/flow-level/level-13.jpg",
          },
          {
            title: "Microwave Barrier Level Measurement",
            image: "/images/products-variants/flow-level/level-14.jpg",
          },
        ],
      },
    ],
    detailSections: [
      {
        title: "Absolute and gauge pressure measurement",
        content:
          "Absolute and gauge pressure continuous measurement or pressure switches provide the safe measurement of liquids and gases in various applications. Cerabar sensors and Ceraphant switches monitor reliably the level in food applications. The devices have various hygienic approvals. Also in the process industry with SIL and explosion protection certificates there is reliable measurement guaranteed.",
      },
      {
        title: "Hydrostatic level measurement",
        content:
          "Be it water or any other liquid, hydrostatic level sensors measure in various applications in different industries, like food, water/wastewater. The Deltapilot and Waterpilot pressure transmitters for hydrostatic level measurement offer the right solution in tanks or wells, submersible or installed outside a vessel.",
      },
      {
        title: "Differential pressure measurement",
        content:
          "Be it water or any other liquid, hydrostatic level sensors measure in various applications in different industries, like food, water/wastewater. The Deltapilot and Waterpilot pressure transmitters for hydrostatic level measurement offer the right solution in tanks or wells, submersible or installed outside a vesselDifferential pressure transmitters with piezoresistive pressure sensors and welded metallic membrane or electronic dp or diaphragm seal is used mostly in the process industry. Deltabar offers continuous level measurement in liquids as well as volume or mass flow measurement using primary elements. It is also possible to do filter monitoring with the differential pressure transmitter.",
      },
      {
        title: "Industrial thermometers",
        content:
          "Endress+Hauser offers a broad portfolio of temperature measurement technology for comprehensive solutions for almost all branches of industry. The measurement principles used are RTD sensors and thermocouples. Important points for the inclusion of the measurement point into the process are the protection of the thermometers through thermowells and the process connection.",
      },
      {
        title: "Hygienic thermometers",
        content:
          "The innovative thermometers of the compact and modular hygienic line have been designed to meet the requirements of the Food & Beverage and Life Sciences industries and comply with highest quality standards. For the first time a comprehensive, global product portfolio with a large selection of process connections, transmitters and further constructive variants is offered. All products - both metric and imperial - are available with the relevant international approvals.",
      },
      {
        title: "High temperature thermometers",
        content:
          "In steel treatment, glass smelters, flue gas applications and in the brick and ceramics industries temperatures up to 1700 °C can occur. High temperature applications require special thermometers with ceramic thermowells and thermocouples made from special metals, such as platinum and rhodium. The thermowell protects the sensor from mechanical and chemical damages and temperature shocks caused by the process and therefore increases the life span of the sensor.",
      },
      {
        title: "Heavy duty thermometers",
        content:
          "Safe monitoring of process temperatures in challenging applications e. g. in the Oil & Gas industry. The robust thermometers are designed for use in demanding and safety relevant applications e.g. in the Chemical, Oil & Gas and Energy industry. The thermometers fulfills the corresponding safety requirements due to various certificates and tests. The use of a transmitter leads to higher accuracy and reliability in comparison to directly wired sensors.",
      },
    ],
  },
  {
    id: 7,
    slug: "condition-monitoring-equipment",
    image: "/images/products/Condition monitoring equipment.png",
    title: "Condition monitoring equipment",
    description:
      "CanOpus Laser Online Sensor Alignment should not eat into your maintenance budget. Better it should save the budget. Experience & Digital Sensor Equipment from CanOpus.",
    fullDescription:
      "Our Condition Monitoring Equipment, including Laser Online Sensor Alignment systems, helps reduce maintenance costs while improving equipment reliability. Our digital sensor equipment provides real-time monitoring and predictive maintenance capabilities.",
    heroDescription:
      "Condition monitoring involves the continuous and on-time monitoring of the various industrial equipment and machineries such as vibration, temperature and sound. It is the more proactive means to preventive maintenance where any possible component defects are identified at an early stage. The most used and effective system is the vibration monitoring system and the vibration equipment that uses a set of tools used to measure one or more parameters in order to identify changes in the behavior of the machinery. In Fact, the main purpose of these systems is to help in scheduling the maintenance activities based on a process called Predictive Analysis.",
    // heroSubDescription:
    //   "Leverage our laser alignment tools, vibration analyzers, and thermal imaging systems to detect issues before they become costly failures. Save your maintenance budget while maximizing equipment uptime.",
    features: [
      "Laser alignment technology",
      "Online sensor monitoring",
      "Predictive maintenance",
      "Cost-saving solutions",
      "Real-time data analysis",
      "Extended equipment life",
    ],
    applications: [
      "Rotating machinery",
      "Pump systems",
      "Motor alignment",
      "Belt drives",
      "Gearbox monitoring",
      "Turbine systems",
    ],
    variants: [
      {
        title: "Vibration Analyzer | Balancer DigivibeMX®",
        image: "/images/products/Condition monitoring equipment.png",
      },
      {
        title: "Online Monitoring System PHANTOM®",
        image: "/images/products/Condition monitoring equipment.png",
      },
      {
        title: "Wireless Triaxial Accelerometer WISER 3X®",
        image: "/images/products/Condition monitoring equipment.png",
      },
      {
        title: "Laser Alignment System EI AlIGNMENT®",
        image: "/images/products/Condition monitoring equipment.png",
      },
    ],
    detailSections: [
      {
        title: "VIBRATION ANALYSIS",
        content:
          "Vibration-based analysis techniques are widely used for condition-based monitoring and maintenance services. The vibration spectrum is collected for the machinery which consists of rotating or moving assets. There are 2 major areas being looked at: Acceleration and Velocity of the machines. The prime objective of Vibration Analysis is to carefully monitor rotating machinery and detect possible problems and control future machinery failure (if any).",
      },
      {
        title: "FERROGRAPHY",
        content:
          "This condition-based monitoring technique involves the examination of various oil samples used in the machinery on a scheduled/ periodic basis. It also involves the identification and separation of solid particles (ferrous and non-ferrous) from the lubricating oils and checking their characteristics like: size, composition, distribution, concentration, etc. Ferrography testing helps to detect the critical stage of the machinery that may result in critical failures. This type of testing is also called as Wear Particle Analysis or Wear Debris Analysis.",
      },
      {
        title: "LASER SHAFT ALIGNMENT",
        content:
          "One of the most common problems in rotating machinery is shaft misalignment. Misaligned shafts are one of the greatest reasons for plant breakdowns as it increases the pressure on the machinery bearings and affects the movements. The condition-based monitoring for laser shaft alignment helps in identifying the misaligned shafts and fixes it with maximum precision. This significantly helps in reducing wear and tear on the bearings, seals, shafts, and couplings thereby minimizing the operating and maintenance costs.",
      },
      {
        title: "THERMOGRAPHY ANALYSIS",
        content:
          "Temperature is one of the most common indicators of machinery health. Thermography analysis is widely used for preventative maintenance on mechanical equipment through thermal energy. It is a widely used analytical method to identify the temperature differences with faulty machinery, worn out equipment, damaged material components, etc.",
      },
      {
        title: "ULTRASOUND ANALYSIS",
        content:
          "Condition monitoring through ultrasound analysis is one of the most reliable method and versatile predictive technology. As a companion to vibration analysis, ultrasound analysis helps with identifying early fault conditions in rotating and non-rotating machinery, especially with slow rotating assets. It helps to record in real-time the sounds of operating equipment and provide early warning indications of failure conditions.",
      },
      {
        title: "ULTRASONIC TESTING",
        content:
          "This is the highly effective preventive maintenance method to detect incipient faults in bearings and even adequacy of lubricant. These testing devices uses the advanced technology that can be used to check the lubrication and friction level and monitor a wide range of plant operations. This effective testing method helps to avoid and control many repairs and failures that commonly occur in industrial settings.",
      },
    ],
  },
  {
    id: 8,
    slug: "screw-pumps",
    image: "/images/products/Screw pumps.png",
    title: "Screw pumps",
    description:
      "Single Double or Triple Screw Pumps for transport of viscous fluids with lubricating properties for a variety of applications in Industrial Process for Energy Production, boating, hydraulics, fuel, lubrication, circulating, food and so on.",
    fullDescription:
      "Our Screw Pumps are available in single, double, or triple screw configurations for transporting viscous fluids with lubricating properties. These pumps are designed for a wide variety of applications across different industries.",
    heroDescription:
      "We deal with high-quality, German engineered Pumps that operate to maximizing efficiency for all your pumping needs. The high-efficiency screw pumps are the result of continuous research and development in the industrial requirement of fluid handling applications and instruments.",
    heroSubDescription:
      "Our products in screw pumps are powerful, efficient, and reliable with a complete focus in application engineering with the benefits like Engineering Excellence, Low-maintenance, Advanced Technology, Compact & Space-saving Installations, Innovative Design, Long Service Life, High Flow Rate ",
    features: [
      "Single, double, and triple screw options",
      "Viscous fluid handling",
      "Self-lubricating design",
      "High efficiency",
      "Low noise operation",
      "Versatile applications",
    ],
    applications: [
      "Energy production",
      "Marine and boating",
      "Hydraulic systems",
      "Fuel transfer",
      "Lubrication systems",
      "Food processing",
    ],
    variants: [
      {
        title: "Single Screw Pump",
        image: "/images/products-variants/screw-pumps/screw-1.jpg",
      },
      {
        title: "Twin Screw Pumps",
        image: "/images/products-variants/screw-pumps/screw-2.jpg",
      },
      {
        title: "Triple Screw Pumps",
        image: "/images/products-variants/screw-pumps/screw-3.jpg",
      },
    ],
  },
//   {
//     id: 9,
//     slug: "microbial-filtration",
//     image: "/images/products/Microbial filtration.png",
//     title: "Microbial filtration",
//     description:
//       "At CanOpus, we enjoy improving the Quality of Air you breathe, with virus filters & Masks & Air Purifiers for Pharmaceutical, Electronics & Food Industry.",
//     fullDescription:
//       "Our Microbial Filtration solutions are designed to improve the quality of air you breathe. We provide virus filters, masks, and air purifiers specifically designed for industries requiring the highest standards of air purity.",
//     heroDescription:
//       "Premium microbial filtration systems ensuring the highest air quality standards for pharmaceutical, electronics, and food processing industries.",
//     heroSubDescription:
//       "Our HEPA and ULPA filtration technologies provide superior protection against viruses, bacteria, and airborne contaminants, creating cleanroom-grade environments for your critical operations.",
//     features: [
//       "Virus and bacteria filtration",
//       "HEPA filtration technology",
//       "Air purification systems",
//       "Pharmaceutical-grade filters",
//       "High-efficiency masks",
//       "Cleanroom compatible",
//     ],
//     applications: [
//       "Pharmaceutical manufacturing",
//       "Electronics cleanrooms",
//       "Food processing facilities",
//       "Healthcare facilities",
//       "Biotechnology labs",
//       "Semiconductor manufacturing",
//     ],
//     variants: [
//       {
//         title: "HEPA Filter Systems",
//         image: "/images/products/Microbial filtration.png",
//       },
//       {
//         title: "ULPA Filters",
//         image: "/images/products/Microbial filtration.png",
//       },
//       {
//         title: "Antimicrobial Filters",
//         image: "/images/products/Microbial filtration.png",
//       },
//       {
//         title: "Air Purification Units",
//         image: "/images/products/Microbial filtration.png",
//       },
//       {
//         title: "Cleanroom Filters",
//         image: "/images/products/Microbial filtration.png",
//       },
//       {
//         title: "Sterile Air Systems",
//         image: "/images/products/Microbial filtration.png",
//       },
//     ],
//   },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
