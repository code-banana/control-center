export default [{
    homePageHtml: `<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k </h1>
    <p class="leading-tight text-gray-300 lg:mb-6  dark:text-white">
        The term "C10k" has been come around ~2000s, which refers to handling 10k concurrent requests. The problem has already been solved now, as there are many systems around which can serve to this scale.
        <br>But, do you know what all it takes to handle such scale? What would be the cost of running such application on different environments and any gusses around first bottlenecks you may hit on single server?
        <br/><br/>
        <p class="mb-4 font-bold"> Let's Try to find out some of these questions :</p>
        For our purpose, we have created a simple in-memory key-value store which exposes two apis -
        <ul class="list-disc pl-6">
        <li> /find?key=pop : Returns a value associated with key "pop"</li>
        <li> /insert?key=pop&value=top : Stores entry pop -> top</li>
        </ul>
        <br><br>
        <p> In Following tasks, You will be deploying this kv-store with different configurations, running tests on them and evaluating their results to understand different engineering tradeoffs. </p>
        <br/>
        <ul class="list-disc pl-6">
        <li> Task1 - What machine should be require to handle c10k? </li>
        <li> Task2 - Find out how much runtime matters.</li>
        <li> Task3 - Let's make data persistent.</li>
        </ul>
    </p>`,
    problems:[{
    name: "is Single machine enough?",
    resourcePool: [
        {
            "id": 1,
            "name": "KV store",
            "type":"vm",
            "tag": ["vm", "service"],
            "description": "key value store",
            config:[
                {"type": "vm", "options":["2 vcpus, 8gb ram", "8 vcpus, 32gb ram"]},
                {"type": "instances", "options":[1,5,10]},
            ]
        }],
    problemStatement: `<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k : is Single machine enough? </h1>
    <p class="leading-tight text-gray-300 lg:mb-6  dark:text-white">
        Hi, any guesses what setup would be enough to handle c10k for our kv-store? <br>
        a Raspberry pi? 8 cpus with 32 gb server? or horizontal scaled clustered behind a load balancer?
        <br/><br/>
        What would be the cost of running such application on different environments and any idea around the first bottlenecks you will hit on single server?
    
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
            "name": "KV store",
            "type":"vm",
            "tag": ["vm", "service"],
            "description": "key value store",
            config:[
                {"type": "vm", "options":["2 vcpus, 8gb ram", "8 vcpus, 32gb ram"]},
                {"type": "instances", "options":[1,5,10]},
                {"type": "runtime", "options": ["golang", "nodejs"]}
            ]
        }],
    problemStatement: `<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k : Is Runtime Matters? </h1>
    <p class="leading-tight text-gray-300 lg:mb-6  dark:text-white">
        Golang and Nodejs both are the popular languages/runtimes of modern era. But, fundamentally both of them handles concurrency is very different.
        <br/><br/>
        Go doesn’t allow you to create real operating system threads. This is because real threads are expensive to make, and constantly switching between them has significant overhead. Instead, Go offers an abstraction called goroutines. This abstraction allows us to pretend we are using real threads, but without the overhead and the scaling problems.
        <br>
        For example, you never want more active operating system threads than there are CPU cores, while it’s perfectly reasonable to have 100s of thousand of active goroutines. Goroutines are Go’s implementation of green threads, also called M:N scheduling.
    
        <br/><br/>
        Whereas, Nodejs uses single threaded async event-driven model. It uses event queue to put waiting requests and single thread proccess each of them one by one, You can get more about nodejs working through this - .


        <p class="mb-4 font-bold"> Resource Pool :</p>
        <p> Try to locally arrange following resource and Run "Tests" - </p>
        <p>
        <ul class="list-disc pl-6">
            <li> Added nodejs and golang implementation of kv-store</li>
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