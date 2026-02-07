<h1>Cloud Native DevOps Architecture</h1>
<p><b>Tech Stack : </b> <i>ReactJS, NodeJS, ExpressJS, MongoDB, Redis, Docker, Kubernetes, Jenkins, AWS ELB</i></p>

<h4>Architecture :</h4>
<ul>
  <li>Decoupled Frontend</li>
  <li>CI/CD with jenkins</li>
  <li>Kubernetes container orchestration</li>
  <li>Load balancing using AWS ELB</li>
  <li>Cloud hosted microservice style backend</li>
  <li>Application monitoring with prometheus and grafana</li>
</ul>

<br/>

<h2>User Flow</h2>
<img height='450' src='https://github.com/isudiptodas/Cloud-Voting-System/blob/main/user-flow.jpg' />
<ul>
  <li>User enters URL and visits webistes</li>
  <li>Frontend loads</li>
  <li>At any operation the traffic will be forwarded to the load balancer</li>
  <li>The load balancer will forward traffic based on server health and incoming load</li>
  <li>Each backend pods will connect with the database and returns response</li>
</ul>
<br/>

<h2>Internal Working</h2>
<img height='500' src='https://github.com/isudiptodas/Cloud-Voting-System/blob/main/internal-working.jpg' />
<ul>
  <li>Frontend deployed on vercel (Independent)</li>
  <li>Database hosted on cloud servers (Auto manage) </li>
  <li>Backend connects with jenkins webhook</li>
  <li>On each code push webhook triggers, test happends, builds image, pushed on docker hub</li>
  <li>Image pulled from docker hub & deployed on kubernetes cluster</li>
  <li>All operations, health monitored and logged with prometheus & grafana</li>
  <li>Life cycle continues</li>
</ul>
