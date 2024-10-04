export default {
	async scheduled(request, env, ctx) {
		let value = await env.count.get("total");
		let valueint = parseInt(value);
		console.log(valueint)
		const httpresponse = await fetch("https://api.humanitix.com/v1/events/" + env.humanitixeventid + "/tickets?page=1&pageSize=1", {
			headers: {
				"x-api-key": env.humanitixapikey,
			},
			});
		const jsonresp = await httpresponse.json()
		const totalsold = parseInt(jsonresp.total, 10)
		// console.log(jsonresp)

		if (totalsold > valueint) {
			console.log("change!")
			await env.count.put("total", totalsold.toString())
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "text/plain");

			const raw = '{"totalsalesnumber":"' + totalsold.toString() + '", "totalsalesdiff": "' + (totalsold - valueint).toString() + '", "totalsalesprevious": "' + valueint.toString() + '"}';

			const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			const resptwo = await fetch(env.slackwebhook, requestOptions)
			console.log(resptwo.text())
		} else {
			console.log("no change needed")
		}

		return new Response(totalsold);
	},
};
