
export const getJobTitles = async (query) => {
  const response = await fetch(`https://job-titles1.p.rapidapi.com/v1/jobtitle?q=${query}`, {
    headers: {
      'x-rapidapi-key': '28d1ac8b52msh04506973993a7b8p1f8a8ejsn7fb7763b5465',
      'x-rapidapi-host': 'job-titles1.p.rapidapi.com',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
};