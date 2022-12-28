export default [{
    homePageHtml: `<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k : is Single machine enough? </h1>
    <p class="leading-tight text-gray-300 lg:mb-6  dark:text-white">
        Do you know what all it takes to handle 10k concurrent users on a simple inmemory application?
        a Raspberry pi? 8 cpus with 32 gb server? or horizontal scaled clustered behind a load balancer?
        <br/>
        What would be the cost of running such application on different environments and any gusses around first bottlenecks you may hit?
    
        <br/><br/>
        <p class="mb-4 font-bold"> Let's Find Out :</p>
        <p> Try to locally arrange following resource and Run "Tests" - </p>
        <p>
        <ul class="list-disc pl-6">
            <li> server with 2vcpu and 8gb ram</li>
            <li> server with 8vcpu and 32gb ram</li>
            <li> a l7 load balancer</li>
        </ul>
        </p>
        <br><br>
        <p> Your aim should be to keep the server latency below 10ms all the time and find out the best resource arrangement for given app </p>
    </p>`,
    problems:[{
    name: "is Single machine enough?",
    resourcePool: [
        {
            "id": 1,
            "name": "small-vm",
            "tag": ["vm", "service"],
            "connections": ["loadbalancer"],
            "description": "2vcpus, 8gb ram"
        },
        {
            "id": 2,
            "name": "mid-vm",
            "tag": ["vm", "service"],
            "connections": ["loadbalancer"],
            "description": "8vcpus, 32gb ram"
        },
        {
            "id": 3,
            "name": "L7-lb",
            "tag": ["loadbalancer"],
            "connections": ["vm", "service"],
            "description": "layer 7 load balancer"
        },
        {
            "id": 4,
            "name": "azure function",
            "tag": ["vm", "service"],
            "connections": [""],
            "description": "Function as a service"
        }
    ],
    problemStatement: `<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k : is Single machine enough? </h1>
    <p class="leading-tight text-gray-300 lg:mb-6  dark:text-white">
        Do you know what all it takes to handle 10k concurrent users on a simple inmemory application?
        a Raspberry pi? 8 cpus with 32 gb server? or horizontal scaled clustered behind a load balancer?
        <br/>
        What would be the cost of running such application on different environments and any gusses around first bottlenecks you may hit?
    
        <br/><br/>
        <p class="mb-4 font-bold"> Let's Find Out :</p>
        <p> Try to locally arrange following resource and Run "Tests" - </p>
        <p>
        <ul class="list-disc pl-6">
            <li> server with 2vcpu and 8gb ram</li>
            <li> server with 8vcpu and 32gb ram</li>
            <li> a l7 load balancer</li>
        </ul>
        </p>
        <br><br>
        <p> Your aim should be to keep the server latency below 10ms all the time and find out the best resource arrangement for given app </p>
    </p>`,
    result: {
        "latencyP95": "0.3",
        "throughput": "0.14",
        "cpuBusy": "0.6",
        "ramUsed": "0.14",
        "load5m": "0.14",
        "swapUsed": "0",
        "dashboardLink": "https://snapshots.raintank.io/dashboard/snapshot/gp6316Sa3yizqJ4mbxIZxv3QTdCtpfGE?orgId=2&from=1671212437397&to=1671213133796"
    }
},
{
    name: "Is Runtime Matters?",
    resourcePool: [
        {
            "id": 1,
            "name": "small-vm",
            "tag": ["vm", "service"],
            "connections": ["loadbalancer"],
            "description": "2vcpus, 8gb ram"
        },
        {
            "id": 2,
            "name": "mid-vm",
            "tag": ["vm", "service"],
            "connections": ["loadbalancer"],
            "description": "8vcpus, 32gb ram"
        },
        {
            "id": 3,
            "name": "L7-lb",
            "tag": ["loadbalancer"],
            "connections": ["vm", "service"],
            "description": "layer 7 load balancer"
        },
        {
            "id": 4,
            "name": "azure function",
            "tag": ["vm", "service"],
            "connections": [""],
            "description": "Function as a service"
        },
        {
            "id": 4,
            "name": "golang",
            "tag": ["runtime", "service"],
            "connections": [""],
            "description": "Function as a service"  
        },
        {
            "id": 5,
            "name": "nodejs",
            "tag": ["runtime", "service"],
            "connections": [""],
            "description": "Function as a service"  
        }
    ],
    problemStatement: `<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k : Is Runtime Matters? </h1>
    <p class="leading-tight text-gray-300 lg:mb-6  dark:text-white">
        Do you know what all it takes to handle 10k concurrent users on a simple inmemory application?
        a Raspberry pi? 8 cpus with 32 gb server? or horizontal scaled clustered behind a load balancer?
        <br/>
        What would be the cost of running such application on different environments and any gusses around first bottlenecks you may hit?
    
        <br/><br/>
        <p class="mb-4 font-bold"> Let's Find Out :</p>
        <p> Try to locally arrange following resource and Run "Tests" - </p>
        <p>
        <ul class="list-disc pl-6">
            <li> server with 2vcpu and 8gb ram</li>
            <li> server with 8vcpu and 32gb ram</li>
            <li> a l7 load balancer</li>
        </ul>
        </p>
        <br><br>
        <p> Your aim should be to keep the server latency below 10ms all the time and find out the best resource arrangement for given app </p>
    </p>`,
    result: {
        "latencyP95": "0.3",
        "throughput": "0.14",
        "cpuBusy": "0.6",
        "ramUsed": "0.14",
        "load5m": "0.14",
        "swapUsed": "0",
        "dashboardLink": "https://snapshots.raintank.io/dashboard/snapshot/gp6316Sa3yizqJ4mbxIZxv3QTdCtpfGE?orgId=2&from=1671212437397&to=1671213133796"
    }
}]}]