import { 
  Layers, 
  Code2, 
  BarChart3, 
  Headset,
  ShieldCheck,
  Database,
  Cloud,
  Wrench,
  LifeBuoy,
  FileText,
  RefreshCw,
  Code,
  Briefcase,
  Search,
  HardDrive,
  FileSearch,
  BookOpen
} from "lucide-react";

export const SERVICES_DATA = [
  // ── Cloud & Support ──
  {
    slug: "hybrid-it",
    category: "Cloud & Support",
    title: "Hybrid IT and Cloud Services",
    shortDescription: "Seamlessly blend private, public and managed cloud with existing on-premises IT.",
    description: "Hybrid IT seamlessly blends private, public and managed cloud with existing on-premises IT, to improve business agility, accessibility and deliver better business outcomes — all within a prudent IT budget.",
    icon: Cloud,
    items: [
      "Cleverly architected and seamlessly integrated IT environment",
      "Governance framework that adapts and evolves with business needs",
      "Rapid deployment of new cloud-based solutions",
      "Governance and compliance assurance",
      "Privacy and security protection",
      "24/7 data availability across geographies and devices"
    ],
    expertise: [
      { id: 1, title: "IBM Partnership", description: "Certified IBM cloud solutions" },
      { id: 2, title: "Fujitsu Partnership", description: "Enterprise-grade infrastructure" },
      { id: 3, title: "Cost Optimization", description: "Prudent IT budget management" }
    ],
    detailedContent: "<p>Hybrid IT seamlessly blends private, public and managed cloud with existing on-premises IT, to improve business agility, accessibility and deliver better business outcomes. All of this is done within a prudent IT budget, to ensure that your Hybrid IT integration is as cost effective as possible.</p><p>We provide Hybrid IT and Cloud Services from our partners IBM and Fujitsu.</p>"
  },
  {
    slug: "it-support",
    category: "Cloud & Support",
    title: "IT Support Services",
    shortDescription: "Extend equipment uptime with certified service technicians.",
    description: "InTec System offers a wide variety of maintenance service options to help you extend your equipment uptime. One call will bring a certified service technician to your facility fast.",
    icon: LifeBuoy,
    items: [
      "Mission-critical equipment operating at optimal levels",
      "Minimized business interruptions from equipment malfunction",
      "Lower total cost of ownership",
      "Increased productivity and longer equipment lifespan",
      "Reliable basis for budgeting and planning",
      "24×7 full level of support model"
    ],
    expertise: [
      { id: 1, title: "Authorized Partner", description: "Certified by major vendors" },
      { id: 2, title: "24×7 Support", description: "Around-the-clock coverage" },
      { id: 3, title: "Training & Consulting", description: "Full service treatment" }
    ],
    detailedContent: "<p>InTec System offers a wide variety of maintenance service options to help you extend your equipment uptime. One call will bring a certified service technician to your facility fast. Using only manufacturer's certified parts, our technicians will quickly return your equipment to original specifications and your operations to full productivity.</p><p>All maintenance service contracts provide priority to customer over those without service contract coverage.</p><p>InTec System is authorized service partner of majority of its vendor partners, practicing full coverage of warranty and after warranty service support, during normal working hours (Monday to Friday, from 8:30 to 16:30), but also we extend it to 24×7 full level of support model. Moreover, our full service treatment to our customers is accompanied and includes different level of training and consulting activities.</p><p>At InTec System we place the client and its business requirements as our service model, ensuring that we deliver comprehensive service support that exceeds client's expectations.</p>"
  },
  {
    slug: "it-security",
    category: "Cloud & Support",
    title: "IT Security Services",
    shortDescription: "Advanced protection for disruptive technologies and enterprise data.",
    description: "At Intec System, we draw on our deep expertise of a large pool of experienced security professionals to offer IT security solutions from leading vendors that address the key challenges faced by enterprises today.",
    icon: ShieldCheck,
    items: [
      "Identity and access governance",
      "Data protection",
      "Risk & compliance management",
      "Threat management and mitigation",
      "Application, network & mobile security",
      "Cyber security monitoring & management"
    ],
    expertise: [
      { id: 1, title: "Defense-in-Depth", description: "Multi-layered security strategies" },
      { id: 2, title: "Risk Management", description: "Holistic risk-driven approach" },
      { id: 3, title: "Next-Gen Security", description: "Agility, flexibility & cost effectiveness" }
    ],
    detailedContent: "<p>The proliferation of disruptive technologies like mobile, social, cloud and big data has been increasingly impacting protection strategies. These technologies will continue to add to the complexity and drive the security needs of the IT infrastructure and information assets. They will also challenge integrity of current security controls and will risk enterprise data and intellectual property (IP).</p><p>Thus, it's important that businesses have a strategy to deliver effective enterprise security risk management and situational awareness using defense-in-depth strategies, monitoring, analysis and reporting.</p><p>Our IT security services aim to improve the agility, flexibility and cost effectiveness of the next generation needs of information security and compliance programs. We ensure a holistic risk driven approach for organizations with solutions we provide in the areas of identity and access governance, data protection, risk & compliance, threat management and mitigation (application, network & mobile) and cyber security monitoring & management.</p>"
  },

  // ── Implementation & Consultancy ──
  {
    slug: "it-implementation",
    category: "Implementation & Consultancy",
    title: "IT Implementation Services",
    shortDescription: "Connect various IT systems into one cohesive, well-functioning body.",
    description: "Intec System IT Integration Services aims to connect various IT systems, hardware and software into one cohesive and well-functioning body, building an efficient and safe environment.",
    icon: Wrench,
    items: [
      "Analysis and design of IT platforms",
      "Implementation and migration of IT solutions",
      "Supply of equipment and software",
      "Virtualization of physical environments",
      "Business process integration consulting",
      "IT systems integration consulting",
      "Implementation and post-implementation support",
      "High-availability solutions"
    ],
    expertise: [
      { id: 1, title: "End-to-End", description: "Counseling to implementation" },
      { id: 2, title: "High Availability", description: "Clusters & failover design" },
      { id: 3, title: "Virtualization", description: "Physical to virtual migration" }
    ],
    detailedContent: "<p>Intec System IT Integration Services aims to connect various IT systems, hardware and software into one cohesive and well-functioning body. The goal of IT integration services is to build an efficient and safe environment that provides quick access and reliability, efficiency and completeness of information management.</p><p>We offer comprehensive IT integration services – from counseling and consultation, all the way to identification of business needs, as well as the design and implementation of solutions to facilitate and focus the work within a single tool.</p>"
  },
  {
    slug: "it-consultancy",
    category: "Implementation & Consultancy",
    title: "IT Consultancy",
    shortDescription: "Improve strategy and operations to increase shareholder value.",
    description: "InTec System partners with clients to help them improve their strategy and operations, with goal of increasing shareholder value and corporate earnings.",
    icon: Briefcase,
    items: [
      "Strategy and operations improvement",
      "Tailored solutions for specific needs",
      "End-to-end integrated solutions",
      "Package implementation",
      "Systems integration",
      "Outsourcing services"
    ],
    expertise: [
      { id: 1, title: "Strategic Depth", description: "In-depth client understanding" },
      { id: 2, title: "Technology Partners", description: "Strengthened competence" },
      { id: 3, title: "End-to-End", description: "Integrated consulting solutions" }
    ],
    detailedContent: "<p>InTec System partners with clients to help them improve their strategy and operations, with goal of increasing shareholder value and corporate earnings. Each project is approached from an in-depth understanding of the client's activity, leading to tailored solutions that meet the clients' specific needs.</p><p>Our consulting services provide a broad range of integrated end-to-end solutions which comprise elements of strategy, operations, package implementation, systems integration and outsourcing. The partnership with our technology partners strengthens additionally our competence.</p>"
  },
  {
    slug: "document-management",
    category: "Implementation & Consultancy",
    title: "Document Management Services",
    shortDescription: "Transition from paperwork to paperless easily.",
    description: "Intec System offers a one stop shop for organizations to make the transition from paperwork to paperless easily, including system design, outsourcing, project management and training.",
    icon: FileText,
    items: [
      "Examine existing paper processes",
      "Identify cost savings with automation & digitization",
      "Electronic document management (incl. cloud)",
      "Intelligent data capture & workflow solutions",
      "Seamless transition via project management",
      "Managed services: scanning, archive, mail room operations"
    ],
    expertise: [
      { id: 1, title: "Full Lifecycle", description: "Design to managed services" },
      { id: 2, title: "Cloud Solutions", description: "Modern document management" },
      { id: 3, title: "Process Automation", description: "Purchase-to-pay solutions" }
    ],
    detailedContent: "<p>Intec System offer a one stop shop for organizations to make the transition from paperwork to paperless easily. Our document management services include system design, document management outsourcing, project management, implementation, support, training and a whole range of business process services to help you on your journey to the paperless office.</p><p>Our knowledgeable and qualified team can help examine your existing paper processes, identify cost savings by providing ideas and solutions to automate and digitize your processes using the latest electronic document management (including cloud solutions), intelligent data capture, workflow and purchase to pay solutions.</p><p>We support you in building a design specification that meets your exact business requirements, provide a seamless transition to your paperless office through project management and support, and offer additional managed services including data capture, document scanning, archive storage, and mail room operations such as claims or invoice processing.</p>"
  },

  // ── Automation & Dev ──
  {
    slug: "workflow-automation",
    category: "Automation & Dev",
    title: "Workflow Automation Services",
    shortDescription: "Automate workflows so business processes run with far lower overheads.",
    description: "At InTec System, we help organizations automate workflows so that business processes are followed with far lower overheads. We analyse, suggest improvements, and apply technology.",
    icon: RefreshCw,
    items: [
      "Current business process analysis",
      "Process improvement suggestions",
      "Technology-driven workflow automation",
      "Greater productivity outcomes",
      "Digital transformation enablement",
      "Elimination of bloated manual processes"
    ],
    expertise: [
      { id: 1, title: "Process Analysis", description: "Deep workflow mapping" },
      { id: 2, title: "Automation", description: "Technology-driven solutions" },
      { id: 3, title: "Transformation", description: "Digital-first approach" }
    ],
    detailedContent: "<p>Managing your business operations depends on many different workflows. Data needs to be available to the right people, approvals and reviews need to be done, reports need to be generated and tasks need to be tracked. But in many organizations, these processes are just made more difficult than they need to be. Inefficient processes that are based on manual work and outdated tools lead to a loss of productivity, costly errors and unhappy teams.</p><p>At InTec System, we help organizations automate workflows so that business processes are followed with far lower overheads. We analyse your current business processes, suggest process improvements, and apply technology to automate workflows.</p><p>Free your organization from bloated processes that perpetuate inefficiency and cost. Our workflow automation services lead the way to greater productivity and digital transformation.</p>"
  },
  {
    slug: "suscriptor",
    category: "Automation & Dev",
    title: "Suscriptor Portfolio Development",
    shortDescription: "Free information trapped in documents and accelerate business workflows.",
    description: "We've poured nearly 10 years of daily work into Suscriptor's development. With hands-on experience and expertise, we develop and customize requirements on our Suscriptor platform.",
    icon: FileSearch,
    items: [
      "Archiving management",
      "Procurement management",
      "Complaints & appeals handling",
      "Case management",
      "Medical archives",
      "Help desk solutions",
      "Human capital management",
      "Capture, scanning & digital signing"
    ],
    expertise: [
      { id: 1, title: "10+ Years", description: "Daily development experience" },
      { id: 2, title: "Modular Design", description: "A la carte component selection" },
      { id: 3, title: "Out-of-the-Box", description: "Diverse ready-made solutions" }
    ],
    detailedContent: "<p>We've poured nearly 10 years of daily work into Suscriptor's development. With so much hands-on experience and expertise, we can develop and customize your requirements on our Suscriptor platform.</p><p>Suscriptor helps companies to free information trapped in documents and accelerates business workflows by transforming static documents into searchable and actionable digital information integrated directly into an organization's systems.</p><p>Suscriptor family of products have diverse out of the box solutions for management of Archiving, Procurements, Complaints, Appeals, Cases, Medical archives, Help Desks, Human Capital, Capture and Scanning, Digital Signing, and more.</p><p>The modular Suscriptor product portfolio gives customers the freedom to tailor a solution by selecting the Suscriptor components a la carte or from an array of packaged solutions – all of which can be mixed and managed as one system.</p>"
  },
  {
    slug: "business-analysis",
    category: "Analysis & Recovery",
    title: "Business Analysis Services",
    shortDescription: "Bringing business and IT closer together for aligned success.",
    description: "Our business analysis services are designed to bring business and IT even closer together. Our business analysts are experts at identifying and understanding your business needs.",
    icon: Search,
    items: [
      "Aligning business goals to IT deliverables",
      "Requirements management & analysis",
      "Use case and persona development",
      "Business process modelling",
      "Project business alignment & scope review",
      "BA training and capability uplift",
      "RFP development, management & evaluation"
    ],
    expertise: [
      { id: 1, title: "Alignment", description: "Business-IT goal harmony" },
      { id: 2, title: "Holistic View", description: "Full organizational perspective" },
      { id: 3, title: "Tailored", description: "Services specific to each client" }
    ],
    detailedContent: "<p>Our business analysis services are designed to bring business and IT even closer together. Our business analysts (BAs) are experts at identifying and understanding your business needs to find solutions for your business and technology challenges.</p><p>At Intec System we find that alignment of business and IT goals is critical to success and working in harmony. New ways of working and methodology we use can be very useful at bringing business and IT together through organizational structure, process and culture. But, having experienced business analysts can also bring a holistic perspective to the complexities of any business and IT initiative and help align teams to common goals and purpose.</p><p>We provide business analysis services tailored to each of our clients in order to deliver the most effective solutions. Our experts will work closely with you and your team and take the time to get to know you and your organization, whether it be the enterprise or only one function or a specific issue or complex project.</p>"
  },
  {
    slug: "custom-software",
    category: "Automation & Dev",
    title: "Custom Software Development",
    shortDescription: "Pull off your next project with less stress and less cost.",
    description: "We offer custom software development and consulting services to help you pull off your next project with less stress and less cost, powering you at every stage of your product development lifecycle.",
    icon: Code,
    items: [
      "Market and competitive analysis",
      "Feasibility study and proof of concept",
      "Business and technology innovation",
      "Multi-platform strategy development",
      "Security and scalability roadmaps",
      "Right tech stack selection"
    ],
    expertise: [
      { id: 1, title: "Full Lifecycle", description: "Discovery to post-launch" },
      { id: 2, title: "Multi-Vertical", description: "Refined cross-industry expertise" },
      { id: 3, title: "R&D Experts", description: "Maximize ROI, minimize risk" }
    ],
    detailedContent: "<p>We offer custom software development and consulting services to help you pull off your next project with less stress and less cost. Our team has the technology prowess to power you at every stage of your product development lifecycle, from discovery to ongoing post-launch enhancement.</p><p>We have been refining our expertise across multiple verticals and solutions and are now able to drive success and minimize risk no matter your project's specifics.</p><p>Our R&D and BA experts work with your stakeholders to avoid unplanned costs and maximize the ROI at a later stage of your product development. We help you validate the concept, set clear expectations, and identify potential bottlenecks.</p>"
  },
  {
    slug: "digitalization",
    category: "Analysis & Recovery",
    title: "Digitalization Services",
    shortDescription: "Document conversion and digital asset processing at scale.",
    description: "InTec System provides services that can handle your document conversion projects. We have capacity, know-how, and experience to digitize your assets at our center or your location.",
    icon: BookOpen,
    items: [
      "Document conversion projects",
      "On-site or off-site digitization",
      "Dedicated facility setup at client location",
      "Large-scale document processing",
      "Digital asset management",
      "Hard copy backup solutions"
    ],
    expertise: [
      { id: 1, title: "Capacity", description: "Large-scale processing" },
      { id: 2, title: "Flexibility", description: "On-site or at our center" },
      { id: 3, title: "Experience", description: "Proven track record" }
    ],
    detailedContent: "<p>While almost every organization backs up its electronic data, few entities \"back up\" the information that is retained in hard copy. Customers who require document processing, but who do not want the challenges associated with managing the process, choose to partner with us.</p><p>InTec System provides services that can handle your document conversion projects. We have capacity, know how, and experience to digitize your assets, either in our center or a dedicated facility at client location.</p>"
  },
  {
    slug: "backup-recovery",
    category: "Analysis & Recovery",
    title: "Backup and Disaster Recovery",
    shortDescription: "Business continuity planning to protect your data lifeline.",
    description: "Your data is the lifeline of your business. With Intec System as your reliable partner in Business Continuity Planning and Disaster Recovery, you can rely on our experts.",
    icon: HardDrive,
    items: [
      "Solutions covering all disaster scenarios",
      "Decreased downtime with practical recovery strategies",
      "Automated, always-current continuity plans",
      "No more error-prone tape backups",
      "Regular plan testing and exercises",
      "Critical business function restoration"
    ],
    expertise: [
      { id: 1, title: "Planning", description: "Advance disaster arrangements" },
      { id: 2, title: "Recovery", description: "Defined time-frame restoration" },
      { id: 3, title: "Continuity", description: "Live, maintained plans" }
    ],
    detailedContent: "<p>Backup and Disaster Recovery planning is the process of developing advance arrangements and procedures that enable an organization to respond to a disaster by resuming critical business functions within a defined time frame, minimizing loss, and restoring affected areas. It is not a two-month project, nor is it a project you can forget about once it is completed. An effective recovery plan is a live recovery plan. The plan must be maintained and tested/exercised regularly.</p><p>Your data is the lifeline of your business. If you're not 100% sure your data is safe, your business is at risk.</p><p>With Intec System, as your reliable partner in Business Continuity Planning and Disaster Recovery, you can rely on our experts to take the stress out of planning for the unforeseen disasters that might ruin your business, decrease downtime in the case of a disaster with practical strategies for Recovery and Back Up, and say goodbye to error-prone tape backups with comprehensive Business Continuity plans that are automated and always current.</p>"
  }
];

