import { useState } from 'react';
import {
  ArrowUpRight, BarChart3, Boxes, BriefcaseBusiness, ChevronRight,
  Database, ExternalLink, Github, Linkedin, Menu, PackageCheck, Route,
  Truck, Workflow, X
} from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Atomgrid Warehouse MIS',
    kicker: 'OPERATIONS ANALYTICS',
    description: 'Shipment movement, TAT, POD, delays, transporter performance and warehouse activity in one operating view.',
    tags: ['TAT', 'POD', 'MIS', 'Analytics'],
    href: 'https://atomgrid-warehouse-mis.onrender.com/',
    icon: Boxes,
  },
  {
    id: '02',
    title: 'AI Transporter Finder',
    kicker: 'LOGISTICS DECISION SUPPORT',
    description: 'A practical decision-support tool for finding transporter options using destination pincode, quantity and movement requirements.',
    tags: ['Pincode', 'PTL', 'Transport', 'AI'],
    href: 'https://github.com/sharadtiwari-atomgrid/atomgrid-transporter-finder',
    icon: Truck,
  },
  {
    id: '03',
    title: 'Amazon Operations Automation',
    kicker: 'PROCESS AUTOMATION',
    description: 'VBA reporting, scheduling, BESET workflows, route planning, Selenium and browser automation built around repetitive operational work.',
    tags: ['VBA', 'Python', 'Selenium', 'Workflow'],
    href: 'https://www.linkedin.com/in/sharad-tiwari-/',
    icon: Workflow,
  },
];

const capabilities = [
  'Transportation Planning', 'Warehouse Operations', 'Supply Chain Management',
  'TAT & SLA Management', 'POD & Exception Management', 'Capacity & Demand Planning',
  'Advanced Excel & VBA', 'Python & SQL', 'Operational Dashboards', 'SOP & RCA',
  'Supplier Coordination', 'Transporter Management',
];

const atomgridWork = [
  'Domestic transportation', 'Shipment planning', 'Warehouse coordination',
  'Inventory movement', 'Delivery execution', 'TAT monitoring', 'POD compliance',
  'Supplier readiness', 'Customer-arranged movement', 'Transporter performance',
  'RCA & SOPs', 'Operational MIS',
];

