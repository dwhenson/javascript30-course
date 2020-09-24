// The array of items with relevant data attribute
const videos = Array.from(document.querySelectorAll("[data-time]"));

/**
 * Converts mins:sec strings into seconds as a number
 * @param   {Array}  video  The array with min:sec strings as a data attribute
 * @return  {Number}         The number of seconds each video lasts
 */
const videoSeconds = videos.map((video) => {
	const parts = video.dataset.time.split(":");
	const minutes = parseFloat(parts[0]);
	const seconds = parseFloat(parts[1]);
	return minutes * 60 + seconds;
});

/**
 * Reduces the array of seconds into one number of total seconds
 * @param   {Number}  total    The running total seconds
 * @param   {Number}  seconds  The seconds for each item
 * @return  {Number}           The total number of all seconds combined
 */
const totalSeconds = videoSeconds.reduce((total, seconds) => {
	return total + seconds;
}, 0);

/**
 * Converts the total number of seconds into a time formatted string
 * @param   {Number}  seconds  The total number of seconds to convert
 * @return  {String}           The total seconds as hours:minutes:seconds
 */
const totalTime = function secondsToTime(seconds) {
	const hours = Math.floor(seconds / 3600)
		.toString()
		.padStart(2, "0");
	const mins = Math.floor((seconds % 3600) / 60)
		.toString()
		.padStart(2, "0");
	const secs = Math.floor(seconds % 60)
		.toString()
		.padStart(2, "0");

	return `${hours}:${mins}:${secs}`;
};

// Calls the totalTime function
totalTime(totalSeconds);