export const SOLUTIONS_DATA = [

  // ── Solutions ──
  {
    slug: "secureplus",
    title: "SecurePlus",
    shortDescription: "Cutting-edge fraud prevention specifically for the financial sector.",
    description: "SecurePlus delivers comprehensive, automated protection against fraudulent activities across multiple channels, including online and mobile banking.",
    icon: ShieldCheck,
    items: [
      "Fraud Management Automation",
      "Account Takeover (ATO) Detection",
      "Multi-Channel Protection",
      "New Account Fraud Detection"
    ],
    expertise: [
      { id: 1, title: "Fraud Automation", description: "Automate detection across digital channels using threat intelligence." },
      { id: 2, title: "ATO Detection", description: "Enhance ability to identify and respond to takeover attempts." },
      { id: 3, title: "Real-time Security", description: "Ensure the highest level of security across all digital touchpoints." }
    ],
    detailedContent: "<p>In today’s fast-evolving digital landscape, financial organizations face unprecedented threats. Safeguarding your customers’ assets and data has never been more critical.</p><p>SecurePlus is a cutting-edge fraud prevention module designed specifically for the financial sector. It delivers comprehensive, automated protection against fraudulent activities across multiple channels, including online and mobile banking.</p><p>With SecurePlus, your institution can ensure the highest level of security, detecting threats in real time and keeping your customers’ information safe. Empower your organization with smarter, faster, and more reliable fraud prevention—because in the digital age, security isn’t optional, it’s essential.</p>"
  },
  {
    slug: "cyber-security",
    title: "Cyber Security Solutions",
    shortDescription: "Establishing secure frameworks for increased visibility.",
    description: "We provide end-to-end cybersecurity frameworks that increase sensitivity and visibility across your entire network infrastructure, protecting against modern threats.",
    icon: ShieldCheck,
    items: ["Network Visibility", "Threat Detection", "Vulnerability Management", "SIEM & SOC", "Penetration Testing", "Security Training"],
    expertise: [
      { id: 1, title: "Full Visibility", description: "Complete network oversight" },
      { id: 2, title: "Threat Hunting", description: "Proactive breach detection" },
      { id: 3, title: "Zero Trust", description: "Modern access architecture" }
    ],
    detailedContent: "<p>InTec System's Cyber Security Solutions establish comprehensive security frameworks that give you complete visibility into your network and the ability to detect and respond to threats in real-time.</p><p>We implement defense-in-depth strategies combining SIEM platforms, SOC-as-a-service, vulnerability management, and zero-trust architecture to protect your organization against the full spectrum of modern cyber threats.</p>"
  },
  {
    slug: "hci",
    title: "Hyper-Converged Infrastructure Solutions",
    shortDescription: "Software-centric architecture integrating all resources.",
    description: "Our HCI solutions integrate compute, storage, networking and virtualization into a single software-centric architecture that simplifies operations and reduces costs.",
    icon: Database,
    items: ["Compute Integration", "Software-Defined Storage", "Network Virtualization", "Unified Management", "Elastic Scaling", "Simplified Operations"],
    expertise: [
      { id: 1, title: "All-in-One", description: "Converged infrastructure stack" },
      { id: 2, title: "Software-Defined", description: "Fully virtualized platform" },
      { id: 3, title: "Elastic Scale", description: "Add nodes in minutes" }
    ],
    detailedContent: "<p>Hyper-Converged Infrastructure from InTec System collapses your entire data center stack into a single, software-defined platform. By integrating compute, storage, and networking into unified appliances, we dramatically simplify operations, reduce hardware footprint, and cut costs.</p><p>Our HCI solutions provide enterprise-grade performance with the simplicity of cloud, allowing you to scale by simply adding nodes and manage everything through a single pane of glass.</p>"
  }
];
