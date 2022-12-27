const problem = `
<h1 class="mb-4 text-3xl font-extrabold text-center lg:mb-6 lg:text-4xl dark:text-white"> C10k : handle 10k concurrent users </h1>
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
</p>`

export default problem