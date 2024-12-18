import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
	state: () => ({
		info: null as string | null, // This will hold the fetched info data
		loading: false,
		error: null as string | null,
	}),
	actions: {
		async fetchAboutData() {
			this.loading = true; // Set loading state to true
			this.error = null; // Reset the error
			try {
				// Making the fetch request to the API
				const response = await fetch("/api/hello");
				if (!response.ok) {
					throw new Error("Failed to fetch about data");
				}

				// Parse the JSON response
				const data = await response.json();

				// Store the fetched data into the 'info' state
				this.info = data.message; // Assuming the response has a 'message' field
			} catch (err: any) {
				// Catch any error and store it
				this.error = err.message || "Something went wrong";
			} finally {
				// Set loading state to false after the fetch is complete
				this.loading = false;
			}
		},
	},
});