const amazonTools = [
  'Cedric', 'SCC', 'SUI', 'OPST', 'Mercury Dashboard', 'SharePoint',
  'Slack workflows', 'Excel / VBA', 'Python', 'Selenium', 'Tampermonkey',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const project = projects[active];
  const ProjectIcon = project.icon;
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => go('top')}>
          <span className="brand-mark">ST</span>
          <span>SHARAD TIWARI</span>
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => go('work')}>Work</button>
          <button onClick={() => go('experience')}>Experience</button>
          <button onClick={() => go('capabilities')}>Capabilities</button>
          <button onClick={() => go('contact')}>Contact</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-meta"><span>SUPPLY CHAIN / OPERATIONS / AUTOMATION</span><span>INDIA · 2026</span></div>
          <div className="hero-main">
            <div>
              <p className="hero-index">01 — PROFILE</p>
              <h1>Sharad<br /><span>Tiwari.</span></h1>
              <p className="hero-lead">Supply Chain Manager at Atomgrid. I connect logistics execution, operational analytics and automation to make supply chains easier to run.</p>
              <div className="hero-actions">
                <button className="button-dark" onClick={() => go('work')}>View selected work <ArrowUpRight size={16} /></button>
                <a href="https://www.linkedin.com/in/sharad-tiwari-/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="hero-note">
              <div className="note-top"><span>OPERATING PRINCIPLE</span><span>ST / 2026</span></div>
              <p>Understand the workflow.<br /><em>Find the friction.</em><br />Build the better mechanism.</p>
              <div className="note-bottom"><span>03+ YEARS</span><span>AMAZON → ATOMGRID</span></div>
            </div>
          </div>
          <div className="hero-strip">
            <div><strong>03+</strong><span>YEARS TRANSPORT<br />& LOGISTICS OPS</span></div>
            <div><strong>2026</strong><span>SUPPLY CHAIN MANAGER<br />AT ATOMGRID</span></div>
            <div><strong>11</strong><span>AWS EDUCATE<br />FOUNDATIONAL COURSES</span></div>
            <div><strong>15 → 1</strong><span>MINUTES ON A<br />REPORT AUTOMATION</span></div>
          </div>
        </section>
        <section className="intro section">
          <div className="section-label">02 — THE PROFILE</div>
          <div className="intro-grid">
            <h2>Operations first.<br /><span>Technology where it helps.</span></h2>
            <div>
              <p>I work across domestic transportation, shipment planning, warehouse coordination, inventory movement, delivery execution, TAT, POD, supplier readiness and transporter performance.</p>
              <p>My technology layer is deliberately practical: dashboards, Excel/VBA, Python, SQL, browser automation and lightweight decision-support tools.</p>
            </div>
          </div>
          <div className="profile-facts">
            <div><span>01</span><strong>PLAN</strong><p>Demand, capacity, routing and shipment planning.</p></div>
            <div><span>02</span><strong>MOVE</strong><p>Supplier, warehouse, transporter and customer coordination.</p></div>
            <div><span>03</span><strong>CONTROL</strong><p>TAT, POD, exceptions, compliance and operational visibility.</p></div>
            <div><span>04</span><strong>IMPROVE</strong><p>RCA, SOPs, MIS and automation around repetitive work.</p></div>
          </div>
        </section>
        <section id="work" className="section work">
          <div className="section-heading">
            <div><div className="section-label">03 — SELECTED WORK</div><h2>Built around<br /><span>real operations.</span></h2></div>
            <p>Tools I have built or shaped to improve visibility, movement decisions and repetitive workflows.</p>
          </div>
          <div className="work-layout">
            <div className="work-nav">
              {projects.map((item, index) => <button key={item.id} className={active === index ? 'work-tab active' : 'work-tab'} onClick={() => setActive(index)}><span>{item.id}</span><b>{item.title}</b><ChevronRight size={16} /></button>)}
            </div>
            <article className="work-feature">
              <div className="feature-top"><span>{project.kicker}</span><span>CASE {project.id}</span></div>
              <div className="feature-visual"><div className="visual-grid" /><ProjectIcon size={42} /></div>
              <div className="feature-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={15} /></a></div>
            </article>
          </div>
        </section>
        <section id="experience" className="section experience">
          <div className="section-label">04 — EXPERIENCE</div>
          <div className="timeline">
            <article className="timeline-item current"><div className="timeline-date">2026 — NOW</div><div className="timeline-marker" /><div className="timeline-body"><div className="role-line"><h3>Supply Chain Manager</h3><span>ATOMGRID</span></div><p>Managing end-to-end supply chain and logistics operations across domestic transportation, shipment planning, warehouse coordination, inventory movement and delivery execution.</p><div className="chips">{atomgridWork.map((x) => <span key={x}>{x}</span>)}</div></div></article>
            <article className="timeline-item"><div className="timeline-date">2023 — 2026</div><div className="timeline-marker" /><div className="timeline-body"><div className="role-line"><h3>Transportation Specialist</h3><span>AMAZON</span></div><p>Managed transportation operations focused on scheduling, route planning, capacity planning, exception resolution, station coordination and operational reporting. Built tools and SOPs to reduce repetitive manual work and stabilize workflows.</p><div className="chips">{amazonTools.map((x) => <span key={x}>{x}</span>)}</div></div></article>
          </div>
        </section>
        <section id="capabilities" className="section capabilities-section">
          <div className="section-heading"><div><div className="section-label">05 — CAPABILITIES</div><h2>The operating<br /><span>toolkit.</span></h2></div><p>Execution, visibility and automation — grouped around the work rather than a generic skills list.</p></div>
          <div className="capability-board">{capabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b></div>)}</div>
        </section>
        <section className="section build-section"><div className="section-label">06 — WHAT I BUILD</div><div className="build-grid">
          <article><BarChart3 /><span>VISIBILITY</span><h3>Make the operation legible.</h3><p>Dashboards and MIS for shipments, TAT, POD, delays, transporter performance and inventory movement.</p></article>
          <article><Route /><span>TRANSPORTATION</span><h3>Make movement executable.</h3><p>Capacity and demand planning, route planning, transporter identification and last-mile exception handling.</p></article>
          <article><Workflow /><span>AUTOMATION</span><h3>Remove repetitive effort.</h3><p>VBA report automation, Python scripts, Selenium/browser tooling and Tampermonkey workflows.</p></article>
        </div></section>
        <section className="section highlights">
          <div className="section-heading"><div><div className="section-label">07 — OPERATING HIGHLIGHTS</div><h2>The work behind<br /><span>the titles.</span></h2></div><p>Selected areas of responsibility, projects and mechanisms from Amazon and Atomgrid.</p></div>
          <div className="highlight-grid">
            <article><small>ATOMGRID / OPERATIONS</small><h3>End-to-end domestic logistics</h3><p>Shipment planning, supplier coordination, warehouse movement, delivery execution and customer-arranged transportation.</p><ul><li>Supplier → warehouse → customer movement</li><li>Warehouse coordination and inventory movement</li><li>Transporter performance and POD follow-up</li><li>TAT and delay exception tracking</li></ul></article>
            <article><small>ATOMGRID / CONTROL</small><h3>Operational visibility</h3><p>Reporting mechanisms around movement status, TAT, POD, delays and transporter-level performance.</p><ul><li>Daily and monthly MIS analysis</li><li>POD pending visibility</li><li>Exception and RCA tracking</li><li>Shipment status reconciliation</li></ul></article>
            <article><small>AMAZON / AUTOMATION</small><h3>Scheduling & reporting automation</h3><p>VBA and Python-based tools around repetitive scheduling, reporting and roster activities.</p><ul><li>Daily report / roster automation</li><li>Random task allocation with Python</li><li>BESET macros for multiple regions</li><li>Workflow tooling and browser scripts</li></ul></article>
            <article><small>AMAZON / TRANSPORTATION</small><h3>Route & station operations</h3><p>Route planning, capacity planning, station coordination and operational exception resolution.</p><ul><li>AE route planning automation</li><li>Capacity and demand planning</li><li>Station workflow support</li><li>Sev-2 issue resolution and stabilization</li></ul></article>
            <article><small>PROCESS / GOVERNANCE</small><h3>SOPs & root-cause analysis</h3><p>Recurring operational problems converted into clearer mechanisms, SOPs and controls.</p><ul><li>BESET process SOPs</li><li>Sort planning workflows</li><li>Buyback leakage tracking</li><li>RCA and corrective-action design</li></ul></article>
            <article><small>TECHNOLOGY / ENABLEMENT</small><h3>Operations + technology layer</h3><p>Practical technology used where it creates leverage for an operations team.</p><ul><li>Advanced Excel / VBA</li><li>Python and basic SQL</li><li>Selenium / Tampermonkey</li><li>Dashboards and decision-support tools</li></ul></article>
          </div>
        </section>
        <section className="section tool-stack"><div className="section-label">08 — TOOL STACK</div><div className="tool-stack-grid">
          <div><small>OPERATIONS</small><h3>Logistics systems</h3><p>Cedric · SCC · SUI · OPST · Mercury Dashboard · station workflows · warehouse MIS</p></div>
          <div><small>DATA</small><h3>Reporting & analytics</h3><p>Advanced Excel · Pivot Tables · VLOOKUP / XLOOKUP · VBA · SQL · operational dashboards</p></div>
          <div><small>AUTOMATION</small><h3>Workflow tooling</h3><p>Python · Selenium · Tampermonkey · browser extensions · SharePoint automation · Slack workflows</p></div>
          <div><small>CLOUD / LEARNING</small><h3>Technology foundation</h3><p>AWS Educate · Oracle Cloud Infrastructure · GenAI foundations · Machine Learning foundations</p></div>
        </div></section>
        <section className="section learning"><div className="section-label">09 — LEARNING</div><div className="learning-grid">
          <div className="learning-title"><h2>Technology<br /><span>layer.</span></h2><p>Continuing to build depth around cloud, data and AI while staying grounded in operations.</p></div>
          <div className="credential"><Database /><div><small>2025</small><h3>Oracle Cloud Infrastructure</h3><p>Certified Foundations Associate</p></div></div>
          <div className="credential"><BarChart3 /><div><small>IIT ROORKEE</small><h3>Data Science & AI</h3><p>Advanced Certification</p></div></div>
          <div className="credential"><PackageCheck /><div><small>11 COURSES</small><h3>AWS Educate</h3><p>Cloud, compute, databases, networking, security, serverless, storage, GenAI and ML foundations.</p></div></div>
          <div className="credential"><BriefcaseBusiness /><div><small>ANALYTICS</small><h3>SQL & Data Analysis</h3><p>SQL learning and certification work covering data analysis and advanced SQL.</p></div></div>
        </div></section>
        <section className="impact"><div className="impact-label">10 — AUTOMATION IMPACT</div><div className="impact-main"><div><span>ONE EXAMPLE</span><h2>15 min <em>→</em> 1 min</h2><p>VBA automation for daily roster/report preparation reduced a repetitive preparation task from roughly 15 minutes to about 1 minute.</p></div><div className="impact-meter"><div><span>BEFORE</span><b style={{ width: '100%' }} /></div><div><span>AFTER</span><b style={{ width: '7%' }} /></div><small>~93% LESS PREPARATION TIME</small></div></div></section>
        <section id="contact" className="contact section"><div><div className="section-label">11 — CONTACT</div><h2>Let's make the<br /><span>operation better.</span></h2><p>Supply chain · logistics · operations · automation · systems</p></div><div className="contact-links"><a href="https://www.linkedin.com/in/sharad-tiwari-/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="https://github.com/sharadtiwari-atomgrid" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://atomgrid-warehouse-mis.onrender.com/" target="_blank" rel="noreferrer"><ExternalLink size={17} /> Warehouse MIS</a></div></section>
      </main>
      <footer><span>SHARAD TIWARI / 2026</span><span>SUPPLY CHAIN × OPERATIONS × AUTOMATION</span></footer>
    </div>
  );
}

export default App;
