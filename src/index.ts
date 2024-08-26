/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export interface Env{}
export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log("Hello from local console")
		console.log(JSON.stringify(request.cf))
		return new Response(JSON.stringify(request.cf?.botManagement.staticResource),{
			headers:{
				'Content-Encoding': 'zip',
				'Content-Type': 'application/json'
			}
		});
	},
} satisfies ExportedHandler<Env>;
