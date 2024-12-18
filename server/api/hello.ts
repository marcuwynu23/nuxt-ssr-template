// server/api/hello.ts

export default defineEventHandler((event) => {
	console.log("hello world!");
	return { message: "Hello, World!" };
});
